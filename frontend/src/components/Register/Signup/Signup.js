import axios from "axios";
import React, { useState } from "react";
import Header2 from "../../Headers/Header2/header2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";

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
      toast.error("password didn't match!", {
        position: "top-center",
        autoClose: 2000,
      });
      return;
    }
    const userinfo = {
      name: user.name,
      email: user.email,
      password: user.password,
    };
    try {
      const res = await axios.post("/signup", userinfo);
      toast.success("Registered Successfully, login to enter!", {
        position: "top-center",
        autoClose: 2000,
      });
    } catch (err) {
      toast.error("Email already registered!", {
        position: "top-center",
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <Header2 />
      <div className="body">
        <h2 className="heading">I do not have a account</h2>
        <span className="text"> Sign up with your email and password</span>
        <form className="Form" onSubmit={handleSubmit}>
          <input
            className="Input-field"
            name="name"
            type="name"
            placeholder="Name..."
            label="Name"
            value={user.name}
            onChange={onChangeInput}
            required
          />
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
          <input
            className="Input-field"
            name="confirmpass"
            type="confirmpass"
            placeholder="Confirm Password..."
            label="confirm_Password"
            value={user.confirmpass}
            onChange={onChangeInput}
            required
          />
          <button
            className="signup-btn"
            variant="contained"
            type="submit"
          >
            Signup
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
