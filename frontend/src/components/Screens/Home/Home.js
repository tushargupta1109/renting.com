import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Headers/Header1/Header1";
import Houseshow from "../Houseshow/houseshow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Home = () => {
  const Navigate = useNavigate();
  const loggedinPerson = localStorage.getItem("tokenStore");

  const [arr, setArr] = useState([]);
  const [loc, setLoc] = useState("");

  const checklogin = () => {
    if (localStorage.length === 0) {
      Navigate("/");
    }
  };

  const gethouses = async () => {
    const info = {
      location: loc,
    };
    const res = await axios.post("/houses", info);
    setArr(res.data);
  };

  const arr1 = [];

  useEffect(() => {
    gethouses();
  }, [loc]);

  return (
    <>
      {checklogin()}
      <Header1 setLoc={setLoc} loc={loc} />
      {arr.map((house) => {
        if (house.owner !== loggedinPerson) {
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
              No house present in this location.
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
      <ToastContainer />
    </>
  );
};

export default Home;
