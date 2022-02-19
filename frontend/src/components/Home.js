import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "./Header1";
import Houseshow from "./houseshow";import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const Navigate = useNavigate();
  const loggedinPerson = localStorage.getItem("tokenStore");

  const [arr, setArr] = useState([]);
  const [loc, setLoc] = useState("");

  const checklogin = () => {
    if (localStorage.length == 0) {
      toast.error("Signin or Signup to enter!", {
        position: "top-center",
        autoClose: 2000,
      });
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
  const arr2 = [];
  
  useEffect(() => {
    gethouses();
  }, [loc]);

  return (
    <>
      {checklogin()}
      <Header1 setLoc={setLoc} loc={loc} />
      {arr.map((house) => {
        house.owner === loggedinPerson ? arr1.push(house) : arr2.push(house);
      })}
      <div style={{ paddingTop: "10vh" }}>
        {arr2.length === 0 ? (
          <div
            className="text-center"
            style={{ fontSize: "5vh", color: "grey", marginTop: "10vh" }}
          >
            {" "}
            No house available in this location
          </div>
        ) : (
          arr2.map((house) => (
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
      <div style={{ paddingTop: "5vh" }}>
        <h2
          style={{
            textAlign: "center",
            textDecoration: "underline",
            paddingBottom: "5vh",
            color: "black",
            fontFamily: "initial",
          }}
        >
          My Houses
        </h2>
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
      <ToastContainer />
    </>
  );
};

export default Home;
