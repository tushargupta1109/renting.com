import axios from "axios";
import React, { useState, useEffect } from "react";
import Houseshow from "../Houseshow/houseshow";
import Header from "../../Headers/Header3/Header3";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Profile = () => {
  const navigate = useNavigate();
  const loggedinPerson = localStorage.getItem("tokenStore");
  const [allHouses, setAllHouses] = useState([]);

  const checklogin = () => {
    if (localStorage.length === 0) {
      navigate("/");
    }
  };

  const gethouses = async () => {
    const info = {
      location: "",
    };
    const res = await axios.post("/houses", info);
    setAllHouses(res.data);
  };

  const myHouses = [];

  useEffect(() => {
    gethouses();
  }, []);
  return (
    <>
      {checklogin()}
      <Header />
      {allHouses.map((house) => {
        if (house.owner === loggedinPerson) {
          myHouses.push(house);
        }
      })}
      <div className="cover">
        {myHouses.length === 0 ? (
          <div
            className="text-center"
            style={{ color: "grey", marginTop: "50px", fontSize: "22px" }}
          >
            You do not have house in this location.
          </div>
        ) : (
          <div className="row justify-content-center">
            {myHouses.map((house) => (
              <div class="col-md-4 house">
                <Houseshow house={house} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Profile;
