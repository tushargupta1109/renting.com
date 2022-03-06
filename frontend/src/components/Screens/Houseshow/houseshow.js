import React from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Styles.css";

const houseshow = (house) => {
  console.log(house.house);
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
      <div className="card">
          <img className="card-img-top" src={house.house.image} />
        <div className="card-body" >
          <ul className="lists" >
            <li>
              <span className="list-items">Address: </span>
              {house.house.address}
            </li>
            <li>              <span className="list-items">City: </span>
              {house.house.city}
            </li>
            <li>
              <span className="list-items">Rent: </span>
              {house.house.rent}
            </li>
            <li>
              <span className="list-items">Detail: </span>
              {house.house.detail}
            </li>
            <li>
              <span className="list-items" >Owner's Mobile: </span>
              {house.house.mobile}
            </li>
          </ul>
        </div>
        {house.house.owner === loggedinPerson ? (
          <button className="btns"
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
