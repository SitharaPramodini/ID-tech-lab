import React from "react";
// import Image from "next/image";

const ProjectCard = ({ src, title, description, tech }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] group transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25">
      {/* Shine overlay effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out z-10 pointer-events-none"></div>
      
      <img
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain transition-transform duration-300 group-hover:scale-105"
      />
      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white group-hover:text-purple-300 transition-colors duration-300">{title}</h1>
        <p className="mt-2 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{description}</p>
        <p className="mt-2 font-bold text-gray-700 group-hover:text-purple-400 transition-colors duration-300">{tech}</p>
      </div>
    </div>
  );
};

export default ProjectCard;