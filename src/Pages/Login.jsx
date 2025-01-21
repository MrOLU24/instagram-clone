import React, { useState, useEffect } from "react";
import Loading from "../components/Loading";
import PhoneCarousel from "../components/PhoneCarousel";

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
    <div className="flex justify-center gap-5 items-center h-screen bg-gray-50">
      {/* this is the carousel component */}
      <PhoneCarousel />
      <div className="flex flex-col justify-center items-center h-screen bg-gray-50">
        <div className="bg-white p-5 border border-gray-300 w-full max-w-sm">
          {/* Instagram Logo */}
          <div className="flex justify-center mb-6">
            <img
              src="/src/assets/igimage.png"
              alt="Instagram Logo"
              className="w-32"
            />
          </div>
          {/* Login Form */}
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Phone number, username, or email address"
              className="border rounded-md py-2 px-2 w-full focus:outline-none placeholder:text-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="border rounded-md py-2 px-2 w-full focus:outline-none placeholder:text-sm"
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
              src="./src/assets/facebook-logo-preview.jpg"
              alt="fblogo"
            />
            <p className="text-center text-[#3195F6] hover:text-gray-600 font-extrabold text-sm">
              Log in with Facebook
            </p>
          </span>
          <span className="flex items-center justify-center m-1 space-x-1 text-center text-sm py-2 rounded-md cursor-pointer transition">
            <p>
              <a href="">Forgotten your password?</a>
            </p>
          </span>
        </div>
        <div className="flex justify-center items-center w-96 m-5 bg-gray-50">
          <div className="flex justify-center gap-2 text-sm bg-white p-5 border border-gray-300 text-center w-full max-w-2xl">
            <p>Don't have an account? </p>
            <a
              href="/signup"
              className="text-blue-500 font-semibold hover:underline"
            >
              Sign Up
            </a>
          </div>
        </div>
        <section className="flex flex-col items-center justify-center w-full max-w-sm">
          <p className="text-sm m-2">Get the App</p>
          <div className="flex justify-center gap-2">
            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DC4C01CE0-3CF9-4A6E-BC58-8045F5B87E4B%26utm_campaign%3DunifiedHome%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
              <img
                className="w-40 h-10"
                src="/src/assets/Google_Play.svg.png"
                alt="googleplay"
              />
            </a>
            <a href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1366%2C720">
              <img
                className="w-40 h-10"
                src="/src/assets/microStore.png"
                alt="microsoftstore"
              />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
