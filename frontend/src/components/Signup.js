import axios from "axios";
import React, { useState } from "react";
import Header from "./header";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmpass, setConfirmpass] = useState("");

  const handleSubmit = async (e) => {
    const user = {
      name,
      password,
      email,
      confirmpass,
    };
    try {
      const res = await axios.post("/login", user);
      navigate("/home");
      alert("b");
      alert(res.data.msg);
    } catch (err) {
      alert("c");
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
        >
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="name"
            type="name"
            placeholder="Name..."
            label="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="password"
            type="password"
            placeholder="Password..."
            label="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" }}
            name="confirmpass"
            type="confirmpass"
            placeholder="Confirm Password..."
            label="confirm_Password"
            value={confirmpass}
            onChange={(e) => {
              setConfirmpass(e.target.value);
            }}
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
            onClick={handleSubmit}
          >
            Sign up
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
