import React from "react";
const SignupPage = () => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-50">
      <div className="max-w-sm w-full p-6 border bg-white border-gray-300 rounded-lg">
        {/* Instagram Logo */}
        <div className="flex justify-center mb-4 flex-col items-center">
          <img
            src="/src/assets/igimage.png"
            alt="Instagram Logo"
            className="w-40"
          />
          <p className="text-center text-gray-500 w-64">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <span className="flex bg-[#0095F6] items-center justify-center space-x-2 hover:bg-blue-700 text-center py-2 rounded-md cursor-pointer transition">
          <img
            className="w-8 text-center"
            src="./src/assets/facebook-logo-preview.jpg"
            alt="fblogo"
          />
          <p className="text-center  text-white font-bold text-xs">
            Log in with Facebook
          </p>
        </span>
        {/* Separator */}
        <div className="flex items-center justify-center my-4">
          <span className="bg-gray-300 h-px flex-grow"></span>
          <span className="px-3 text-gray-400 text-sm font-semibold">OR</span>
          <span className="bg-gray-300 h-px flex-grow"></span>
        </div>
        <form className="space-y-4 mt-4">
          <input
            type="email"
            placeholder="Mobile number or email address"
            className="w-full px-4 py-2 border rounded-md focus:outline-none placeholder:text-xs"
          />
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none placeholder:text-xs"
          />
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border rounded-md focus:outline-none placeholder:text-xs"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none placeholder:text-xs"
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
          <a href="/login" className="text-blue-500 hover:underline">
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
