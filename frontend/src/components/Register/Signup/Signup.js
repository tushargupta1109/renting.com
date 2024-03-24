import axios from "axios";
import React, { useState } from "react";
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
      const res = await axios.post(
        "https://renting11.onrender.com/signup",
        userinfo
      );
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
      <div className="body">
        <h2 className="text-center mb-0">I do not have an account</h2>
        <div className="text-center">Sign up with your email and password</div>
        <form
          className="d-flex flex-column pt-5 text-center"
          onSubmit={handleSubmit}
        >
          <div className="text-center py-3">
            <input
              className="p-2 border-dark"
              style={{ width: "350px" }}
              name="name"
              type="name"
              placeholder="Name..."
              label="Name"
              value={user.name}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="text-center py-3">
            <input
              className="p-2 border-dark"
              style={{ width: "350px" }}
              name="email"
              type="email"
              placeholder="Email..."
              label="Email"
              value={user.email}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="text-center py-3">
            <input
              className="p-2 border-dark"
              style={{ width: "350px" }}
              name="password"
              type="password"
              placeholder="Password..."
              label="Password"
              value={user.password}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="text-center py-3">
            <input
              className="p-2 border-dark"
              style={{ width: "350px" }}
              name="confirmpass"
              type="confirmpass"
              placeholder="Confirm Password..."
              label="confirm_Password"
              value={user.confirmpass}
              onChange={onChangeInput}
              required
            />
          </div>
          <div className="text-center py-3">
            <button
              className="btn rounded-3 text-center bg-dark text-white"
              variant="contained"
              type="submit"
              style={{ width: "100px", height: "45px" }}
            >
              Signup
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
