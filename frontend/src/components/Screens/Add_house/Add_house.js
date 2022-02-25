import axios from "axios";
import React, { useState } from "react";
import Header2 from "../../Headers/header2";
import FileBase64 from 'react-file-base64'
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "@material-ui/core";
import './styles.css'

const Add_house = () => {
  const navigate = useNavigate();
  const [house, setHouse] = useState({
    address: "",
    city: "",
    rent: "",
    detail: "",
    mobile: "",
    image:"",
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
      image:house.image
    };
    try {
      const res = await axios.post("/add", houseinfo);
      navigate("/home");
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
        <form className="form"
          onSubmit={handleSubmit}
        >
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
          <FileBase64
            name="image"
            type="file"
            multiple={false}
            onDone={({base64})=>setHouse({...house,image:base64})}
            required
          />
          <button
            className="button"
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
