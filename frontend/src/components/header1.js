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
          // justifyContent: "space-evenly",
          backgroundColor: "#87ceeb",
          fontSize: "5vh",
          textAlign: "center",
          position: "fixed",
          width: "100%",
          height: "12vh",
        }}
      >
          <p style={{ fontSize: "6vh", marginLeft: "15vh" }}>Renting.com</p>
          <div
          className="d-inline-flex p-2"
          style={{ justifyContent: "space-arround" ,marginLeft:'90vh'}}
        >
          <button
            style={{
              height: "7vh",
              fontSize: "4vh",
              marginTop: "1vh",
              backgroundColor: "#87ceeb",
              borderColor: "#87ceeb",
            }}
          >
            <Link to="/add" style={{ color: "black", textDecoration: "none" }}>
              Profile <i class="fa-solid fa-user"></i>
            </Link>
          </button>
          {/* <p style={{ marginTop: "1vh"}}>
          <Link to="/add" style={{ color: "black", textDecoration: "none" }}>
            Add House
          </Link>
        </p>
        <p
          style={{ marginTop: "1vh"}}
          onClick={logoutSubmit}
        >
          <Link to="/" style={{ color: "black", textDecoration: "none" }}>
            Logout{" "}
          </Link>
        </p> */}
          <form onSubmit={handleSubmit}>
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
                borderRadius: "0vh",
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
