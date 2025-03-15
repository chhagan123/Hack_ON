import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
    {
        id: 1,
        title: "Techverse Hackathon 2K25",
        description: "Compete in an intense 7-hour coding marathon to solve real-world challenges.",
        img: "Hackthon.jpg",
        fee: "₹80 per head",
        teamSize: "2-4 members",
        date: "28th March",
        time: "9:00 AM - 6:00 PM (Sharp)"
    },
    {
        id: 2,
        title: "E-Sports Championship",
        description: "Battle in top-tier gaming tournaments featuring Valorant, BGMI, and Free Fire.",
        img: "esport.jpg",
        fee: "₹200 per squad",
        date: "29th March",
        time: "9:00 AM - 6:00 PM (Sharp)"
    },
    {
        id: 3,
        title: "Project Expo",
        description: "Showcase your innovative tech projects to industry leaders and investors.",
        img: "Projects.jpg",
        fee: "₹50 per entry",
        date: "28th March",
        time: "9:00 AM - 4:00 PM"
    },
    {
        id: 4,
        title: "AI vs Human Debate",
        description: "Engage in a thrilling debate on AI's potential to surpass human intelligence.",
        img: "Debate.jpg",
        fee: "₹50 per participant",
        date: "29th March",
        time: "2:00 PM - 5:00 PM"
    }
];

const Upcoming = () => {
    const navigate = useNavigate();

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen  text-white p-9">
            <h1 className="text-white text-4xl sm:text-6xl font-extrabold tracking-widest text-center uppercase mb-12">
                Upcoming Events
            </h1>

            <div className="w-full max-w-6xl grid md:grid-cols-2 lg:grid-cols-2 gap-12">
                {events.map((event) => (
                    <div key={event.id} className="relative bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                        <img src={event.img} alt={event.title} className="w-full h-56 object-cover" />
                        <div className="p-6">
                            <h2 className="text-2xl font-bold mb-2 text-white">{event.title}</h2>
                            <p className="text-gray-300 mb-4">{event.description}</p>
                            <p className="text-gray-400 font-semibold">Registration Fee: {event.fee}</p>
                            {event.teamSize && <p className="text-gray-400 font-semibold">Team Size: {event.teamSize}</p>}
                            <p className="text-gray-400 font-semibold">Date: {event.date}</p>
                            <p className="text-gray-400 font-semibold">Time: {event.time}</p>
                            <div className="mt-4 flex gap-4">
                                <button 
                                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                                    onClick={() => navigate(`/event/${event.id}`)}
                                >
                                    View More Details
                                </button>
                                <button 
                                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
                                    onClick={() => navigate(`/apply/${event.id}`)}
                                >
                                    Register Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Upcoming;