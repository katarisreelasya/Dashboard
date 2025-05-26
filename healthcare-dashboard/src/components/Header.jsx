import React from "react";
import { FaBell, FaPlus } from "react-icons/fa";

const Header = () => {
  return (
    <header className="bg-white shadow px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-16">
      {/* App Logo/Title */}
      <h1 className="text-2xl font-bold text-gray-800">Healthcare.</h1>

      {/* Center: Search Bar (display only) */}
      <input
        type="text"
        placeholder="Search..."
        disabled
        className="px-3 py-1.5 text-sm border rounded-md focus:outline-none w-64 text-gray-400 bg-gray-100 cursor-not-allowed"
      />

      {/* Right Section: Notification, Profile, Add Button */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button
          aria-label="Notifications"
          className="relative text-gray-600 hover:text-blue-600"
        >
          <FaBell size={20} />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold select-none">
            U
          </div>
          <span className="text-gray-800 font-medium">User Name</span>
        </div>

        {/* Add Button */}
        <button
          aria-label="Add"
          className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full"
        >
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default Header;
