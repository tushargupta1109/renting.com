import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header1 = ({ loc, setLoc }) => {
  const logoutSubmit = () => {
    localStorage.clear();
  };
  const [address, setAddress] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoc(address);
  };
  return (
    <>
      <div
        className="d-inline-flex p-2"
        style={{
          display: "flex",
          zIndex: "2",
          backgroundColor: "#ace5ee",
          fontSize: "5vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "11vh",
        }}
      >
        <p style={{ fontSize: "5vh", marginLeft: "15vh" }}>Renting.com</p>
        <div
          className="d-inline-flex p-2"
          style={{ justifyContent: "space-arround", marginLeft: "110vh" }}
        >
          <button
            style={{
              height: "7vh",
              fontSize: "3vh",
               backgroundColor: "#ace5ee",
              borderColor: "#ace5ee",
            }}
          >
            <Link to="/profile" style={{ color: "black", textDecoration: "none" }}>
              Profile <i class="fa-solid fa-user"></i>
            </Link>
          </button>
          <form onSubmit={handleSubmit} style={{marginLeft:"4vh",marginTop:"-1vh"}}>
            <input
              name="address"
              type="address"
              placeholder="Search by Location..."
              label="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                width: "35vh",
                height: "6.5vh",
                fontSize: "3vh",
                borderColor: "black",
              }}
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
