import React from "react";

const SignUp = () => {
  return (
    <main className="h-screen bg-gray-200">
      <div className="flex justify-center items-center h-screen">
        <div className="flex bg-white items-center justify-center w-96 p-6 border border-gray-300">
          <form className="space-y-1.5 mt-2">
            <div className="flex justify-center flex-col items-center">
              <img
                src="/src/assets/igimage.png"
                alt="Instagram Logo"
                className="w-40"
              />
              <p className="text-lg/5 text-gray-500 font-bold text-center w-64">
                Sign up to see photos and videos from your friends.
              </p>
              <span className="flex bg-[#0095F6] w-full items-center justify-center mt-3 space-x-2 hover:bg-blue-700 text-center py-2 rounded-md cursor-pointer transition">
                <img
                  className="w-8 text-center"
                  src="./src/assets/facebook-logo-preview.jpg"
                  alt="fblogo"
                />
                <p className="text-center text-white font-bold text-xs">
                  Log in with Facebook
                </p>
              </span>
              <div className="flex items-center justify-center my-4 w-full">
                <span className="bg-gray-300 h-px flex-grow"></span>
                <span className="px-3 text-gray-400 text-sm font-semibold">
                  OR
                </span>
                <span className="bg-gray-300 h-px flex-grow"></span>
              </div>
            </div>
            <input
              type="email"
              placeholder="Mobile number or email address"
              className="w-full bg-slate-100  px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="password"
              placeholder="password"
              className="w-full bg-slate-100  px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="text"
              placeholder="Fullname"
              className="w-full bg-gray-100 px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-slate-100 px-2 py-2 border border-gray-400 border-soli rounded-md focus:outline-none placeholder:text-xs"
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
        </div>
      </div>
    </main>
  );
};

export default SignUp;
