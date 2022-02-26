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
       className="flex-box">
        <p className="Main-heading">
          <Link to="/home" style={{textDecoration:'none',color:"black"}}>
            Renting.com
          </Link>
        </p>
        <button className="add_button">
          <Link style={{textDecoration:'none',color:"black"}} to="/add">
            Add House <i class="fa-solid fa-plus"></i>
          </Link>
        </button>
        <button className="logout_button" onClick={logoutSubmit}>
          <Link style={{textDecoration:'none',color:"black"}} to="/">
            Logout <i class="fa-solid fa-arrow-right-from-bracket"></i>
          </Link>
        </button>
      </div>
    </>
  );
};

export default Header1;
