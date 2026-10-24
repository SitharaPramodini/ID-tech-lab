import { useState } from "react";
import { Socials } from "../../index"; // Adjust this if your path differs

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="w-full h-[65px] fixed top-0 border-b border-brand-500/20 shadow-lg shadow-[#b80000]/30 bg-[#05050559] backdrop-blur-md z-50 px-4 sm:px-6 lg:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        <a href="#home" className="flex flex-row items-center shrink-0">
          <img
            src="logo-transparent.png"
            alt="IDTechLabs"
            className="w-9 sm:w-11"
          />
          <p className="ml-2 font-bold text-gray-100 tracking-tight text-sm sm:text-base">
            <span className="text-brand-500">ID</span>TechLabs
          </p>
        </a>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 border border-[#ff1a1a4d] bg-[#0a0a0a8c] px-6 lg:px-8 py-2.5 rounded-full text-gray-200">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="cursor-pointer hover:text-brand-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex flex-row gap-5">
          <a href="#contact">
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
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-brand-500/30 text-gray-100 hover:border-brand-500/60 transition-colors duration-300"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <>
                <line x1="5" y1="5" x2="19" y2="19" />
                <line x1="19" y1="5" x2="5" y2="19" />
              </>
            ) : (
              <>
                <line x1="3" y1="7" x2="21" y2="7" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="17" x2="21" y2="17" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile navigation panel */}
      <div
        id="mobile-menu"
        className={`md:hidden absolute left-0 top-[65px] w-full origin-top bg-ink-950/95 backdrop-blur-md border-b border-brand-500/20 transition-all duration-300 ${
          menuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-3 pointer-events-none"
        }`}
      >
        <div className="flex flex-col px-5 py-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="py-3 border-b border-white/5 last:border-b-0 text-gray-200 hover:text-brand-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
