import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header1 = () => {
  const logoutSubmit = () => {
    localStorage.clear();
  };
  return (
    <>
      <div
        className="row"
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "2",
          backgroundColor: "#ace5ee",
        }}
      >
        <div className="renting-com col-md-7 px-0 text-center">
          <span className="px-20" style={{ marginLeft: "5%" }}>
            <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
              Renting.com
            </Link>
          </span>
        </div>
        <div className="col-md-5 px-0">
          <div className="d-flex justify-content-center">
            <button className="add_button">
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/add"
              >
                Add House <i class="fa-solid fa-plus"></i>
              </Link>
            </button>
            <div style={{ paddingLeft: "30px" }}>
              <button className="logout_button" onClick={logoutSubmit}>
                <Link style={{ textDecoration: "none", color: "black" }} to="/">
                  Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
