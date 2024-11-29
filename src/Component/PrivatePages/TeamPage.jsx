import React from "react";
import img1 from "/assets/image-1.jpeg";
import img2 from "/assets/image-2.jpg";
import img3 from "/assets/image-3.jpg";
const teamMembers = [
  {
    name: "Bilal Attari",
    role: "CEO",
    description:
      "Bilal is the visionary leader who guides the company towards growth and success.",
    picture: img1,
  },
  {
    name: "Khubaib Shah",
    role: "CTO",
    description:
      "Khubaib is the mastermind behind our technology and product development.",
    picture: img2,
  },
  {
    name: "Jaffar Aman",
    role: "CFO",
    description:
      "Jaffar manages the company’s finances, ensuring we stay on track for long-term stability.",
    picture: img3,
  },
];

const TeamCard = ({ member }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <img
        src={member.picture}
        alt={`${member.name}'s picture`}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />
      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        {member.name}
      </h2>
      <p className="text-sm font-medium text-gray-600 mb-2">{member.role}</p>
      <p className="text-center text-gray-500 text-sm">{member.description}</p>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div className="bg-gray-100 py-12  flex flex-col justify-center items-center ">
      <div className="container mx-auto text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h1>
        <p className="text-lg text-gray-600">
          Our team is the backbone of our company, and each member plays a
          crucial role in our success.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamPage;
