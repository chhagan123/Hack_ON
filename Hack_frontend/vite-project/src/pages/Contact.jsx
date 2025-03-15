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
    role: " technical support head",
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
    </div>
  );
};

export default Contact;
