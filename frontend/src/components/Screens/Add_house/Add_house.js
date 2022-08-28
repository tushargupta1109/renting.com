import axios from "axios";
import React, { useState } from "react";
import Header2 from "../../Headers/Header2/header2";
import FileBase64 from "react-file-base64";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Add_house = () => {
  const navigate = useNavigate();
  const [house, setHouse] = useState({
    address: "",
    city: "",
    rent: "",
    detail: "",
    mobile: "",
    image: "",
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
      image: house.image,
    };
    try {
      const res = await axios.post("/add", houseinfo);
      toast.success("Added Successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/profile");
      }, 3000);
    } catch (err) {
      toast.error("Invalid Details!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <Header2 />
      <div className="box">
        <form
          className="row text-center justify-content-center"
          onSubmit={handleSubmit}
        >
          <div className="col-12 px-0">
            <input
              className="input-field"
              name="address"
              type="address"
              placeholder="Address..."
              label="address"
              value={house.address}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="col-12 px-0">
            <input
              className="input-field"
              name="city"
              type="city"
              placeholder="City..."
              label="city"
              value={house.city}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="col-12 px-0">
            <input
              className="input-field"
              name="rent"
              type="rent"
              placeholder="Rent..."
              label="rent"
              value={house.rent}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="col-12 px-0">
            <input
              className="input-field"
              name="detail"
              type="detail"
              placeholder="Details..."
              label="detail"
              value={house.detail}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="col-12 px-0">
            <input
              className="input-field"
              name="mobile"
              type="mobile"
              placeholder="Mobile Number..."
              label="mobile"
              value={house.mobile}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="col-12 input-file px-0">
            <FileBase64
              name="image"
              type="file"
              multiple={false}
              onDone={({ base64 }) => setHouse({ ...house, image: base64 })}
              required
            />
          </div>
          <div className="col-12 px-0">
            <button className="button" variant="contained" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Add_house;
