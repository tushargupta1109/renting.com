import axios from "axios";
import React, { useState, useEffect } from "react";
import Houseshow from "../Houseshow/houseshow";
import Header from "../../Headers/Header3/Header3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Profile = () => {
  const navigate = useNavigate();
  const loggedinPerson = localStorage.getItem("tokenStore");
  const [arr, setArr] = useState([]);

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
    setArr(res.data);
  };

  const arr1 = [];

  useEffect(() => {
    gethouses();
  }, []);
  return (
    <>
      {checklogin()}
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
              style={{ color: "grey", marginTop: "10vh", fontSize: "5vh" }}
            >
              {" "}
              You do not have house in this location
            </div>
          ) : (
            arr1.map((house) => (
              <div class="d-inline-flex p-4">
                <Houseshow house={house} />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
