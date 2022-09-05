import React from "react";
import { Link } from "react-router-dom";

const header2 = () => {
  return (
    <>
      <div
        className=" text-center"
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#ace5ee",
          position: "fixed",
        }}
      >
        <div
          className="align-middle"
          style={{ fontSize: "22px", marginTop: "8px" }}
        >
          {localStorage.length != 0 ? (
            <Link style={{ textDecoration: "none", color: "black" }} to="/home">
              <p>Renting.com</p>
            </Link>
          ) : (
            <p>Renting.com</p>
          )}
        </div>
      </div>
    </>
  );
};

export default header2;
