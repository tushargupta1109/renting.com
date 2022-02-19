import axios from "axios";
import React, { useState, useEffect } from "react";
import Houseshow from "./houseshow";
import Header from "./Header3";

const Profile = () => {
  const loggedinPerson = localStorage.getItem("tokenStore");
  const [arr, setArr] = useState([]);

  const gethouses = async () => {
    const info = {
      location: "",
    };
    const res = await axios.post("/houses", info);
    setArr(res.data);
  };

  const arr1 = [];

  useEffect(() => {
    gethouses();
  }, []);
  return (
    <div>
      <Header />
      {arr.map((house) => {
        if (house.owner === loggedinPerson) {
          arr1.push(house);
        }
      })}
      <div style={{ paddingTop: "7vh" }}>
        <div style={{ paddingTop: "5vh" }}>
          {arr1.length === 0 ? (
            <div
              className="text-center"
              style={{ fontSize: "5vh", color: "grey" }}
            >
              {" "}
              You do not have house in this location
            </div>
          ) : (
            arr1.map((house) => (
              <div
                class="d-inline-flex p-2"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "2vh",
                }}
              >
                <Houseshow house={house} />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
