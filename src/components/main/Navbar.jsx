import React from "react";
import { Socials } from "../../index"; // Adjust this if your path differs
// import NavLogo from "/NavLogo.png"; // optional if you want to use logo
// import SocialIcon from "/icon.png"; // fallback or default icon if needed

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          {/* Uncomment and update if using logo */}
          {/* <img
            src={NavLogo}
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-spin"
          /> */}
          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            SITHARA
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">Home</a>
            <a href="#about-me" className="cursor-pointer">About</a>
            <a href="#skills" className="cursor-pointer">Services</a>
            <a href="#projects" className="cursor-pointer">Solutions</a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <img
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
