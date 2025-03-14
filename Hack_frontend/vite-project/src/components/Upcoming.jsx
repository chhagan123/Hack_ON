import React from "react";

const events = [
    {
        id: 1,
        title: "Tech Summit 2025",
        description: "Join the biggest tech summit with top speakers from the industry.",
        img: "https://source.unsplash.com/300x200/?technology,conference",
    },
    {
        id: 2,
        title: "AI & ML Workshop",
        description: "Hands-on session with real-world AI and ML applications.",
        img: "https://source.unsplash.com/300x200/?ai,machinelearning",
    },
    {
        id: 3,
        title: "Web3 & Blockchain",
        description: "Explore the future of decentralized internet and finance.",
        img: "https://source.unsplash.com/300x200/?blockchain,crypto",
    },
    {
        id: 4,
        title: "Startup Pitch Fest",
        description: "Showcase your startup ideas to investors and industry leaders.",
        img: "https://source.unsplash.com/300x200/?startup,presentation",
    },
];

const Upcoming = () => {
    return (
<div className="w-full flex flex-col items-center justify-center min-h-screen bg-transparent text-white p-9">
    <h1 className="text-4xl font-bold mb-10 text-center">Upcoming Events</h1>

    {/* Center the grid container */}
    <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 justify-center">
        {events.map((event) => (
            <div key={event.id} className="bg-transparent rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <img src={event.img} alt={event.title} className="w-full h-48 object-cover"/>
                <div className="p-5">
                    <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
                    <p className="text-gray-300 mb-4">{event.description}</p>
                    <button className="bg-green-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md w-full">
                        Register Now
                    </button>
                </div>
            </div>
        ))}
    </div>
</div>

    );
};

export default Upcoming;
