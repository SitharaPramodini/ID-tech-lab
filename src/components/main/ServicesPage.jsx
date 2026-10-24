import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideInFromTop, slideInFromLeft } from "../../../utils/motion";
import PuzzleBackdrop from "../sub/PuzzleBackdrop";
import PuzzlePiece from "../sub/PuzzlePiece";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ServicesPage = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const ctaRef = useRef(null);

  const services = [
    { 
      name: "Custom Software Development", 
      category: "Technology", 
      description: "Tailored web and mobile app solutions for startups and enterprises.", 
      icon: "💻", 
      effectiveness: "95%",
      duration: "4-12 weeks",
      price: "From $5,000",
      features: ["Full-Stack Development", "Mobile Apps", "API Integration", "Database Design"]
    },
    { 
      name: "UI/UX Design", 
      category: "Design", 
      description: "Crafting modern, intuitive, and user-focused digital experiences.", 
      icon: "🎨", 
      effectiveness: "98%",
      duration: "2-6 weeks",
      price: "From $2,500",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    { 
      name: "Website Development", 
      category: "Web", 
      description: "Responsive, modern websites for businesses, brands, and portfolios.", 
      icon: "🌐", 
      effectiveness: "97%",
      duration: "2-8 weeks",
      price: "From $1,500",
      features: ["Responsive Design", "SEO Optimization", "Performance", "CMS Integration"]
    },
    { 
      name: "Cloud & DevOps", 
      category: "Infrastructure", 
      description: "Efficient CI/CD pipelines, scaling, and cloud infrastructure setup.", 
      duration: "3-8 weeks", 
      price: "From $3,500", 
      icon: "☁️", 
      effectiveness: "90%",
      features: ["AWS/Azure Setup", "CI/CD Pipelines", "Monitoring", "Security"]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Planning",
      description: "Understanding your vision, requirements, and project scope through detailed consultation.",
      icon: "🔍"
    },
    {
      step: "02", 
      title: "Design & Development",
      description: "Creating wireframes, designs, and developing your solution with cutting-edge technologies.",
      icon: "⚡"
    },
    {
      step: "03",
      title: "Testing & Deployment",
      description: "Rigorous testing, optimization, and seamless deployment to production environments.",
      icon: "🚀"
    },
    {
      step: "04",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and maintenance to ensure optimal performance.",
      icon: "🛠️"
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
            toggleActions: "play none none reverse"
          }
        }
      );

      // Services cards animation
      gsap.fromTo(".service-card",
        {
          y: 100,
          opacity: 0,
          rotationX: -15,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Effectiveness bars animation
      gsap.fromTo(".effectiveness-bar",
        {
          width: "0%"
        },
        {
          width: (i, target) => target.getAttribute("data-width"),
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Process steps animation
      gsap.fromTo(".process-step",
        {
          x: -100,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // CTA section animation
      gsap.fromTo(ctaRef.current,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animation for background elements
      gsap.to(".floating-service", {
        y: -15,
        rotation: 5,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Hover reveals are desktop-only: a touch device has no hover, so the content
  // stays visible via CSS instead and GSAP must not write inline opacity over it.
  const isHoverDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;

  const handleServiceHover = (e, isEntering) => {
    if (!isHoverDevice()) return;

    const card = e.currentTarget;
    const icon = card.querySelector('.service-icon');
    const features = card.querySelector('.service-features');
    const overlay = card.querySelector('.service-overlay');
    const pricing = card.querySelector('.service-pricing');

    if (isEntering) {
      gsap.to(card, {
        y: -15,
        scale: 1.02,
        rotationX: 5,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1.2,
        rotation: 10,
        duration: 0.3,
        ease: "back.out(1.7)"
      });

      gsap.to(overlay, {
        opacity: 1,
        duration: 0.3
      });

      gsap.fromTo(features, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, delay: 0.1 }
      );

      gsap.fromTo(pricing, 
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.3, delay: 0.15 }
      );
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        rotationX: 0,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });

      gsap.to(overlay, {
        opacity: 0,
        duration: 0.3
      });

      gsap.to([features, pricing], {
        y: 20,
        opacity: 0,
        duration: 0.2
      });
    }
  };

  return (
    <div ref={containerRef} id="services" className="relative overflow-hidden bg-ink-950 min-h-screen">
      <PuzzleBackdrop floatClass="floating-service" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="pt-28 sm:pt-32 lg:pt-36 px-5 sm:px-8 lg:px-20">
          
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-20">
            <div className="text-4xl sm:text-5xl lg:text-[60px] font-medium text-gray-200 mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                {" "} Services{" "}
              </span>
            </div>
            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-7 sm:leading-8">
              Transform your digital presence with our comprehensive suite of software development 
              and design services, tailored to drive your business forward.
            </p>
          </div>

          {/* Services Grid */}
          <div ref={servicesRef} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 mb-24">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-brand-500/20 rounded-2xl p-6 lg:p-8 cursor-pointer overflow-hidden group"
                onMouseEnter={(e) => handleServiceHover(e, true)}
                onMouseLeave={(e) => handleServiceHover(e, false)}
              >
                {/* Service overlay */}
                <div className="service-overlay absolute inset-0 bg-gradient-to-br from-brand-500/5 to-brand-700/5 opacity-0 pointer-events-none"></div>
                <PuzzlePiece className="absolute -top-6 -right-6 w-24 h-24 text-brand-500/[0.07] -rotate-12 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="service-icon text-4xl mb-3">{service.icon}</div>
                      <span className="px-3 py-1 bg-gradient-to-r from-brand-500/20 to-brand-700/20 text-brand-300 text-sm rounded-full border border-brand-500/30">
                        {service.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">
                        {service.effectiveness}
                      </div>
                      <div className="text-xs text-gray-400">Success Rate</div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.name}
                  </h3>

                  <p className="text-gray-300 leading-6 mb-6">
                    {service.description}
                  </p>

                  {/* Effectiveness Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-gray-400 mb-2">
                      <span>Effectiveness</span>
                      <span>{service.effectiveness}</span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                      <div 
                        className="effectiveness-bar h-2 bg-gradient-to-r from-brand-500 to-brand-700 rounded-full"
                        data-width={service.effectiveness}
                      ></div>
                    </div>
                  </div>

                  {/* Service Features (Hidden by default) */}
                  <div className="service-features opacity-100 lg:opacity-0 mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                          <PuzzlePiece className="w-3 h-3 shrink-0 text-brand-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing (Hidden by default) */}
                  {/* <div className="service-pricing opacity-0 flex justify-between items-center">
                    <div>
                      <div className="text-lg font-bold text-white">{service.price}</div>
                      <div className="text-sm text-gray-400">{service.duration}</div>
                    </div>
                    <button className="px-4 py-2 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-lg text-sm hover:from-brand-600 hover:to-brand-800 transition-all duration-300">
                      Get Quote
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div ref={processRef} className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Our Development
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                  {" "} Process
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                From concept to deployment, we follow a proven methodology to ensure your project's success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step relative">
                  <div className="relative bg-gradient-to-br from-ink-800/70 to-ink-900/70 backdrop-blur-sm border border-brand-500/20 rounded-xl p-6 pt-20 text-center overflow-hidden">
                    {/* the step number sits inside its own puzzle piece */}
                    <div className="absolute top-3 left-1/2 -translate-x-1/2 w-14 h-14">
                      <PuzzlePiece className="w-full h-full text-brand-600/30" />
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-brand-300">
                        {step.step}
                      </span>
                    </div>
                    <div className="text-3xl mb-4">{step.icon}</div>
                    <h3 className="text-white font-semibold mb-3">{step.title}</h3>
                    <p className="text-gray-300 text-sm leading-5">{step.description}</p>
                  </div>
                  
                  {index < processSteps.length - 1 && (
                    <PuzzlePiece className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-brand-600/60 -translate-y-1/2 -rotate-90" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div ref={ctaRef} className="text-center pb-24">
            <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm border border-brand-500/20 rounded-2xl p-6 sm:p-10 lg:p-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Ready to Start Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                  {" "} Project?
                </span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create something amazing together. 
                Get a free consultation and project estimate.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a href="#contact">
                <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-brand-500 to-brand-700 text-white rounded-lg font-semibold hover:from-brand-600 hover:to-brand-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-brand-500/25">
                  Start Project
                </button>
                </a>
                <a href="#contact">
                <button className="w-full sm:w-auto px-8 py-3 border border-brand-500/50 text-white rounded-lg font-semibold hover:border-brand-500 hover:bg-brand-500/10 transition-all duration-300">
                  Schedule Call
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ServicesPage;