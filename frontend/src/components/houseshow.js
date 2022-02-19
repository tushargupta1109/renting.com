import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const houseshow = (house) => {
  const loggedinPerson = localStorage.getItem("tokenStore");
  const handleremove = async () => {
    const info = {
      id1: house.house._id,
      id2: loggedinPerson,
    };
    try {
      await axios.post("/remove", info);
      toast.success("Removed Successfully, Refresh the Page!", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (e) {
      toast.error(e, {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <div className="card" style={{ width: "70vh" ,zIndex:'1'}}>
        <img className="card-img-top" src={house.house.image} />
        <div className="card-body" style={{ fontSize: "4vh" }}>
          <ul>
            <li>Address: {house.house.address}</li>
            <li>City: {house.house.city}</li>
            <li>Rent: {house.house.rent}</li>
            <li>Type: {house.house.detail}</li>
            <li>Owner's Mobile: {house.house.mobile}</li>
          </ul>
        </div>
        {house.house.owner === loggedinPerson ? (
          <button
            style={{
              width: "30vh",
              marginLeft: "18vh",
              color: "black",
              backgroundColor: "lightblue",
              borderColor: "black",
            }}
            onClick={handleremove}
          >
            Remove House
          </button>
        ) : (
          ""
        )}
      </div>
      <ToastContainer />
    </>
  );
};
export default houseshow;
