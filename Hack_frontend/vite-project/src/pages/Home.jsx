import React, { useState } from "react";
import { motion } from "framer-motion";

const Home = () => {
  const [clicked, setClicked] = useState(false);

  const events = [
    {
      id: 1,
      image: "/path-to-image1.jpg",
      title: "Engineer's Got Latent",
      description: "Group Entry (min 2 max 5 person per group) (50 rs)",
    },
    {
      id: 2,
      image: "/path-to-image2.jpg",
      title: "Hackathon Challenge",
      description: "Team Entry (3-5 members) (100 rs)",
    },
    {
      id: 3,
      image: "/path-to-image3.jpg",
      title: "Code Sprint",
      description: "Solo Entry (50 rs)",
    },
    {
      id: 4,
      image: "/path-to-image4.jpg",
      title: "Tech Quiz",
      description: "Team Entry (2-4 members) (30 rs)",
    },
  ];

  return (
    <>
      {/* Heading Section with Animation */}
      <div className="h-1/3 pt-20 bg-black text-white flex justify-center items-center">
        <motion.h1
          className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 
          shadow-lg transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.1, textShadow: "0px 0px 10px #0f0" }}
          whileTap={{ scale: 0.9, rotate: -5 }}
          onClick={() => setClicked(!clicked)}
        >
          {clicked ? "🚀 Let's Go!" : "TECHKRUTI 2K25"}
        </motion.h1>
      </div>

      {/* Event Cards Section */}
      <div className="h-1/3 pt-20 bg-black text-white flex flex-wrap justify-center gap-6 p-6">
        {events.map((event) => (
          <motion.div
            key={event.id}
            className="bg-black p-4 rounded-lg shadow-lg w-80 border border-green-500 hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #0f0" }}
          >
            <img
              src={event.image}
              alt={event.title}
              className="rounded-lg w-full h-40 object-cover"
            />
            <h2 className="text-green-400 text-lg font-bold mt-3">
              {event.title}
            </h2>
            <p className="text-gray-300 text-sm">{event.description}</p>
            <motion.button
              className="bg-green-500 hover:bg-green-600 text-black font-bold py-2 px-4 rounded w-full mt-3"
              whileTap={{ scale: 0.95 }}
            >
              Register Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Home;