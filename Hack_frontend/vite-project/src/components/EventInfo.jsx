import React from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Techverse Hackathon",
    subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
    date: "29 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🚀 What is Hackathon Name?",
          "Hackathon Name is an exciting duration-hour coding marathon where innovators, developers, designers, and problem-solvers come together to build impactful solutions in a collaborative environment.",
          "",
          "💡 Why Participate?",
          "- Solve real-world problems with cutting-edge technology",
          "- Work in teams and showcase your problem-solving skills",
          "- Gain mentorship from industry experts",
          "- Win exciting prizes and recognition",
          "- Network with like-minded tech enthusiasts and potential recruiters"
        ]
      }
    ],
    highlights: [
      "Creativity & Functionality",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Networking Opportunities",
      "Unleash Your Potential"
    ],
    contacts: [
      { name: "Web Craft Team", phone: "+91 9975661769" },
      { name: "Web Craft Team", phone: "+91 9712935674" }
    ]
  }
];

const EventInfo = () => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center text-white">Event not found</h2>;
  }

  return (
    <div className="text-white min-h-screen px-4 py-6 flex flex-col items-center">
      <div className="w-full max-w-4xl flex flex-col items-center">
        {/* Event Title */}
        <div className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[3.5rem] font-bold tracking-[3px] uppercase bg-gradient-to-r from-teal-400 via-blue-500 to-teal-400 bg-clip-text text-transparent">
            {event.title}
          </h1>
          <p className="mt-2 text-sm sm:text-lg">{event.subtitle}</p>
          <p className="mt-2 text-sm sm:text-base font-semibold">
            Date: <span className="text-white">{event.date}</span>
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-3xl text-center mt-6 sm:mt-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">About the Event</h2>
          {event.about.map((section, index) => (
            <div key={index}>
              {section.description.map((line, i) => (
                <p key={i} className="mt-3 text-sm sm:text-base text-gray-300">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Register Button */}
        <div className="flex justify-center w-full">
          <button className="mt-6 bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-3 text-sm sm:text-base text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform w-full sm:w-auto">
            Register Now
          </button>
        </div>

        {/* Key Highlights */}
        <div className="mt-10 sm:mt-16 w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 text-center">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 text-center">
            {event.highlights.map((highlight, index) => (
              <div key={index} className="p-4 border border-gray-700 rounded-lg">{highlight}</div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-10 sm:mt-16 text-center w-full">
          <h2 className="text-2xl sm:text-3xl font-bold text-blue-400">Contact Us</h2>
          <p className="mt-2 text-sm sm:text-base">For any inquiries or further details, please contact:</p>
          {event.contacts.map((contact, index) => (
            <p key={index} className="mt-2 font-semibold text-sm sm:text-base">
              {contact.name}: {contact.phone}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventInfo;
