import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "../../Headers/Header1/Header1";
import Houseshow from "../Houseshow/houseshow";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

const Home = () => {
  const Navigate = useNavigate();
  const loggedinPerson = localStorage.getItem("tokenStore");

  const [allHouses, setAllHouses] = useState([]);
  const [loc, setLoc] = useState("");

  const checklogin = () => {
    if (localStorage.length === 0) {
      Navigate("/");
    }
  };

  const gethouses = async () => {
    const info = {
      location: loc,
    };
    const res = await axios.post("/houses", info);
    setAllHouses(res.data);
  };

  const Houses = [];

  useEffect(() => {
    gethouses();
  }, [loc]);

  return (
    <>
      {checklogin()}
      <Header1 setLoc={setLoc} loc={loc} />
      {allHouses.map((house) => {
        if (house.owner !== loggedinPerson) {
          Houses.push(house);
        }
      })}
      <div className="cover">
        {Houses.length === 0 ? (
          <div
            className="text-center"
            style={{ color: "grey", marginTop: "50px", fontSize: "22px" }}
          >
            No houses present in this location.
          </div>
        ) : (
          <div className="row justify-content-center">
            {Houses.map((house) => (
              <div class="col-md-4 house">
                <Houseshow house={house} />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
