// src/components/Header.jsx
import React from "react";
import { FaBell, FaPlus, FaSearch } from "react-icons/fa";
import logo from "../assets/icons/logo.png";

const Header = () => {
  return (
    <header className="bg-white shadow px-4 sm:px-6 py-4 flex justify-between items-center fixed top-0 left-0 right-0 z-50 h-16">
      
      
      <img src={logo} alt="Healthcare Logo" className="h-40 sm:h-42 w-auto" />

   
      <div className="relative w-40 sm:w-64">
        <span className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400">
          <FaSearch size={14} />
        </span>
        <input
          type="text"
          placeholder="Search..."
          disabled
          className="pl-9 pr-3 py-1.5 text-sm border rounded-md focus:outline-none w-full text-gray-400 bg-gray-100 cursor-not-allowed"
        />
      </div>

     
      <div className="flex items-center space-x-4">
        
        
        <button
          aria-label="Notifications"
          className="relative text-gray-600 hover:text-blue-600"
        >
          <FaBell size={20} />
          <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

      
        <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-semibold select-none">
          U
        </div>

        
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
