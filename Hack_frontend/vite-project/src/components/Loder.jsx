import { motion } from "framer-motion";
import React from "react";
const Loder = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-4">
        {/* Main Text */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "anticipate",
          }}
          className="text-5xl font-bold text-blue-400 uppercase" // Changed to lighter blue
        >
          Techkruti
        </motion.div>

        {/* Powered By Section */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="text-gray-300 italic relative" // Changed to lighter gray
        >
          Powered by
          {/* Data Science Text */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="block text-lg mt-1 text-emerald-400 font-semibold" // Brighter green
          >
            <span className="animate-pulse">data science</span>
          </motion.span>
        </motion.div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-1 mt-4">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: 0 }}
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="w-2 h-2 bg-blue-300 rounded-full" // Lighter blue dots
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loder;