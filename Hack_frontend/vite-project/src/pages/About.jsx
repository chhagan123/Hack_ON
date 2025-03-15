import { motion } from "framer-motion";
import React from "react";
const Aboute = () => {
  return (
    <div className="bg-transparent bg-cover bg-center min-h-screen flex flex-col items-center text-gray-900 py-12 px-6 md:px-12 lg:px-24">
      {/* College Intro */}
      <motion.div
        className="text-center mb-12 backdrop-blur-lg bg-transparent
         p-8 rounded-2xl shadow-lg border border-white/30"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          About Tulsiramji Gaikwad-Patil College of Engineering & Technology
        </h1>
        <p className="mt-4 text-lg text-white/80 max-w-3xl mx-auto">
          Tulsiramji Gaikwad-Patil College of Engineering & Technology (TGPCET)
          is a leading institution fostering **engineering excellence,
          innovation, and professional growth**. With **world-class infrastructure
          and industry-driven programs**, we prepare students for a successful future
          in technology.
        </p>
      </motion.div>

      {/* Department Section */}
      <motion.div
        className="w-full max-w-4xl backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg border border-white/30"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          Department of [Your Department Name]
        </h2>
        <p className="mt-3 text-white/80">
          Our **[Computer Science, IT, AI & DS, etc.]** department focuses on
          **cutting-edge research, hands-on learning, and industry collaborations**.
          We emphasize practical exposure to emerging technologies, shaping students
          into **industry-ready professionals**.
        </p>

        <ul className="mt-4 text-white/80 list-disc pl-6">
          <li>🔹 Advanced labs & research centers</li>
          <li>🔹 Industry-relevant curriculum & workshops</li>
          <li>🔹 Internships & placement assistance</li>
          <li>🔹 Student innovation clubs & hackathons</li>
        </ul>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        className="mt-12 w-full max-w-4xl backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg border border-white/30"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">Vision & Mission</h2>
        <p className="mt-3 text-white/80">
          🔹 **Vision:** To establish a **center of excellence** in engineering
          education, fostering **technological innovation and leadership**.
        </p>
        <p className="mt-2 text-white/80">
          🔹 **Mission:** To create a **dynamic learning environment** that prepares
          students with **technical expertise, ethical values, and leadership skills**.
        </p>
      </motion.div>

      {/* Why Participate? */}
      <motion.div
        className="mt-12 w-full max-w-4xl backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg border border-white/30"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">
          Why Participate in Techverse?
        </h2>
        <ul className="mt-4 text-white/80 list-disc pl-6">
          <li>✅ **Compete in national-level coding, gaming & innovation contests**</li>
          <li>✅ **Network with tech leaders, mentors, and fellow innovators**</li>
          <li>✅ **Showcase your talents & win exciting prizes**</li>
          <li>✅ **Gain hands-on experience with real-world challenges**</li>
        </ul>
      </motion.div>

      {/* Achievements */}
      <motion.div
        className="mt-12 w-full max-w-4xl backdrop-blur-lg bg-white/10 p-8 rounded-2xl shadow-lg border border-white/30"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        <h2 className="text-3xl font-bold text-white drop-shadow-lg">Our Achievements</h2>
        <ul className="mt-4 text-white/80 list-disc pl-6">
          <li>🏆 Recognized as a **leading institution in engineering education**</li>
          <li>📜 Multiple **research papers, hackathon victories & innovative projects**</li>
          <li>🚀 Alumni placed in **top MNCs, startups & research institutions**</li>
          <li>🤝 Strong **industry collaborations & MoUs for student growth**</li>
        </ul>
      </motion.div>

      {/* Call to Action */}
      
    </div>
  );
};

export default Aboute;
