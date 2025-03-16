
import React, { useState } from "react";
import { Link } from "react-router-dom"; // If using React Router
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "Sponsor", path: "/sponsor" },
    { name: "Admin", path: "/admin" },
  ];

  return (
 <nav   className="  shadow-md text-white border-pink-300  rounded-lg m-8 z-60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 
               text-transparent bg-clip-text drop-shadow-lg">
  Techkruti 2K25
</h1>



          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="relative"
              >
                <Link
                  to={link.path}
                  className="text-lg hover:text-green-400 transition"
                >
                  {link.name}
                </Link>
                <motion.div
                  className="absolute left-0 bottom-0 h-1 w-full bg-green-400 origin-left scale-x-0"
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-transparent text-white space-y-4 p-4"
        >
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="block text-lg hover:text-green-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar; 