import axios from "axios";
import React, { useState, useEffect } from "react";
import Houseshow from "../Houseshow/Houseshow";
import Header from "../../Headers/Header3/Header3";
import { Space, Spin } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";

const Profile = () => {
  const navigate = useNavigate();
  const loggedinPerson = JSON.parse(localStorage.getItem("tokenStore")).id;
  const token = JSON.parse(localStorage.getItem("tokenStore")).token;

  const [allHouses, setAllHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const checklogin = () => {
    if (localStorage.length === 0) {
      navigate("/");
    }
  };

  const gethouses = async () => {
    const info = {
      location: "",
      token: token,
    };
    try {
      const res = await axios.post("/houses", info);
      setAllHouses(res.data);
      setIsLoading(false);
    } catch (err) {
      toast.error("Authentication failed!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };

  const myHouses = [];

  useEffect(() => {
    gethouses();
  }, []);
  return (
    <>
      {checklogin()}
      <div style={{ position: "fixed", zIndex: "10", top: 0 }}>
        <Header />
      </div>
      {allHouses.map((house) => {
        if (house.owner === loggedinPerson) {
          myHouses.push(house);
        }
      })}
      <div className="cover">
        {isLoading ? (
          <div
            className="text-center"
            style={{ color: "grey", marginTop: "50px", fontSize: "22px" }}
          >
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : myHouses.length === 0 ? (
          <div
            className="text-center"
            style={{ color: "grey", marginTop: "50px", fontSize: "22px" }}
          >
            You do not have any house.
          </div>
        ) : (
          <div className="row houses justify-content-center">
            {myHouses.map((house) => (
              <div class="col-md-4 house">
                <Houseshow house={house} />
              </div>
            ))}
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default Profile;
