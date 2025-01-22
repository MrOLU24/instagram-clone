import React from "react";

const SignUp = () => {
  return (
    <main className="mt-24">
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="flex bg-white items-center justify-center w-96  border border-gray-300">
          <form className="space-y-1.5 mt-2 p-6">
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
              className="w-full bg-slate-100 px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-slate-100 px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="text"
              placeholder="Fullname"
              className="w-full bg-gray-100 px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
            />
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-slate-100 px-2 py-2 border border-gray-400 border-solid rounded-md focus:outline-none placeholder:text-xs"
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
        <div className="flex justify-center items-center w-full mt-2">
          <div className="flex justify-center gap-2 text-sm bg-white p-4 border border-gray-300 w-96 text-center">
            <p>Have an account?</p>
            <a
              href="/login"
              className="text-blue-500 font-semibold hover:underline"
            >
              Log in
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
        <div className="flex justify-center items-center w-full mt-2">
          <ul className="flex gap-2 text-sm text-gray-500">
            <li>meta</li>
            <li>About</li>
            <li>Blog</li>
            <li>Jobs</li>
            <li>Help</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
