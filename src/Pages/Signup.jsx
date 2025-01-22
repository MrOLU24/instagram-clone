import React from "react";
const SignupPage = () => {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-50">
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        {/* Instagram Logo */}
        <div className="bg-white p-5 border border-gray-300 w-full max-w-xs">
          <span className="flex justify-center items-center flex-col">
            <img
              src="/src/assets/igimage.png"
              alt="Instagram Logo"
              className="w-40"
            />
            <p className="text-center text-[1.2rem] text-gray-500 w-64">
              Sign up to see photos and videos from your friends.
            </p>
          </span>
          <span className="flex bg-[#0095F6] items-center justify-center mt-3 space-x-2 hover:bg-blue-700 text-center py-2 rounded-md cursor-pointer transition">
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
          <form className="space-y-1.5 mt-2">
            <input
              type="email"
              placeholder="Mobile number or email address"
              className="w-full px-2 py-2 border rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full px-2 py-2 border rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="text"
              placeholder="Fullname"
              className="w-full px-2 py-2 border rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full px-2 py-2 border rounded-md focus:outline-none placeholder:text-xs"
            />
            <span className="text-xs text-center flex gap-5 flex-col text-gray-500">
              <p>
                People who use our service may have uploaded your contact
                information to Instagram.{" "}
                <a className="text-blue-400" href="/">
                  Learn more
                </a>
              </p>
              <p>
                By signing up, you agree to our Terms, Privacy Policy and
                Cookies Policy.
              </p>
            </span>
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
    </main>
  );
};

export default SignupPage;
