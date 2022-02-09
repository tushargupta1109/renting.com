import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Register from "./components/register";
import Add_house from "./components/Add_house";
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
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
