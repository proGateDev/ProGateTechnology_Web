import React, { useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { FaSearch } from "react-icons/fa";
import { AddButton } from './ui/button/addButton';
//============================================================
const Navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <nav className="bg-background text-white  border-accent mb-5 rounded-md">




      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">

        {/* Logo */}
        {!props.isSidebarOpen ? <a href="/" className="flex items-center space-x-3">
          <img
            src="logo.png"
            className="w-12 h-12 rounded-full"
            alt="Logo"
          />
          <p style={{
            fontSize: 'var(--text-2xl)', color: 'var(--color-primary-text)',
          }}
            className="font-bold text-primary-text ">
            Badi Eats
          </p>        </a> : null}

        {/* Search Bar */}
        <div className="hidden   md:flex relative flex items-center w-full max-w-md sm:hidden">
          <FaSearch className="absolute left-4 top-3 text-gray-400" size={24} />

          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className=" p-3 pl-14 border  rounded-2xl bg-white text-white placeholder-gray-400 shadow-sm focus:ring-4 focus:ring-secondary focus:outline-none transition-all duration-300 hover:border-gray-400 w-full"
          />
        </div>
        {/* <ThemeSelector /> */}
        {/* Icons and Profile */}
        <div className="flex items-center space-x-6">
          {/* Bell Icon */}




          {/* SIgn Up Button */}
          <AddButton >
            Login In
          </AddButton>
          <AddButton >
            Sign Up
          </AddButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;