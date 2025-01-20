import React from "react";
const SignupPage = () => {
    return (
      <div className="flex h-screen justify-center items-center bg-gray-50">
        <div className="max-w-sm w-full p-6 border bg-white border-gray-300 rounded-lg">
          <h1 className="text-center text-2xl font-semibold text-gray-800 mb-6">Sign Up</h1>
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none focus:ring-blue-300"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:ring focus:outline-none focus:ring-blue-300"
            />
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <p className="text-center text-sm text-gray-500 mt-4">
            Have an account?{" "}
            <a
              href="/login"
              className="text-blue-500 hover:underline"
            >
              Log in
            </a>
          </p>
        </div>
      </div>
    );
  };
  
  export default SignupPage;  