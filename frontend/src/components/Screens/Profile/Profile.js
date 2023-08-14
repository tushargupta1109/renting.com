import axios from "axios";
import React, { useState, useEffect } from "react";
import Houseshow from "../Houseshow/Houseshow";
import Header from "../../Headers/Header3/Header3";
import { Space, Spin } from "antd";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import logo from "../../Images/logo.jpg";
import "./styles.css";

const Profile = () => {
  const Navigate = useNavigate();
  const [loggedinPerson, setLoggedinPerson] = useState("");
  const [token, setToken] = useState("");

  const [allHouses, setAllHouses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const checklogin = async () => {
    if (localStorage.length === 0) {
      Navigate("/");
      return;
    }
    try {
      const res = await axios.post("https://renting11.onrender.com/verify", {
        token: JSON.parse(localStorage.getItem("tokenStore")).token,
      });
      setLoggedinPerson(JSON.parse(localStorage.getItem("tokenStore")).id);
      setToken(JSON.parse(localStorage.getItem("tokenStore")).token);
    } catch (err) {
      toast.error("Authentication failed!", {
        position: "top-center",
        autoClose: 2000,
      });
      localStorage.removeItem("tokenStore");
      Navigate("/");
    }
  };

  const gethouses = async () => {
    const info = {
      location: "",
      token: token,
    };
    const res = await axios.post("https://renting11.onrender.com/houses", info);
    setAllHouses(res.data);
    setIsLoading(false);
  };

  const myHouses = [];

  useEffect(() => {
    checklogin();
    gethouses();
  }, []);

  return (
    <>
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
            style={{ color: "grey", marginTop: "100px", fontSize: "30px" }}
          >
            <Space size="middle">
              <Spin size="large" />
            </Space>
          </div>
        ) : myHouses.length === 0 ? (
          <div className="row pt-4">
            <div
              className="col-md-6 text-center"
              style={{
                color: "grey",
                marginTop: "150px",
                marginBottom: "100px",
                fontSize: "28px",
              }}
            >
              You do not have any house.
            </div>
            <div className="col-md-6 text-center">
              <img src={logo} width="90%" />
            </div>
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
