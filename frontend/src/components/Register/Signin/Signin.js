import React, { useState } from "react";
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
      const res = await axios.post(
        "https://renting11.onrender.com/signin",
        userinfo
      );
      setUser({ email: "", password: "" });
      localStorage.setItem("tokenStore", JSON.stringify(res.data));
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
      <div className="body">
        <h2 className="text-center mb-0">I already have an account</h2>
        <div className="text-center">Sign in with your email and password</div>
        <form
          className="d-flex flex-column pt-5 text-center"
          onSubmit={handleSubmit}
        >
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
            <button
              className="btn rounded-3 text-center bg-dark text-white"
              variant="contained"
              type="submit"
              style={{ width: "100px", height: "45px" }}
            >
              Signin
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signin;
