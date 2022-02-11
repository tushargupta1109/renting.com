import React, { useState } from "react";
import Header2 from "./header2";
import {useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userinfo = {
      email: user.email,
      password: user.password,
    };

    try {
      const res = await axios.post("/signin", userinfo);
      alert("Logged in Successfully!");
      setUser({ email: "", password: "" });
      
      localStorage.setItem("tokenStore", res.data);
      navigate("/home");
      
    } catch (err) {
      alert(err);
    }
  };
  return (
    <>
      <Header2 />
      <div style={{ paddingTop: "20vh" }}>
        <h2 style={{ marginLeft: "27vh" }}>I already have an account</h2>
        <span style={{ marginLeft: "33vh" }}>
          {" "}
          Sign in with your email and password
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
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "18vh" }}
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            value={user.email}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "18vh" }}
            name="password"
            type="password"
            placeholder="Password..."
            label="Password"
            value={user.password}
            onChange={onChangeInput}
            required
          />
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
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
