import React from "react";
import Frontpage from './components/frontpage';
import Home from './components/Home';import Register from './components/register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
          <Route exact path="/" element={<Register/>} />
          <Route exact path="/home" element={<Home/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
