"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const menuItems = [
  {
    label: "Home",
    href: "#",
  },
  {
    label: "Company",
    subMenu: [
      {
        title: "Online Stores",
        description: "Connect with third-party tools that you're already using.",
        href: "#",
      },
      {
        title: "Segmentation",
        description: "Understand and categorize your customers effectively.",
        href: "#",
      },
      {
        title: "Marketing CRM",
        description: "Manage your customer relationships efficiently.",
        href: "#",
      },
      {
        title: "Audience Management",
        description: "Segment your audience and personalize campaigns.",
        href: "#",
      },
      {
        title: "Creative Tools",
        description: "Design stunning visuals for your marketing needs.",
        href: "#",
      },
      {
        title: "Marketing Automation",
        description: "Automate your marketing and improve workflows.",
        href: "#",
      },
    ],
  },
  {
    label: "Marketplace",
    href: "#",
  },
  {
    label: "Resources",
    href: "#",
  },
  {
    label: "Contact",
    href: "#",
  },
];

const NavbarMega = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <nav className="rounded bg-gradient-to-r from-[#8d3018] via-[#e96c06] to-[#db630a] ">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3">
          <img src="/logo.png" alt="Logo" className="" />
          <span className="text-white text-2xl font-bold hidden md:block">
            ProGate Technology
          </span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg text-white hover:bg-white/10"
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        {/* Menu */}
        <ul
          className={`md:flex md:space-x-8 items-center text-white font-medium ${menuOpen ? "block" : "hidden"}`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="relative">
              {item.subMenu ? (
                <button
                  onClick={toggleDropdown}
                  className="flex items-center gap-1 py-2 px-4 hover:text-yellow-200"
                >
                  {item.label}
                  <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 10 6">
                    <path
                      d="M1 1l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <a href={item.href} className="py-2 px-4 block hover:text-yellow-200">
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Mega Dropdown */}
      {dropdownOpen && (
        <div className="border-t border-gray-200 bg-white dark:bg-gray-800 shadow-md">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto py-6 px-4 md:px-6 text-gray-900 dark:text-white">
            {menuItems
              .find((item) => item.subMenu)
              ?.subMenu.map((subItem, idx) => (
                <a
                  key={idx}
                  href={subItem.href}
                  className="block p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  <h4 className="font-semibold mb-1">{subItem.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {subItem.description}
                  </p>
                </a>
              ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMega;
