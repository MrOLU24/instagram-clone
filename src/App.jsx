import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Routes>
          {/* Route for Login */}
          <Route path="/login" element={<Login />} />
          {/* Route for Signup */}
          <Route path="/signup" element={<Signup />} />
          {/* Default route (redirect to Login) */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;