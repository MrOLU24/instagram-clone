import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <img
        src="https://cdn-icons-png.flaticon.com/512/5968/5968776.png"
        alt="Instagram Logo"
        className="w-10 animate-pulse"
      />
    </div>
  );
};

export default Loading;
