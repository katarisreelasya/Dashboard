// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center rounded-b-2xl">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1.5 text-sm border rounded-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold">
          U
        </div>
      </div>
    </header>
  );
};

export default Header;
