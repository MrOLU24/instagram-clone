import React, { useState, useEffect } from "react";
import Loading from "../components/Loading"; 

const Login = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (e.g., 2 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  if (isLoading) {
    // Show the loading screen while loading
    return <Loading />;
  }

  // Render the login page after loading is complete
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
      <div className="bg-white p-6 shadow-md rounded-lg w-full max-w-sm">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKf3kfBtWETtA4_SbBXJqmCH830YAL0iWHw&s"
            alt="Instagram Logo"
            className="w-32"
          />
        </div>

        {/* Login Form */}
        <form className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Phone number, username, or email address"
            className="border rounded-md py-2 px-3 w-full focus:outline-none placeholder:text-xs"
          />
          <input
            type="password"
            placeholder="Password"
            className="border rounded-md py-2 px-3 w-full focus:outline-none placeholder:text-sm"
          />
          <button
            type="submit"
            className="bg-[#4CB5F9] text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Log In
          </button>
        </form>

        {/* Separator */}
        <div className="flex items-center justify-center my-4">
          <span className="bg-gray-300 h-px flex-grow"></span>
          <span className="px-3 text-gray-400 text-sm font-semibold">OR</span>
          <span className="bg-gray-300 h-px flex-grow"></span>
        </div>
        <span className="flex items-center justify-center space-x-1 text-center py-2 rounded-md cursor-pointer transition">
          <img
            className="w-10 text-center"
            src="https://media.designrush.com/inspirations/280756/conversions/facebook-logo-preview.jpg"
            alt="fblogo"
          />
          <p className="text-center text-[#3195F6] font-extrabold text-sm">
            Log in with Facebook
          </p>
        </span>
        <span className="flex items-center justify-center space-x-1 text-center text-sm py-2 rounded-md cursor-pointer transition">
          <p>Forgotten your password?</p>
        </span>
      </div>
      <div className="flex justify-center items-center w-96 m-5 bg-gray-50">
        <div className="flex gap-2 bg-white p-10 shadow-md text-center rounded-lg w-full max-w-2xl">
          <p>Don't have an account? </p>
          <a href=""> Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
