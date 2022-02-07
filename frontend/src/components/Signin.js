import React, { useState } from "react";
import Header from "./header";

const Signin = () => {
  const [pass, setPass] = useState("");
  const [email, setEmail] = useState("");
  return (
    <>
      <Header />
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
        >
          <input
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "18vh" }}
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
            style={{ padding: "1vh", marginBottom: "7vh", marginLeft: "18vh" }}
            name="pass"
            type="password"
            placeholder="Password..."
            label="Password"
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
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
          >
            Sign in
          </button>
        </form>
      </div>
    </>
  );
};

export default Signin;
