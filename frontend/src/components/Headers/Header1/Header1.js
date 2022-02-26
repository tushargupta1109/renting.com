import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Header1 = ({ setLoc }) => {
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoc(address);
  };
  return (
    <>
      <div className="Flex">
        <p className="renting-com">Renting.com</p>
        <div className="d-inline-flex p-2" style={{ marginLeft: "80vh" }}>
          <button className="profile-btn">
            <Link
              to="/profile"
              style={{ color: "black", textDecoration: "none" }}
            >
              Profile <i class="fa-solid fa-user"></i>
            </Link>
          </button>
          <form
          className="search"
            onSubmit={handleSubmit}
          >
            <input
              name="address"
              type="address"
              placeholder="Search by Location..."
              label="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="address-input"
            />
            <button
              type="submit"
              class="btn btn-dark"
              style={{ borderRadius: "0vh" }}
            >
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Header1;
