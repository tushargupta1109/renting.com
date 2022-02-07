import axios from "axios";
import React, { useState } from "react";
import Header from "./header";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
   alert('a');
    // if(user.password!=user.confirmpass){
    //   alert("password dont't match");return ;
    // }
    e.preventDefault();
    const users = {
      name:user.name,
      email:user.email,
      password:user.password,
    };
    try {
      const res = await axios.post("/login", users);
      console.log(user);
      navigate("/home");
    } catch (err) {
      console.log(user);
      alert(err);
    }
  };
  return (
    <>
      <Header />
      <div style={{ paddingTop: "20vh" }}>
        <h2 style={{ marginLeft: "27vh" }}>I do not have a account</h2>
        <span style={{ marginLeft: "33vh" }}>
          {" "}
          Sign up with your email and password
        </span>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "95vh",
            padding: "10vh",
          }}
          onSubmit={handleSubmit}
        >
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="name"
            type="name"
            placeholder="Name..."
            label="Name"
            value={user.name}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            value={user.email}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="password"
            type="password"
            placeholder="Password..."
            label="Password"
            value={user.password}
            onChange={onChangeInput}
            required
          />
          {/* <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="confirmpass"
            type="confirmpass"
            placeholder="Confirm Password..."
            label="confirm_Password"
            value={user.confirmpass}
            onChange={onChangeInput}
            required
          /> */}
          <button
            style={{
              backgroundColor: "#080808",
              color: "#FFF",
              width: "20vh",
              height: "8vh",
              marginLeft: "35vh",
            }}
            variant="contained"
            type="submit"
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
