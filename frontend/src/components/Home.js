import React, { useState } from "react";
import Header from "./header";
import Houseshow from "./houseshow";
import img1 from "./images/a.jpeg";
import img2 from "./images/b.jpeg";
import img3 from "./images/c.jpeg";
import img4 from "./images/d.jpeg";

const Home = () => {
  const arr = [
    {
      address: "Karamchari nagar",
      city: "Bareilly",
      rent: "Rs 5000",
      type: "3BHK",
      mobile: 8630834081,
      img: img1,
    },
    {
      address: "Rajendra nagar",
      location: "Agra",
      rent: "Rs 8000",
      type: "4BHK",
      mobile: 9536371312,
      img: img2,
    },
    {
      address: "Rajendra nagar",
      location: "Agra",
      rent: "Rs 8000",
      type: "4BHK",
      mobile: 9536371312,
      img: img3,
    },
    {
      address: "Rajendra nagar",
      location: "Agra",
      rent: "Rs 8000",
      type: "4BHK",
      mobile: 9536371312,
      img: img4,
    },
    {
      address: "Rajendra nagar",
      location: "Agra",
      rent: "Rs 8000",
      type: "4BHK",
      mobile: 9536371312,
      img: img1,
    },
    {
      address: "Rajendra nagar",
      location: "Agra",
      rent: "Rs 8000",
      type: "4BHK",
      mobile: 9536371312,
      img: img2,
    },
    {
      address: "Rajendra nagar",
      location: "Agra",
      rent: "Rs 8000",
      type: "4BHK",
      mobile: 9536371312,
      img: img3,
    }
  ];
  return (
    <>
      <Header />
      <div style={{ paddingTop: "12vh" }}>
        {arr.map((house) => (
          <div class="d-inline-flex p-2" style={{display:"flex", justifyContent:'center' ,padding:'2vh'}}>
            <Houseshow house={house} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
