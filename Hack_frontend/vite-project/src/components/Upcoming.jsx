import React from "react";
import { useNavigate } from "react-router-dom";

const events = [
    {
        id: 1,
        title: "Techverse Hackthon 2K25",
        description: "Showcase your creativity and design intuitive user experiences in this ultimate UI/UX competition.",
        img: "esport.jpg",
    },
    {
        id: 2,
        title: "e-sports",
        description: "Present your innovative tech projects and showcase your problem-solving skills",
        img: "esport.jpg",
    },
    {
        id: 3,
        title: "Poster Compitition",
        description: "Design creative and impactful posters that visually communicate powerful ideas.",
        img: "Debate.jpg",
    },
    {
        id: 4,
        title: "E-Gaming",
        description: "Compete in top-tier gaming battles featuring Valorant, BGMI, and Free Fire. Show your skills and dominate the battlefield!",
        img: "Debate.jpg",
    },
    {
        id: 5,
        title: "Startup Pitch Fest",
        description: "Showcase your startup ideas to investors and industry leaders.",
        img: "Projects.jpg",
    },
];

const Upcoming = () => {
    const navigate = useNavigate(); // ✅ Initialize navigation function

    return (
        <div className="w-full flex flex-col items-center justify-center min-h-screen bg-transparent text-white p-9">
            <h1 className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-[30px] sm:text-[60px] font-bold tracking-widest text-center uppercase animate-pulse">
                Upcoming Events
            </h1>

            {/* Event Grid */}
            <div className="w-full h-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 justify-center">
                {events.map((event) => (
                    <div key={event.id} className="bg-transparent backdrop-blur-md rounded-lg shadow-[0_0_15px_#0fc6] max-w-[500px] w-full p-5 text-center relative transition-transform duration-300 ease-in-out">
                        <img src={event.img} alt={event.title} className="w-full object-cover" />
                        <div className="p-5">
                            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                            <p className="text-gray-300 mb-4">{event.description}</p>
                            {/* ✅ Navigate to Event Page with ID */}
                            <button 
                                className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded-md w-full"
                                onClick={() => navigate(`/event/${event.id}`)}
                            >
                                Know More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Upcoming;