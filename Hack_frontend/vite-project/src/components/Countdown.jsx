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
  }, [targetDate]);

  return (
    <div className="w-full text-white bg-transparent min-h-auto">
   
      {/* Added margin-top to position it below the navbar */}
      <div className="mt-20 flex flex-col items-center text-center">
    
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-wide text-white mb-4">
          TECHKRUTI 2K25
        </h1>
        <h5 className="text-lg sm:text-2xl md:text-3xl font-semibold tracking-wide text-white mb-6">
          Organized by CSE (Data Science) Department, TGPCET
        </h5>

        <h1 className="text-lg pb-4  sm:text-2xl md:text-3xl font-semibold " >COUNTDOWN</h1>

        {/* Countdown Timer */}
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-semibold text-yellow-400 bg-transparent px-6 py-4 rounded-lg border-4 border-yellow-500 shadow-lg">
  {timeLeft.days}d : {timeLeft.hours}h : {timeLeft.minutes}m : {timeLeft.seconds}s
</h2>

      </div>
    </div>
  );
};

export default Countdown;


