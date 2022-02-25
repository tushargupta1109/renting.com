import axios from "axios";
import React, { useState } from "react";
import Header2 from "../Headers/header2";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import {Button } from "@material-ui/core";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmpass: "",
  });
  
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.password !== user.confirmpass) {
      toast.error("password didn't match!",{
        position:"top-center",
        autoClose: 2000,
      })
      return;
    }
    const userinfo = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    try {
      const res = await axios.post("/signup", userinfo);
      toast.success('Registered Successfully, login to enter!',{
        position:"top-center",
        autoClose: 2000,
      })
    } catch (err) {
      toast.error("Email already registered!",{
        position:"top-center",
        autoClose: 2000,
      })
    }
  };
  return (
    <>
      <Header2 />
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
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" ,backgroundColor:'whitesmoke' ,borderColor:'black'}}
            name="name"
            type="name"
            placeholder="Name..."
            label="Name"
            value={user.name}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh" ,backgroundColor:'whitesmoke' ,borderColor:'black'}}
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            value={user.email}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh",backgroundColor:'whitesmoke' ,borderColor:'black' }}
            name="password"
            type="password"
            placeholder="Password..."
            label="Password"
            value={user.password}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "17vh",backgroundColor:'whitesmoke' ,borderColor:'black'
           }}
            name="confirmpass"
            type="confirmpass"
            placeholder="Confirm Password..."
            label="confirm_Password"
            value={user.confirmpass}
            onChange={onChangeInput}
            required
          />
          <Button
            style={{
              backgroundColor: "black",
              color: "white",
              width: "20vh",
              height: "7vh",
              marginLeft: "32vh",
              fontSize:'3vh'
            }}
            variant="contained"
            type="submit"
          >
            Signup
          </Button>
        </form>
      </div>
      <ToastContainer/>
    </>
  );
};

export default Signup;
