import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar'; 
import Footer from './components/Footer'; 
import Home from './Pages/Home';
import Explore from './Pages/Explore';
import Profile from './Pages/Profile';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        
        <Navbar />

        {/* Page Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
