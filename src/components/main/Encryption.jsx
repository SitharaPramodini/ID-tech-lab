import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideInFromTop, slideInFromLeft } from "../../../utils/motion";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Encryptions = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);
  const cardsRef = useRef(null);
  const statsRef = useRef(null);
  const buttonsRef = useRef(null);

  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Full-Stack Developer",
      image: "/team-member-1.png",
      description: "Visionary leader with 8+ years in software development. Specializes in scalable architecture and team management.",
      skills: ["Leadership", "Full-Stack", "Architecture", "Strategy"],
      delay: 0.5
    },
    {
      name: "Sarah Chen",
      role: "CTO & Backend Specialist",
      image: "/team-member-2.png", 
      description: "Expert in cloud infrastructure and database optimization. Passionate about building robust, secure systems.",
      skills: ["Cloud", "DevOps", "Database", "Security"],
      delay: 0.7
    },
    {
      name: "Marcus Rodriguez",
      role: "Lead Frontend Developer",
      image: "/team-member-3.png",
      description: "UI/UX enthusiast with expertise in React.js and modern web technologies. Creates stunning user experiences.",
      skills: ["React", "UI/UX", "Animation", "Mobile"],
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

  const handleCardHover = (e, isEntering) => {
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
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="floating-element absolute bottom-40 left-1/4 w-40 h-40 bg-purple-500/5 rounded-full blur-2xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="pt-36 flex flex-col relative items-center justify-start min-h-screen w-full h-full px-20">
          
          {/* Header Section */}
          <div ref={headerRef} className="w-full text-center">
            <div className="text-[60px] font-medium text-gray-200 mb-6">
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "} Our Company{" "}
              </span>
            </div>
          </div>
          
          <div ref={descriptionRef} className="text-white text-lg leading-8 max-w-4xl mx-auto mb-12 text-center">
            We are an innovative IT company specializing in custom software development, 
            web applications, and digital solutions. Our mission is to transform businesses 
            through cutting-edge technology and exceptional user experiences. From concept 
            to deployment, we deliver scalable, robust software systems that drive growth 
            and efficiency.
          </div>

          {/* Team Members Section */}
          <div ref={cardsRef} className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="team-card relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 cursor-pointer overflow-hidden"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                {/* Card overlay */}
                <div className="card-overlay absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 pointer-events-none"></div>
                
                <div className="member-content flex flex-col items-center text-center relative z-10">
                  <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-2 border-purple-500/30">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-image w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder-avatar.png";
                      }}
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-medium mb-4">
                    {member.role}
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-6 mb-4">
                    {member.description}
                  </p>

                  {/* Skills tags */}
                  <div className="member-skills opacity-0 flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-white text-xs rounded-full border border-purple-500/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div ref={buttonsRef} className="flex gap-4 mb-16">
            <a
              className="cta-button py-3 px-12 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white cursor-pointer rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
              href="#contact"
            >
              Get In Touch
            </a>
            
            <a
              className="cta-button py-3 px-12 border border-purple-500/50 text-center text-white cursor-pointer rounded-lg hover:border-purple-500 hover:bg-purple-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
              href="#portfolio"
            >
              View Our Work
            </a>
          </div>

          {/* Company Stats */}
          <div ref={statsRef} className="w-full grid grid-cols-3 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="stat-number text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" data-value="50">
                0
              </div>
              <div className="text-gray-400 text-sm">Projects Completed</div>
            </div>
            
            <div className="text-center">
              <div className="stat-number text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" data-value="3">
                0
              </div>
              <div className="text-gray-400 text-sm">Years Experience</div>
            </div>
            
            <div className="text-center">
              <div className="stat-number text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500" data-value="100">
                0
              </div>
              <div className="text-gray-400 text-sm">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Encryptions;