import React, { useState } from "react";
import Header2 from "./header2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      setUser({ email: "", password: "" });

      localStorage.setItem("tokenStore", res.data);
      navigate("/home");
    } catch (err) {
      toast.error("Invalid Credentials!", {
        position: "top-center",
        autoClose: 2000,
      });
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
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "18vh" ,backgroundColor:'whitesmoke',borderColor:'black'}}
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            value={user.email}
            onChange={onChangeInput}
            required
          />
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "18vh",backgroundColor:'whitesmoke' ,borderColor:'black'}}
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
              backgroundColor: "#87ceeb",
              color: "#FFF",
              width: "17vh",
              height: "7vh",
              marginLeft: "35vh",
              borderRadius:'1vh',
              borderColor:"black",color:'black',
              fontSize:'3vh'
            }}
            variant="contained"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
