import React from "react";

const supportTeam = [
  {
    id: 1,
    name: "Chhagan Rakhade ",
    role: "Registration technical support ",
    email: "chhaganrakhade7@gmail.com",
    phone: "+91 9158396794",
    image: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    id: 2,
    name: "Himanshu Dhenge",
    role: "Judging and Participation tech",
    email: "himanshudhenge4@gmail.com",
    phone: "+91 87654 32109",
    image: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    id: 3,
    name: "Shubham kopare",
    role: "Technical support head",
    email: "shubhamkopare2004@gmil.com",
    phone: "+91 76543 21098",
    image: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Network Engineer",
    email: "emily.davis@example.com",
    phone: "+91 65432 10987",
    image: "https://randomuser.me/api/portraits/women/4.jpg"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-transparent p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-white">Technical Support Team</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {supportTeam.map((person) => (
          <div key={person.id} className="bg-transparent shadow-lg rounded-lg p-5 text-center">
            <img
              src={person.image}
              alt={person.name}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold text-white">{person.name}</h2>
            <p className="text-gray-500">{person.role}</p>
            <p className="text-blue-500 mt-2">{person.email}</p>
            <p className="text-gray-600">{person.phone}</p>
          </div>
        ))}
      </div>

      {/* Google Maps Section */}
      <div className="mt-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Our Location</h2>
        <div className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-600">
          <iframe
            title="TGPCET Location"
            className="w-full h-96"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3495438371925!2d79.0125!3d20.9607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd495fb10c4e4f3%3A0x77a4d2c0a5a8f6f9!2sTulsiramji%20Gaikwad-Patil%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1712345678901"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;

