import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const header1 = () => {
  return (
    <>
      <div
        class="d-inline-flex p-2"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          fontFamily: "sans-serif",
          backgroundColor: "lightblue",
          fontSize: "5vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "13vh",
        }}
      >
        <p style={{ fontSize: "7vh", color: "darkblue" }}>Renting.com</p>
        <p style={{ marginTop: "2vh" }}>
          <Link to="/add" style={{ color: "black", textDecoration: "none" }}>
            Add House
          </Link>
        </p>
        <p style={{ marginTop: "2vh" }} >
          Remove House
        </p>
        <p style={{ marginTop: "2vh" }}>
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Logout
          </Link>
        </p>
      </div>
    </>
  );
};

export default header1;
