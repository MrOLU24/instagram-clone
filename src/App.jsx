import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/Signup";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Route for Login */}
          <Route path="/login" element={<Login />} />
          {/* Route for Signup */}
          <Route path="/signup" element={<SignUp />} />
          {/* Default route (redirect to Login) */}
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;