import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative bg-[#121417] text-white py-12 px-4 text-center">
      {/* Floating Robot */}
      <img
        src="/robot.png" // Update with your image path
        alt="Robot"
        className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-28 animate-bounce"
      />

      {/* Footer Content */}
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-cyan-400">TECHKRUTI 2025</h2>
        <p className="text-gray-400 mt-2">
          Computer Science Department & Data Science
          <br/>
          Tulsiramji Gaikwad college of Enginerring & Tech Mohgav
        </p>

        {/* Navigation Links */}
        <nav className="mt-5 flex justify-center space-x-6 text-cyan-400 font-semibold">
          <a href="#" className="hover:text-cyan-300">Home</a>
          <a href="#" className="hover:text-cyan-300">About</a>
          <a href="#" className="hover:text-cyan-300">Sponsors</a>
          <a href="#" className="hover:text-cyan-300">Contact</a>
        </nav>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center space-x-6 text-xl">
          <a href="#" className="text-cyan-400 hover:text-cyan-300"><FaFacebook /></a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300"><FaYoutube /></a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300"><FaLinkedin /></a>
          <a href="#" className="text-cyan-400 hover:text-cyan-300"><FaInstagram /></a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-6">© 2025 Eventify. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
