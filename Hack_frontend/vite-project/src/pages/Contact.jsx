import React from "react";

const supportTeam = [
  {
    id: 1,
    name: "Chhagan Rakhade",
    role: "Registration Technical Support",
    email: "chhaganrakhade7@gmail.com",
    phone: "+91 9158396794"
  },
  {
    id: 2,
    name: "Himanshu Dhenge",
    role: "Judging and Participation Tech",
    email: "himanshudhenge4@gmail.com",
    phone: "+91 87654 32109"
  },
  {
    id: 3,
    name: "Shubham Kopare",
    role: "Technical Support Head",
    email: "shubhamkopare2004@gmil.com",
    phone: "+91 76543 21098"
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Network Engineer",
    email: "emily.davis@example.com",
    phone: "+91 65432 10987"
  }
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

      {/* Support Team Section */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {supportTeam.map((person) => (
          <div key={person.id} className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold">{person.name}</h2>
            <p className="text-gray-400">{person.role}</p>
            <p className="mt-2">
              📧 <a href={`mailto:${person.email}`} className="text-blue-400 hover:underline">{person.email}</a>
            </p>
            <p>
              📞 <a href={`tel:${person.phone}`} className="text-blue-400 hover:underline">{person.phone}</a>
            </p>
          </div>
        ))}
      </div>

      {/* Google Maps Section */}
      <div className="mt-12 max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Our Location</h2>
        <div className="overflow-hidden rounded-lg shadow-lg border-2 border-gray-600">
          <iframe
            title="TGPCET Location"
            className="w-full h-80"
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


