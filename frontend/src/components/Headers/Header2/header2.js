import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const header2 = () => {
  return (
    <>
      <div className="header-style">
        <p className="main-heading">
          <Link className="link" to="/home">
            Renting.com
          </Link>
        </p>
      </div>
    </>
  );
};

export default header2;
