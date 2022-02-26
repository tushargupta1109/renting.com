import React, { useState } from "react";
import Header2 from "../../Headers/Header2/header2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

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
      <div className="body">
        <h2 className="heading">I already have an account</h2>
        <span className="text"> Sign in with your email and password</span>
        <form className="Form" onSubmit={handleSubmit}>
          <input
            className="Input-field"
            name="email"
            type="email"
            placeholder="Email..."
            label="Email"
            value={user.email}
            onChange={onChangeInput}
            required
          />
          <input
            className="Input-field"
            name="password"
            type="password"
            placeholder="Password..."
            label="Password"
            value={user.password}
            onChange={onChangeInput}
            required
          />
          <button className="signin-btn" variant="contained" type="submit">
            Signin
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
