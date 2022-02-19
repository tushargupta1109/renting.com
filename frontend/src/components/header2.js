import React from "react";
import { Link } from "react-router-dom";

const header2 = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          backgroundColor: "skyblue",
          fontSize: "6vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "11vh",
        }}
      >
        <p style={{ fontSize: "6vh", justifyContent:"center",marginTop:'1vh' }}>
          <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
            Renting.com
          </Link>
        </p>
      </div>
    </>
  );
};

export default header2;
