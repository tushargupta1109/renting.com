import axios from "axios";
import React, { useState } from "react";
import Header2 from "./header2";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Add_house = () => {
  const navigate = useNavigate();
  const [house, setHouse] = useState({
    address: "",
    city: "",
    rent: "",
    detail: "",
    mobile: "",
    file: null,
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setHouse({ ...house, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("tokenStore");

    const houseinfo = {
      address: house.address,
      city: house.city,
      rent: house.rent,
      detail: house.detail,
      mobile: house.mobile,
      owner: token,
    };
    console.log(house.file);
    try {
      const res = await axios.post("/add", houseinfo);
      navigate("/home");
    } catch (err) {
      toast.error('Invalid Details!', {
        position: "top-center",
        autoClose: 2000,
        });
    }
  };
  return (
    <>
      <Header2 />
      <div style={{ paddingTop: "15vh", fontFamily: "initial" }}>
        <h2 style={{ marginLeft: "43%" }}>Add House...</h2>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "95vh",
            padding: "7vh",
            marginLeft: "29%",
          }}
          onSubmit={handleSubmit}
        >
          <input
            style={{ padding: "1vh", marginBottom: "6vh" }}
            name="address"
            type="address"
            placeholder="Address..."
            label="address"
            value={house.address}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "6vh" }}
            name="city"
            type="city"
            placeholder="City..."
            label="city"
            value={house.city}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "6vh" }}
            name="rent"
            type="rent"
            placeholder="Rent..."
            label="rent"
            value={house.rent}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "6vh" }}
            name="detail"
            type="detail"
            placeholder="Details..."
            label="detail"
            value={house.detail}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "6vh" }}
            name="mobile"
            type="mobile"
            placeholder="Mobile Number..."
            label="mobile"
            value={house.mobile}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "6vh" }}
            name="file"
            type="file"
            onChange={onChangeInput}
            required
          />
          <button
            style={{
              backgroundColor: "#080808",
              color: "#FFF",
              width: "20vh",
              height: "8vh",
              marginLeft: "29vh",
            }}
            variant="contained"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Add_house;
