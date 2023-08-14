import React from "react";
import Signup from "./Signup/Signup";
import Signin from "./Signin/Signin";
import Header2 from "../Headers/Header2/header2";
import main from "../Images/main.jpg";

const register = () => {
  return (
    <>
      <Header2 />
      <div className="row" style={{ backgroundImage: { main } }}>
        <div className="col-md-6 px-0">
          <Signin />
        </div>
        <div className="col-md-6 px-0">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default register;
