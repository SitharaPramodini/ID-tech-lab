import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      icon: RxGithubLogo,
      href: "https://github.com/yourcompany",
      label: "GitHub",
      hoverColor: "hover:text-gray-300"
    },
    {
      icon: RxLinkedinLogo,
      href: "https://linkedin.com/company/yourcompany",
      label: "LinkedIn", 
      hoverColor: "hover:text-blue-400"
    },
    {
      icon: RxTwitterLogo,
      href: "https://twitter.com/yourcompany",
      label: "Twitter",
      hoverColor: "hover:text-sky-400"
    },
    {
      icon: RxInstagramLogo,
      href: "https://instagram.com/yourcompany",
      label: "Instagram",
      hoverColor: "hover:text-pink-400"
    },
    {
      icon: FaYoutube,
      href: "https://youtube.com/@yourcompany",
      label: "YouTube",
      hoverColor: "hover:text-red-400"
    },
    {
      icon: RxDiscordLogo,
      href: "https://discord.gg/yourcompany",
      label: "Discord",
      hoverColor: "hover:text-indigo-400"
    }
  ];

  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        
        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-6 mb-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${social.hoverColor} transition-colors duration-300 transform hover:scale-110`}
                aria-label={social.label}
              >
                <IconComponent size={24} />
              </a>
            );
          })}
        </div>

        {/* Copyright */}
        <div className="text-[15px] text-center text-gray-400">
          &copy; 2025 ID-TechLabs. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;