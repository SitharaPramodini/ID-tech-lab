import React from "react";
import ProjectCard from "../sub/ProjectCard"; // Ensure this path is correct in your project structure

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Hand-on Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="project/1.png"
          title="Dermaplan Skin Clinic Management System"
          description="A full-featured clinic system for appointment booking, billing, treatment and therapist management, and inventory control. Includes a smart calendar for slot selection."
          tech="React, Tailwind CSS, REST APIs"
        />
        <ProjectCard
          src="project/2.png"
          title="Hayleys Solar AI Chat Solution"
          description="A smart AI-powered chat interface for customer queries on solar solutions. Supports real-time interaction through socket integration."
          tech="React, Tailwind CSS, Socket.io"
        />
        <ProjectCard
          src="project/3.png"
          title="Kingsbury Room Service Requesting App"
          description="A mobile-friendly app where hotel guests can scan a QR code, view menus, select services, and submit requests to hotel staff in real time."
          tech="React, Tailwind CSS, REST APIs"
        />
      </div>

      <div className="mt-12 h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="project/4.png"
          title="Singer Finance Intranet"
          description="A professional intranet homepage featuring announcements, team celebrations, new joiners, and quick links, designed for internal staff communication."
          tech="React, Tailwind CSS"
        />
        <ProjectCard
          src="project/5.png"
          title="Thambili Restaurant Website"
          description="A vibrant and fully responsive restaurant website with sections for karaoke, rooms, dishes, special deals, gallery, and animated landing visuals."
          tech="React, Tailwind CSS"
        />
        <ProjectCard
          src="project/6.png"
          title="Hayleys Solar Price Calculator"
          description="An interactive calculator that estimates solar installation costs based on user input. Integrated with backend APIs for real-time price display."
          tech="React, Tailwind CSS"
        />
      </div>

      <div className="mt-12 h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="project/7.png"
          title="Fentons Intranet"
          description="A clean and responsive internal designed for Hayleys Fentons staff. The design focuses on usability, clarity, and visual appeal for daily internal communication."
          tech="React, Tailwind CSS"
        />
        <ProjectCard
          src="project/8.png"
          title=" Fentons IT Website"
          description="Company website with animated homepage and 11 unique service pages, each featuring technology sliders, landing sections, and responsive design."
          tech="React, Tailwind CSS"
        />
        <ProjectCard
          src="project/9.png"
          title="Kingsbury Room Service Admin Panel"
          description="A full-stack web app to manage and track hotel room service requests. Includes request submission, status updates, time-based escalations, and dashboard analytics."
          tech="React, Node.js, SQL, Tailwind CSS"
        />
      </div>
    </div>
  );
};

export default Projects;
