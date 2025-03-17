
import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Techverse Hackathon 2K25",
    description:
      "Compete in an intense 7-hour coding marathon to solve real-world challenges.",
    img: "Hackthon.jpg",
    fee: "₹80 per head",
    teamSize: "2-4 members",
    venue: "TGPCET campus",
    date: "28th March",
    time: "9:00 AM - 4:00 PM",
  },
  {
    id: 2,
    title: "E-Sports Championship",
    description:
      "Battle in top-tier gaming tournaments featuring Valorant, BGMI, and Free Fire.",
    img: "e-sport.jpg",
    fee: "₹200 per squad",
    teamSize: "2-4 members",
    venue: "Gaming Arena",
    date: "29th March",
    time: "9:00 AM - 4:00 PM",
    registerLink:"https://docs.google.com/forms/d/e/1FAIpQLSehdgIUjkgNAqpjr8hi2jRJ7VYlwzUq2IUiMEdWIYKsKAJyRw/viewform?usp=dialog"
  },
  {
    id: 3,
    title: "Project Expo",
    description:
      "Showcase your innovative tech projects to industry leaders and investors.",
    img: "Projects.jpg",
    fee: "₹50 per entry",
    teamSize: "2-4 members",
    venue: "Expo Hall",
    date: "28th March",
    time: "9:00 AM - 4:00 PM",
  },
  {
    id: 4,
    title: "AI vs Human Debate",
    description:
      "Engage in a thrilling debate on AI's potential to surpass human intelligence.",
    img: "Debate.jpg",
    fee: "₹50 per participant",
    teamSize: "1-2 members",
    venue: "TGPCET campus",
    date: "28th March",
    time: "10:00 PM - 5:00 PM",
  },
  {
    id: 5,
    title: "Meme Battle",
    description: "Show off your creativity and humor by creating the most hilarious and trending memes.",
    img: "MemeBattle.jpg",
    fee: "₹30 per participant",
    teamSize: "1-2 members",
    venue: "TGPCET campus",
    date: "29th March",
    time: "10:00 AM - 5:00 PM"
  }
];

const Upcoming = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-screen text-white px-6 py-12  to-gray-900">
      {/* Gradient Neon Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-wide text-center uppercase mb-12 
                     bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text drop-shadow-lg">
        Upcoming Events
      </h1>

      {/* Event Cards - 2 Column Grid Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 gap-8">
        {events.map((event) => (
          <div
            key={event.id}
            className="relative backdrop-blur-lg bg-white/10 border border-white/20 
                      rounded-xl shadow-lg overflow-hidden p-5 flex flex-col justify-between min-h-[500px] transition 
                      hover:shadow-2xl hover:-translate-y-2"
          >
            {/* Event Image */}
            <div className="w-full h-70 overflow-hidden rounded-lg">
              <img
                src={event.img}
                alt={event.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Event Content */}
            <div className="mt-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-white">{event.title}</h2>
              <p className="text-gray-300 text-sm mt-2 flex-grow">{event.description}</p>

              {/* Highlighted Event Details */}
              <div className="mt-3 text-sm">
                <p className="text-yellow-400 font-semibold">💰 {event.fee}</p>
                <p className="text-green-400 font-semibold">👥 Team Size: {event.teamSize}</p>
                <p className="text-blue-400 font-semibold">📍 Venue: {event.venue}</p>
                <p className="text-purple-400 font-semibold">📅 {event.date}</p>
                <p className="text-red-400 font-semibold">⏰ Time: {event.time}</p>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-5 flex gap-4">
              <button
                className="w-1/2 bg-purple-600 text-white text-sm px-4 py-2 rounded-md hover:bg-purple-700 transition"
                onClick={ () => event.id == 1 ? navigate(`/hackthon`) () :  navigate(`/event/${event.id}`)}
              >
                View Details
              </button>
              <a
                href={event.registerLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-1/2 bg-green-600 text-white text-sm px-4 py-2 rounded-md text-center hover:bg-green-700 transition"
              >
                Register
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Upcoming;
