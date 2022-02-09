import axios from "axios";
import React, { useState, useEffect } from "react";
import Header1 from "./header1";
import Houseshow from "./houseshow";

const Home = ({personid}) => {
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

  const gethouses = async () => {
    const res = await axios.get("/houses");
    setArr(res.data);
  };

  useEffect(() => {
    gethouses();
  }, []);

  return (
    <>
      <Header1 personid={personid}/>
      <div style={{ paddingTop: "12vh" }}>
        {arr.map((house) => (
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
        ))}
      </div>
    </>
  );
};

export default Home;
