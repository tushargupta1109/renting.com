import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header1 = ({  setLoc }) => {
  const logoutSubmit = () => {
    localStorage.clear();
  };
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoc(address);
  };
  return (
    <>
      <div
        className="d-inline-flex p-2"
        style={{
          display: "flex",
          zIndex: "2",
          backgroundColor: "#ace5ee",
          fontSize: "5vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "11vh",
        }}
      >
        <p style={{ fontSize: "5vh", marginLeft: "15vh" }}>
          <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
            Renting.com
          </Link>
        </p>
        <button
          style={{
            height: "7vh",
            fontSize: "3vh",
            marginTop: "1vh",
            backgroundColor: "#ace5ee",
            borderColor: "#ace5ee",
            marginLeft: "120vh",
          }}
        >
          <Link to="/add" style={{ color: "black", textDecoration: "none" }}>
            Add House <i class="fa-solid fa-plus"></i>
          </Link>
        </button>
        <button
          style={{
            height: "7vh",
            fontSize: "3vh",
            marginTop: "1vh",
            backgroundColor: "#ace5ee",
            borderColor: "#ace5ee",
            marginLeft: "5vh",
          }}
          onClick={logoutSubmit}
        >
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header1;
