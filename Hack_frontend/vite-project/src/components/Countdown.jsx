import { useState, useEffect } from "react";
import React from "react";

const Countdown = () => {
  const targetDate = new Date("March 28, 2025 00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full text-white bg-transparent min-h-auto p-4">
      {/* Header Section */}
      <div className="mt-10 flex flex-col items-center text-center">
        <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-bold tracking-[3px] uppercase bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
          TECHKRUTI 2K25
        </h1>
        <h5 className="text-[clamp(1.2rem,4vw,1.8rem)] font-semibold my-3 bg-gradient-to-r from-green-400 via-lime-500 to-green-400 bg-clip-text text-transparent">
          Organized by CSE (Data Science) Department, TGPCET
        </h5>

        <h1 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-[clamp(1.8rem,6vw,2.5rem)] font-bold tracking-widest uppercase animate-pulse my-4">
          Countdown
        </h1>

        {/* Countdown Timer */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-4">
          {Object.entries(timeLeft).map(([unit, value], index) => (
            <div
              key={index}
              className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text border-[3px] border-blue-400/50 rounded-xl shadow-md shadow-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/60 transition-all duration-300 ease-in-out font-bold text-[clamp(1rem,3vw,1.5rem)] w-[clamp(80px,15vw,130px)] p-3 sm:p-4 text-center"
            >
              {value} <br />
              <span className="text-sm uppercase">{unit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countdown;
