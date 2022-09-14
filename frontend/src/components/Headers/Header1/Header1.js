import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { HomeFilled } from "@ant-design/icons";

const Header1 = ({ setLoc }) => {
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoc(address);
  };
  return (
    <>
      <div
        className="row mx-0"
        style={{
          width: "100%",
          position: "fixed",
          zIndex: "2",
          backgroundColor: "#ace5ee",
        }}
      >
        <div className="renting-com col-md-7 px-0 text-center">
          <span className="px-20" style={{ marginLeft: "5%" }}>
            <span className="homeIcon">
              <HomeFilled />
            </span>
            <span className="px-1">Renting.com</span>
          </span>
        </div>
        <div className="col-md-5 px-0">
          <div className="d-flex justify-content-center">
            <button className="profile-btn">
              <Link
                to="/profile"
                style={{ color: "black", textDecoration: "none" }}
              >
                Profile <i class="fa-solid fa-user"></i>
              </Link>
            </button>

            <form className="search" onSubmit={handleSubmit}>
              <input
                name="address"
                type="address"
                placeholder="Search by Location..."
                label="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="address-input"
              />
              <button type="submit" className="search_btn">
                <i class="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header1;
