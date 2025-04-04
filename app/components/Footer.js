import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-4 bg-gradient-to-r from-[#8d3018] via-[#e96c06] to-[#db630a] p-10 text-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-6 grid md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <img src="/logo.png" alt="logo"  />
          <h4 className="text-xl font-bold text-white mb-2">ProGateTechnology</h4>
          <p className="text-sm">
            From Local Hustle to Global Muscle — powering businesses across industries with cutting-edge solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h5 className="text-white font-semibold mb-4">Quick Links</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Home</a></li>
            <li><a href="#" className="hover:text-orange-400">Services</a></li>
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h5 className="text-white font-semibold mb-4">Resources</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-orange-400">Blog</a></li>
            <li><a href="#" className="hover:text-orange-400">FAQs</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms of Service</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h5 className="text-white font-semibold mb-4">Stay Connected</h5>
          <p className="text-sm mb-4">
            Get the latest updates and insights from the world of smart business.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-600"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 text-sm py-4 px-6 text-center mt-8">
        © {new Date().getFullYear()} ProGateTechnology. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
