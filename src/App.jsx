import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Profile from "./Pages/Profile";
import Login from "./Pages/Login";
// import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
       <Login/>
      </div>
    </Router>
  );
}

export default App;
