import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles.css";
import ShowModal from "./ShowModal";

const Houseshow = (house) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div
        className="card"
        onClick={() => setShow(true)}
        style={{ cursor: "pointer" }}
      >
        <img
          style={{ height: "35vh" }}
          className="card-img-top"
          src={house.house.image}
        />
        <div className="card-body px-2 py-2">
          <div className="row">
            <div className="text-center col-6">City:</div>
            <div className="lists text-center col-6">{house.house.city}</div>
          </div>
          <div className="row">
            <div className="text-center col-6">Rent:</div>
            <div className="lists text-center col-6">{house.house.rent}</div>
          </div>
          <div className="row text-center pt-2">
            <span className="knowMorebtn">Click to Know More.</span>
          </div>
        </div>
      </div>
      {show && <ShowModal show={show} setShow={setShow} house={house} />}
      <ToastContainer />
    </>
  );
};
export default Houseshow;
