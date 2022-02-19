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
          <ul style={{listStyle:'none',color:'darkblue'}}>
            <li><span style={{color:'black' }}>Address: </span>{house.house.address}</li>
            <li><span style={{color:'black' }}>City: </span>{house.house.city}</li>
            <li><span style={{color:'black' }}>Rent: </span>{house.house.rent}</li>
            <li><span style={{color:'black' }}>Type: </span>{house.house.detail}</li>
            <li><span style={{color:'black' }}>Owner's Mobile: </span>{house.house.mobile}</li>
          </ul>
        </div>
        {house.house.owner === loggedinPerson ? (
          <button
            style={{
              width: "22vh",
              marginLeft: "22vh",
              color: "black",
              backgroundColor: "#87ceeb",
              borderRadius:"0.5vh",
              borderColor: "black",marginBottom:"2vh"
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
