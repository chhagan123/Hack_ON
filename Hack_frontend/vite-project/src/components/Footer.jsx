import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-[#0D1117] to-[#1A1F2B] text-white py-10 px-6 text-center">
      {/* Jumping Robot */}
      <img
        src="/robot.png" // Update with your image path
        alt="Robot"
        className="absolute -top-14 left-1/2 transform -translate-x-1/2 w-20 sm:w-24 animate-bounce"
      />

      {/* Footer Content */}
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-lg sm:text-xl font-bold text-cyan-400 tracking-wide">
          TECHKRUTI 2025
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm mt-2 text-center">
          Computer Science & Data Science Department <br />
          Tulsiramji Gaikwad College of Engineering & Tech, Mohgav
        </p>

        {/* Navigation Links */}
        <nav className="mt-4 flex flex-wrap justify-center space-x-3 sm:space-x-5 text-cyan-300 text-xs sm:text-sm font-medium">
          <a href="#" className="hover:text-cyan-200 transition">Home</a>
          <a href="#" className="hover:text-cyan-200 transition">About</a>
          <a href="#" className="hover:text-cyan-200 transition">Sponsors</a>
          <a href="#" className="hover:text-cyan-200 transition">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-5 flex justify-center space-x-4 text-xl">
          <a href="#" className="text-cyan-300 hover:text-cyan-200 transition"><FaFacebook /></a>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 transition"><FaYoutube /></a>
          <a href="#" className="text-cyan-300 hover:text-cyan-200 transition"><FaLinkedin /></a>
          <a href="https://www.instagram.com/ds_tgpcet/?hl=en" className="text-cyan-300 hover:text-cyan-200 transition"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs sm:text-sm mt-5">
          © 2025 TECHKRUTI. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

