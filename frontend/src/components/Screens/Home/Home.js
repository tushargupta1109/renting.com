import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Headers/Header1/Header1";
import { Space, Spin } from "antd";
import Houseshow from "../Houseshow/Houseshow.js";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import "./styles.css";

const Home = () => {
  const Navigate = useNavigate();
  const [loggedinPerson, setLoggedinPerson] = useState("");
  const [token, setToken] = useState("");

  const [allHouses, setAllHouses] = useState([]);
  const [loc, setLoc] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const checklogin = async () => {
    if (localStorage.length === 0) {
      Navigate("/");
      return;
    }
    console.log(JSON.parse(localStorage.getItem("tokenStore")).token);
    try {
      const res = await axios.post("/verify", {
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
      location: loc,
      token,
    };
    const res = await axios.post("/houses", info);
    setAllHouses(res.data);
    setIsLoading(false);
  };

  const Houses = [];

  useEffect(() => {
    checklogin();
    setIsLoading(true);
    gethouses();
  }, [loc]);

  return (
    <>
      <div style={{ position: "fixed", zIndex: "10" }}>
        <Header1 setLoc={setLoc} loc={loc} />
      </div>
      {allHouses.map((house) => {
        if (house.owner !== loggedinPerson) {
          Houses.push(house);
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
        ) : Houses.length === 0 ? (
          <div
            className="text-center"
            style={{ color: "grey", marginTop: "50px", fontSize: "22px" }}
          >
            No houses present in this location.
          </div>
        ) : (
          <div className="houses row justify-content-center">
            {Houses.map((house) => (
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

export default Home;
