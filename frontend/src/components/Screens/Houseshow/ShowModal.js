import React from "react";
import axios from "axios";
import { Modal } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./Styles.css";

const ShowModal = ({ show, setShow, house }) => {
  const navigate = useNavigate();
  const loggedinPerson = JSON.parse(localStorage.getItem("tokenStore")).id;
  const token = JSON.parse(localStorage.getItem("tokenStore")).token;

  const handleremove = async () => {
    const info = {
      id1: house.house._id,
      id2: loggedinPerson,
      token: token,
    };
    try {
      await axios.post("https://renting11.onrender.com/remove", info);
      toast.success("Removed Successfully!", {
        position: "top-center",
        autoClose: 2000,
      });
      setTimeout(() => {
        navigate("/home");
        navigate("/profile");
      }, 3000);
    } catch (e) {
      toast.error("Authentication failed!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <Modal
        centered
        visible={show}
        onCancel={() => {
          setShow(false);
        }}
        footer={false}
        width={450}
      >
        <img
          style={{ height: "40vh" }}
          className="card-img-top"
          src={house.house.image}
        />
        <div className="card-body">
          <div className="row">
            <div className="text-left col-6">Address:</div>{" "}
            <div className="lists text-left col-6">{house.house.address}</div>
          </div>
          <div className="row">
            <div className="text-left col-6">City:</div>{" "}
            <div className="lists text-left col-6">{house.house.city}</div>
          </div>
          <div className="row">
            <div className="text-left col-6">Rent:</div>{" "}
            <div className="lists text-left col-6">{house.house.rent}</div>
          </div>
          <div className="row">
            <div className="text-left col-6">Detail:</div>{" "}
            <div className="lists text-left col-6">{house.house.detail}</div>
          </div>
          <div className="row">
            <div className="text-left col-6">Owner's Mobile:</div>{" "}
            <div className="lists text-left col-6">{house.house.mobile}</div>
          </div>
        </div>
        {house.house.owner === loggedinPerson ? (
          <div className="text-center">
            <button className="btns" onClick={handleremove}>
              Remove House
            </button>
          </div>
        ) : (
          ""
        )}
      </Modal>
      <ToastContainer />
    </>
  );
};
export default ShowModal;
