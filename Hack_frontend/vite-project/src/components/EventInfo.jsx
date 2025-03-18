import React from "react";
import { useParams } from "react-router-dom";

const events = [
  {
    id: 1,
    title: "Techverse Hackathon",
    subtitle: "A Great Fundraising Opportunity to Showcase Your Talent",
    date: "28 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🚀 What is Hackathon Techverse?",
          "Hackathon Techverse is a 7-hour coding marathon where innovators, developers, designers, and problem-solvers collaborate to build impactful solutions.",
          "",
          "💡 Why Participate?",
          "- Solve real-world problems with cutting-edge technology",
          "- Work in teams and showcase problem-solving skills",
          "- Gain mentorship from industry experts",
          "- Win exciting prizes and recognition",
          "- Network with like-minded tech enthusiasts"
        ]
      }
    ],
    highlights: [
      "Creativity & Functionality",
      "Team Collaboration",
      "Exciting Prizes & Recognition",
      "Innovative Challenges",
      "Networking Opportunities",
      "7 hours non stop coding"
    ],
    contacts: [
      { name: "Chhagan Rakhade", phone: "+91 9158396794" },
      { name: "Himanshu dhenge", phone: "+91 9322913858" }
    ]
  },

  {
    id: 2,
    title: "E-Sports Championship",
    subtitle: "Battle in top-tier gaming tournaments featuring Valorant, BGMI, and Free Fire.",
    date: "29 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎮 What is the E-Sports Championship?",
          "The E-Sports Championship brings together gaming enthusiasts for the ultimate competitive showdown, featuring the most popular battle royale and FPS games!",
          "",
          "🔥 Why Participate?",
          "- Compete in high-stakes tournaments with skilled players",
          "- Play your favorite games: Valorant, BGMI, and Free Fire",
          "- Win cash prizes, exclusive in-game rewards, and trophies",
          "- Experience a thrilling gaming atmosphere with live commentary",
          "- Meet and connect with pro gamers and gaming influencers"
        ]
      }
    ],
    highlights: [
      "Thrilling Battle Royale & FPS Matches",
      "Cash Prizes & Gaming Rewards",
      "Live Streaming & Commentary",
      "Squad & Solo Mode Competitions",
      "Intense Showdowns with Pro Gamers",
      "Ultimate Gaming Experience"
    ],
    contacts: [
      { name: "Priyanshu Patle", phone: "+91 70388 36841" },
      { name: "Dishant Janbandhu", phone: "+91 7517938702" } 
    ]
  },
  {
    id: 3,
    title: "Project Expo",
    subtitle: "Showcase Your Innovative Projects to Industry Experts",
    date: "30 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🎯 What is Project Expo?",
          "Project Expo is an exhibition of innovative student projects across various disciplines. It provides a platform for students to showcase their technical and creative skills.",
          "",
          "🔍 Why Participate?",
          "- Get your project evaluated by industry experts",
          "- Gain feedback and mentorship for improvement",
          "- Win prizes and recognition for outstanding innovations",
          "- Build networking opportunities with professionals and investors",
        ],
      },
    ],
    highlights: [
      "Innovative Project Showcase",
      "Industry Expert Evaluation",
      "Networking with Professionals",
      "Exciting Prizes for Best Projects",
      "Hands-on Feedback & Mentorship",
    ],
    contacts: [
      { name: "Vishakha ghatole", phone: "8008212898"},
      { name: "Nidhi Sharnagat", phone: "9021138083"}
    ],
  },
  {
    id: 4,
    title: "AI/ML Debate",
    subtitle: "Discuss the Future of AI & Machine Learning",
    date: "31 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "🧠 What is AI/ML Debate?",
          "The AI/ML Debate is a competitive discussion where experts, students, and enthusiasts share insights on the future of AI, ethics, and its impact on industries.",
          "",
          "🤔 Why Participate?",
          "- Engage in thought-provoking discussions",
          "- Explore the latest trends and breakthroughs in AI",
          "- Challenge yourself with logical reasoning and argumentation",
          "- Get recognized for your analytical and debating skills",
        ],
      },
    ],
    highlights: [
      "Industry Expert Panel",
      "Debate on AI's Ethical Concerns",
      "Latest AI/ML Trends Discussion",
      "Recognition for Best Debaters",
      "Certificate of Participation",
    ],
    contacts: [
      { name: "Devanshi Shingade", phone: " +707750311"},
      { name: "Nidhi meshram", phone: "+91 8180962625" }
    ],
  },
  {
    id: 5,
    title: "Meme Battle",
    subtitle: "Unleash Your Creativity with the Funniest Memes",
    date: "29 March, 2025",
    about: [
      {
        heading: "About the Event",
        description: [
          "😂 What is the Meme Battle?",
          "The Meme Battle is a creative competition where participants craft hilarious and trending memes on tech, college life, pop culture, and more.",
          "",
          "🔥 Why Participate?",
          "- Show off your meme-making skills",
          "- Compete with fellow meme lords",
          "- Create viral-worthy content",
          "- Win prizes and recognition for your humor",
          "- Have fun and make the audience laugh!"
        ]
       
      }
    ],
    highlights: [
      "Theme-Based Meme Creation",
      "Live Voting & Audience Reactions",
      "Best Meme Awards & Prizes",
      "Social Media Feature for Top Memes",
      "Certificate of Participation"
    ],
    contacts: [
      { name: "Devanshi Shingade", phone: " +707750311"},
      { name: "Nidhi meshram", phone: "+91 8180962625" }
    ],
  }
  
];

