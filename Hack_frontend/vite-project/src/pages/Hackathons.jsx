import React from "react";

const TechverseHackathon = () => {
  return (
    <div className="w-full mt-20  min-h-screen text-white flex flex-col items-center py-12 px-6">
      {/* Hero Section */}
      <div className="w-full max-w-6xl text-center">
      
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text drop-shadow-lg">
          KrutiVerse Hackathon 2K25
        </h1>
        <p className="text-gray-300 text-lg mt-4">
          🚀 <strong>Where Innovation Meets Execution!</strong>
        </p>
        <p className="text-gray-300 text-lg mt-2">
          💡 Join a high-energy <strong>7-hour coding marathon</strong> where top minds solve <strong>real-world challenges</strong>, compete with <strong>elite developers</strong>, and <strong>showcase their skills</strong> for exciting rewards!
        </p>
      </div>

      {/* Event Details */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-yellow-400">📍 Event Details</h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li><strong>📅 Date:</strong> 28th March, 2025</li>
          <li><strong>⏰ Time:</strong> 9:00 AM - 4:00 PM</li>
          <li><strong>📍 Venue:</strong> TGPCET Campus</li>
          <li><strong>💰 Entry Fee:</strong> ₹80 per head</li>
          <li><strong>👥 Team Size:</strong> 2-4 members</li>
        </ul>
      </div>

      {/* Why Participate */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-green-400">🎯 Why Participate?</h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>💡 Solve real-world challenges</li>
          <li>🏆 Compete with the best coders</li>
          <li>🤝 Network with industry experts</li>
          <li>📜 Receive exclusive participation certificates</li>
          <li>🎁 Win exciting prizes</li>
        </ul>
      </div>

      {/* Hackathon Rules */}
      <div className="w-full max-w-4xl bg-gray-800 p-6 rounded-xl shadow-lg mt-8">
        <h2 className="text-2xl font-semibold text-red-400">📜 Hackathon Rules & Guidelines</h2>
        <ul className="mt-4 space-y-2 text-gray-300">
          <li>🔌 Bring your own laptops and required accessories</li>
          <li>🌐 Internet access will be provided</li>
          <li>🖥️ Follow ethical coding practices</li>
          <li>✅ Respect team collaboration and fair play</li>
          <li>⚖️ Judging criteria: Innovation, functionality, scalability</li>
        </ul>
      </div>

      {/* Registration Button */}
      <div className="mt-10">
        <a
          href="https://forms.gle/Aubvq4mS49vUcuE88"
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-6 py-3 rounded-lg shadow-lg transition"
        >
          🚀 Register Now
        </a>
      </div>
    </div>
  );
};

export default TechverseHackathon;
