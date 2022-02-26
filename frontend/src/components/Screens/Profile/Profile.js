import axios from "axios";
import React, { useState, useEffect } from "react";
import Houseshow from "../Houseshow/houseshow";
import Header from "../../Headers/Header3/Header3";
import './styles.css'

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
      <div className="cover">
        <div className="houses">
          {arr1.length === 0 ? (
            <div
              className="text-center"
            >
              {" "}
              You do not have house in this location
            </div>
          ) : (
            arr1.map((house) => (
              <div
                class="d-inline-flex p-2"
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
