import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  const targetDate = new Date("March 28, 2025 00:00:00").getTime();
  
  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24))),
      hours: Math.max(0, Math.floor((difference / (1000 * 60 * 60)) % 24)),
      minutes: Math.max(0, Math.floor((difference / (1000 * 60)) % 60)),
      seconds: Math.max(0, Math.floor((difference / 1000) % 60)),
    };
  }

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white bg-transparent min-h-auto p-6 flex flex-col items-center text-center">
      {/* Header Section */}
      <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-[4px] uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        NATIONAL LEVEL
      </h1>
      <h2 className="text-[clamp(1.5rem,4vw,3rem)] font-extrabold tracking-[4px] uppercase bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
        TECHKRUTI 2K25
      </h2>
      <h5 className="text-[clamp(1.2rem,4vw,1.8rem)] font-semibold my-3 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-400 bg-clip-text text-transparent">
        Organized by CSE (Data Science) Department, TGPCET
      </h5>

      <h1 className="text-transparent bg-gradient-to-r from-indigo-400 via-blue-500 to-teal-400 bg-clip-text text-[clamp(1.8rem,6vw,2.5rem)] font-bold tracking-widest uppercase animate-pulse my-4">
        Countdown Begins
      </h1>

      {/* Countdown Timer */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
        {Object.entries(timeLeft).map(([unit, value], index) => (
          <div
            key={index}
            className="text-white bg-gradient-to-br from-gray-900 to-gray-800 border-[3px] border-purple-500/60 overflow-wrap rounded-xl shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-500/70 transition-all duration-300 ease-in-out font-extrabold text-[clamp(1rem,3vw,1.5rem)] w-[clamp(80px,15vw,130px)] p-4 text-center"
          >
            <span className="text-[clamp(1.5rem,4vw,2rem)] text-cyan-300">
              {value}
            </span>
            <br />
            <span className="text-xs uppercase tracking-widest text-gray-300">
              {unit}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Countdown;
