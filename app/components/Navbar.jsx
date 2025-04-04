"use client";
import React, { useState } from 'react';
import { HiOutlineBell } from 'react-icons/hi';
import { FaSearch } from "react-icons/fa";
import { FiMenu, FiX } from 'react-icons/fi';
import { AddButton } from './ui/button/addButton';

const Navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(true);

  return (
    <nav className="w-full bg-gradient-to-r from-[#8d3018] via-[#e96c06] to-[#db630a] text-white border-accent mb-5 rounded-md shadow-sm z-50">
      <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-3">
        {/* Logo */}
        {!props.isSidebarOpen && (
          <a href="/" className="flex items-center space-x-3">
            <img src="logo.png" className="p-1" alt="Logo" />
            <p className="hidden md:block  text-xl font-bold text-primary-text-inverse">ProGate Technology</p>
          </a>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Search & Actions */}
        <div className="hidden md:flex items-center space-x-4 flex-grow justify-end">
          {/* <div className="relative max-w-md w-full">
            <FaSearch className="absolute left-4 top-3 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl border bg-white text-sm text-black placeholder-gray-400 focus:ring-2 ring-secondary outline-none"
            />
          </div> */}

          <HiOutlineBell size={22} className="text-white cursor-pointer" />

          <div className="relative">
            <button
              onMouseEnter={() => setMegaOpen(true)}
              onMouseLeave={() => setMegaOpen(false)}
              className="text-white font-medium hover:text-accent transition duration-200"
            >
              Features
            </button>

            {/* Mega Menu */}
            {megaOpen && (
              <div
                onMouseEnter={() => setMegaOpen(true)}
                onMouseLeave={() => setMegaOpen(false)}
                className="absolute top-full left-0 bg-white text-black p-4 rounded-md shadow-lg grid grid-cols-2 gap-6 w-[400px] z-50"
              >
                <div>
                  <h3 className="font-semibold mb-2">Products</h3>
                  <ul className="space-y-1 text-sm">
                    <li><a href="#" className="hover:text-secondary">POS</a></li>
                    <li><a href="#" className="hover:text-secondary">Inventory</a></li>
                    <li><a href="#" className="hover:text-secondary">Delivery</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Solutions</h3>
                  <ul className="space-y-1 text-sm">
                    <li><a href="#" className="hover:text-secondary">ERP</a></li>
                    <li><a href="#" className="hover:text-secondary">CRM</a></li>
                    <li><a href="#" className="hover:text-secondary">Analytics</a></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* <AddButton>Login</AddButton>
          <AddButton>Sign Up</AddButton> */}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-start px-4 pb-4 space-y-3">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border text-sm text-black bg-white placeholder-gray-400 focus:ring-2 ring-secondary outline-none"
          />
          <button className="text-white">Features</button>
          <button className="text-white">Login</button>
          <button className="text-white">Sign Up</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
