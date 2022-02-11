import React from "react";
import { Link } from "react-router-dom";

const header2 = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "center",
          fontFamily: "sans-serif",
          backgroundColor: "lightblue",
          fontSize: "7vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "11vh",
          fontFamily:"initial"
        }}
      >
        <p style={{color:'darkblue'}}>Renting.com</p>
      </div>
    </>
  );
};

export default header2;
