import React from "react";
import axios from "axios";

const houseshow = (house) => {
  const loggedinPerson = localStorage.getItem("tokenStore");
  const handleremove = async () => {
    const info = {
      id1: house.house._id,
      id2: loggedinPerson,
    };
    try {
      await axios.post("/remove", info);
      alert("Removed Successfully ,refresh the page");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <>
      <div className="card" style={{ width: "70vh" }}>
        <img className="card-img-top" src={house.house.img} />
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
    </>
  );
};
export default houseshow;
