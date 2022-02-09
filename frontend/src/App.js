import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Register from "./components/register";
import Add_house from "./components/Add_house";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const [personid,setPersonid]=useState('' );
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route exact path="/" element={<Register setPersonid={setPersonid} />} />
            <Route exact path="/home" element={<Home personid={personid} />} />
            <Route exact path="/add" element={<Add_house personid={personid}/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
