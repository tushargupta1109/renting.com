import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Screens/Home";
import Register from "./components/Register/register";
import Add_house from "./components/Screens/Add_house";
import Profile from "./components/Screens/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/add" element={<Add_house />} />
            <Route exact path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
