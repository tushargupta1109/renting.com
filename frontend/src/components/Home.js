import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header1 from "./header1";
import Houseshow from "./houseshow";

const Home = () => {
  const Navigate=useNavigate();
  const [arr, setArr] = useState([]);
  // const arr = [
  //   {
  //     address: "Karamchari nagar",
  //     city: "Bareilly",
  //     rent: "Rs 5000",
  //     type: "3BHK",
  //     mobile: 8630834081,
  //     img: img1,
  //   },
  // ];

  const checklogin=()=>{
    if(localStorage.length===0){
      alert('Signin or Signup to enter');
      Navigate("/");
    }
  }
  const [loc, setLoc] = useState("");
  const gethouses = async () => {
    const info = {
      location: loc,
    };
    const res = await axios.post("/houses", info);
    setArr(res.data);
  };
  const arr1 = [];
  const arr2 = [];
  const loggedinPerson = localStorage.getItem("tokenStore");
  useEffect(() => {
    gethouses();
  }, [loc]);
  return (
    <>
      {checklogin()}
      <Header1 setLoc={setLoc} loc={loc} />
      {arr.map((house) => {
        house.owner === loggedinPerson ? arr1.push(house) : arr2.push(house);
      })}
      <div style={{ paddingTop: "12vh" }}>
      {arr2.length===0?(
          <div className="text-center" style={{fontSize:'5vh',color:'grey',marginTop:'10vh'}}> No house available in this location</div>
        ):(
          arr2.map((house) => (
            <div
              class="d-inline-flex p-2"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2vh",
              }}
            >
              <Houseshow house={house} />
            </div>
          ))
        )}
      </div>
      <div style={{ paddingTop: "5vh" }}>
        <h2
          style={{
            textAlign: "center",
            textDecoration: "underline",
            paddingBottom: "5vh",
            color: "black",
          }}
        >
          My Houses
        </h2>
        {arr1.length===0?(
          <div className="text-center" style={{fontSize:'5vh',color:'grey'}}> You do not have house in this location</div>
        ):(
          arr1.map((house) => (
            <div
              class="d-inline-flex p-2"
              style={{
                display: "flex",
                justifyContent: "center",
                padding: "2vh",
              }}
            >
              <Houseshow house={house} />
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Home;
