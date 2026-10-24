import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideInFromTop, slideInFromLeft } from "../../../utils/motion";
import PuzzleBackdrop from "../sub/PuzzleBackdrop";
import PuzzlePiece from "../sub/PuzzlePiece";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);

  const teamMembers = [
    {
      name: "Iroshan Us Liyanage",
      role: "Founder & CEO",
      image: "iro.jpg",
      description: "As Founder & CEO, Iroshan focuses on building our company's vision, driving business growth, and delivering innovative technology solutions. With a background in networking and business management, Iroshan combines technical expertise with business strategy to create meaningful value for our clients.",
      skills: ["Leadership", "Networking", "Business Strategy", "Growth"],
      delay: 0.5
    },
    {
      name: "Dasuni Wickramasinghe",
      role: "Co-Founder & Head of Engineering",
      image: "dasu.jpg",
      description: "As Co-Founder & Head of Engineering, Dasuni leads the company's technology vision across software development, cloud computing, and AI-powered solutions, with a focus on building scalable, reliable software that solves real-world problems and drives business growth.",
      skills: ["Software Engineering", "Cloud", "AI Solutions", "Architecture"],
      delay: 0.7
    },
    {
      name: "Sithara Pramodini",
      role: "Lead Full-Stack Developer",
      image: "sithara.jpeg",
      description: "As Lead Full-Stack Developer, Sithara builds applications end to end — from clean, responsive interfaces to the APIs and data layers behind them — turning product ideas into polished, production-ready software that teams can rely on.",
      skills: ["React", "Node.js", "UI/UX", "APIs"],
      delay: 0.9
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(headerRef.current, 
        { 
          y: 100, 
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Description animation
      gsap.fromTo(descriptionRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Cards staggered animation
      gsap.fromTo(".team-card",
        {
          y: 100,
          opacity: 0,
          rotationY: -15,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          rotationY: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Stats counter animation
      gsap.fromTo(".stat-number",
        {
          textContent: 0,
          opacity: 0
        },
        {
          textContent: (i, target) => target.getAttribute("data-value"),
          opacity: 1,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          stagger: 0.1,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Buttons animation
      gsap.fromTo(".cta-button",
        {
          y: 30,
          opacity: 0,
          scale: 0.9
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover reveals are desktop-only: a touch device has no hover, so the content
  // stays visible via CSS instead and GSAP must not write inline opacity over it.
  const isHoverDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;

  const handleCardHover = (e, isEntering) => {
    if (!isHoverDevice()) return;

    const card = e.currentTarget;
    const image = card.querySelector('.member-image');
    const content = card.querySelector('.member-content');
    const skills = card.querySelector('.member-skills');
    const overlay = card.querySelector('.card-overlay');

    if (isEntering) {
      gsap.to(card, {
        y: -10,
        scale: 1.05,
        rotationY: 5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(image, {
        scale: 1.1,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3
      });

      gsap.fromTo(skills, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, delay: 0.1 }
      );
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotationY: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(image, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3
      });

      gsap.to(skills, {
        y: 20,
        opacity: 0,
        duration: 0.2
      });
    }
  };

  return (
    <div ref={containerRef} id="about" className="relative overflow-hidden">
      <PuzzleBackdrop floatClass="floating-element" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="pt-28 sm:pt-32 lg:pt-36 flex flex-col relative items-center justify-start min-h-screen w-full h-full px-5 sm:px-8 lg:px-20">
          
          {/* Header Section */}
          <div ref={headerRef} className="w-full text-center">
            <div className="text-4xl sm:text-5xl lg:text-[60px] font-medium text-gray-200 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                {" "} Our Company{" "}
              </span>
            </div>
          </div>
          
          <div ref={descriptionRef} className="text-white text-base sm:text-lg leading-7 sm:leading-8 max-w-4xl mx-auto mb-12 text-center">
            We are an innovative IT company specializing in custom software development, 
            web applications, and digital solutions. Our mission is to transform businesses 
            through cutting-edge technology and exceptional user experiences. From concept 
            to deployment, we deliver scalable, robust software systems that drive growth 
            and efficiency.
          </div>

          {/* Team Members Section */}
          <div ref={cardsRef} className="w-full max-w-5xl mx-auto sm:px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-20">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-brand-500/20 rounded-xl p-5 cursor-pointer overflow-hidden"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                {/* Card overlay */}
                <div className="card-overlay absolute inset-0 bg-gradient-to-br from-brand-500/10 to-brand-700/10 opacity-0 pointer-events-none"></div>
                <PuzzlePiece className="absolute -bottom-4 -right-4 w-20 h-20 text-brand-500/[0.07] rotate-12 pointer-events-none" />
                
                <div className="member-content flex flex-col items-center text-center relative z-10">
                  <div className="w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-brand-500/40">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder-avatar.png";
                      }}
                    />
                  </div>
                  
                  <h3 className="text-base font-semibold text-white mb-1">
                    {member.name}
                  </h3>

                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600 text-sm font-medium mb-3">
                    {member.role}
                  </div>

                  <p className="text-gray-300 text-[13px] leading-5 mb-4">
                    {member.description}
                  </p>

                  {/* Skills tags */}
                  <div className="member-skills opacity-100 lg:opacity-0 flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2.5 py-0.5 bg-gradient-to-r from-brand-500/20 to-brand-700/20 text-white text-[11px] rounded-full border border-brand-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="puzzle-seam w-full max-w-3xl mb-14" />

          {/* Call to Action */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto px-4 sm:px-0">
            <a
              className="cta-button py-3 px-8 sm:px-12 bg-gradient-to-r from-brand-500 to-brand-700 text-center text-white cursor-pointer rounded-lg hover:from-brand-600 hover:to-brand-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25"
              href="#contact"
            >
              Get In Touch
            </a>
            
            <a
              className="cta-button py-3 px-8 sm:px-12 border border-brand-500/50 text-center text-white cursor-pointer rounded-lg hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-brand-700/25"
              href="#services"
            >
              View Our Work
            </a>
          </div>

          {/* Company Stats */}
          <div ref={statsRef} className="w-full grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl">
            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700" data-value="18">
                0
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Projects Completed</div>
            </div>

            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700" data-value="5">
                0
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
            </div>

            <div className="text-center">
              <div className="stat-number text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700" data-value="10">
                0
              </div>
              <div className="text-gray-400 text-xs sm:text-sm">Happy Clients</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;