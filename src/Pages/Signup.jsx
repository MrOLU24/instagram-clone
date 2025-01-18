import React from 'react';

const Signup = () => {
  return (
    <form className="max-w-sm mx-auto p-4 shadow bg-white rounded">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input className="w-full p-2 mb-4 border rounded" type="text" placeholder="Username" />
      <input className="w-full p-2 mb-4 border rounded" type="email" placeholder="Email" />
      <input className="w-full p-2 mb-4 border rounded" type="password" placeholder="Password" />
      <button className="w-full bg-blue-500 text-white py-2 rounded">Sign Up</button>
    </form>
  );
};

export default Signup;