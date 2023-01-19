import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Screens/Home/Home";
import Register from "./components/Register/register";
import Add_house from "./components/Screens/Add_house/Add_house";
import Profile from "./components/Screens/Profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Register />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/add" element={<Add_house />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
