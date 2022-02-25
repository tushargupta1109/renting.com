import React from "react";
import { Link } from "react-router-dom";

const header2 = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          backgroundColor: "#ace5ee",
          fontSize: "6vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "11vh",
        }}
      >
        <p style={{ fontSize: "5vh", justifyContent:"center",marginTop:'1vh' }}>
          <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
            Renting.com
          </Link>
        </p>
      </div>
    </>
  );
};

export default header2;
