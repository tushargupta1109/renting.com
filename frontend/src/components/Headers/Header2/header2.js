import React from "react";
import { HomeFilled } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./styles.css";

const header2 = () => {
  return (
    <>
      <div
        className=" text-center"
        style={{
          width: "100%",
          backgroundColor: "#ace5ee",
          position: "fixed",
        }}
      >
        <div className="heading">
          {localStorage.length != 0 ? (
            <Link style={{ textDecoration: "none", color: "black" }} to="/home">
              <span className="homeIcon">
                <HomeFilled />
              </span>
              <span className="mx-1">Renting.com</span>
            </Link>
          ) : (
            <>
              <span className="homeIcon">
                <HomeFilled />
              </span>
              <span className="mx-1">Renting.com</span>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default header2;