const EventInfo = () => {
  const { id } = useParams();
  const event = events.find((event) => event.id === parseInt(id));

  if (!event) {
    return <h2 className="text-center text-white">Event not found</h2>;
  }

  return (
    <div className="text-white mt-20 in-h-screen px-6 py-8 flex flex-col items-center bg-transparent">
      <div className="w-full max-w-5xl flex flex-col items-center">

        {/* Event Title */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-wide uppercase bg-gradient-to-r from-teal-300 via-blue-500 to-purple-400 bg-clip-text text-transparent drop-shadow-lg">
            {event.title}
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-gray-300">{event.subtitle}</p>
          <p className="mt-2 text-base sm:text-lg font-semibold text-blue-300">
            📅 Date: <span className="text-white">{event.date}</span>
          </p>
        </div>

        {/* About Section */}
        <div className="max-w-3xl text-center mt-8 sm:mt-10 px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 glow-effect">About the Event</h2>
          <div className="mt-4 space-y-4">
            {event.about.map((section, index) => (
              <div key={index}>
                {section.description.map((line, i) => (
                  <p key={i} className="text-base sm:text-lg text-gray-300">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Register Button */}
        <div className="flex justify-center w-full">
          <button className="mt-8 bg-gradient-to-r from-cyan-400 to-blue-600 px-6 py-3 text-lg font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-200 hover:shadow-blue-500/50">
            🚀 Register Now
          </button>
        </div>

        {/* Key Highlights */}
        <div className="mt-12 sm:mt-16 w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 text-center glow-effect">Key Highlights</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 text-center">
            {event.highlights.map((highlight, index) => (
              <div
                key={index}
                className="p-5 border border-gray-700 rounded-lg shadow-md hover:shadow-blue-500/50 transition-shadow duration-300 bg-gray-900 bg-opacity-50 backdrop-blur-lg"
              >
                <p className="text-lg font-semibold">{highlight}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 sm:mt-16 text-center w-full">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-400 glow-effect">Contact Us</h2>
          <p className="mt-3 text-lg text-gray-300">For inquiries, please contact:</p>
          <div className="mt-3 space-y-2">
            {event.contacts.map((contact, index) => (
              <p key={index} className="text-lg font-semibold">
                📞 {contact.name}: <span className="text-blue-300">{contact.phone}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInfo;