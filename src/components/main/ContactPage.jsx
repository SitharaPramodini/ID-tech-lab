import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideInFromTop, slideInFromLeft } from "../../../utils/motion";
import PuzzleBackdrop from "../sub/PuzzleBackdrop";
import PuzzlePiece from "../sub/PuzzlePiece";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const stepsRef = useRef(null);
  const socialRef = useRef(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const contactInfo = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us an email about inquiries and project discussions.",
      value: "hello@idtechlabs.dev",
      href: "mailto:hello@idtechlabs.dev"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak with us about your software development needs.",
      value: "+1 437-673-0424",
      href: "tel:+14376730424"
    },
    {
      icon: "🗓️",
      title: "Book a Consultation",
      description: "Schedule a meeting with our team to discuss your project and explore the right solutions for your business.",
      value: "Request a meeting time",
      href: "mailto:hello@idtechlabs.dev?subject=Consultation%20Request"
    }
  ];

  const nextSteps = [
    {
      step: "01",
      title: "We read what you sent",
      detail: "Your message goes straight to the founders, not a ticket queue."
    },
    {
      step: "02",
      title: "A short call",
      detail: "Half an hour to understand the problem, the deadline and the budget."
    },
    {
      step: "03",
      title: "A written proposal",
      detail: "Scope, timeline, cost and who builds it. No obligation to go ahead."
    }
  ];

  const serviceOptions = [
    "Custom Software Development",
    "UI/UX Design",
    "Website Development",
    "Cloud & DevOps",
    "Something else"
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#", color: "from-blue-500 to-blue-600" },
    { name: "Twitter", icon: "🐦", url: "#", color: "from-sky-400 to-sky-500" },
    { name: "GitHub", icon: "🐙", url: "#", color: "from-gray-600 to-gray-700" },
    { name: "Instagram", icon: "📷", url: "#", color: "from-pink-500 to-brand-500" }
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

      // Form animation
      gsap.fromTo(".form-field",
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Contact channel cards
      gsap.fromTo(".contact-info-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.92
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.7,
          ease: "back.out(1.6)",
          stagger: 0.12,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // "What happens next" steps slot in one by one
      gsap.fromTo(".next-step",
        {
          x: -40,
          opacity: 0
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: stepsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Social media links
      gsap.fromTo(".social-link",
        {
          scale: 0,
          rotation: -180
        },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Floating animations
      gsap.to(".floating-contact", {
        y: -20,
        rotation: 5,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    // Simulate form submission
    setFormStatus({
      type: 'loading',
      message: 'Sending your message...'
    });

    setTimeout(() => {
      setFormStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 2000);
  };

  // Hover reveals are desktop-only: a touch device has no hover, so the content
  // stays visible via CSS instead and GSAP must not write inline opacity over it.
  const isHoverDevice = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(min-width: 1024px) and (hover: hover)").matches;

  const handleCardHover = (e, isEntering) => {
    if (!isHoverDevice()) return;

    const card = e.currentTarget;
    const icon = card.querySelector('.contact-icon');

    if (isEntering) {
      gsap.to(card, {
        y: -10,
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1.2,
        rotation: 10,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
      
      gsap.to(icon, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleSocialHover = (e, isEntering) => {
    const link = e.currentTarget;

    if (isEntering) {
      gsap.to(link, {
        scale: 1.1,
        rotation: 10,
        duration: 0.3,
        ease: "back.out(1.7)"
      });
    } else {
      gsap.to(link, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  return (
    <div ref={containerRef} id="contact" className="relative overflow-hidden bg-ink-950 min-h-screen">
      <PuzzleBackdrop floatClass="floating-contact" />

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="pt-28 sm:pt-32 lg:pt-36 px-5 sm:px-8 lg:px-20">
          
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-20">
            <div className="text-4xl sm:text-5xl lg:text-[60px] font-medium text-gray-200 mb-6">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                {" "} Us{" "}
              </span>
            </div>
            <p className="text-gray-300 text-base sm:text-xl max-w-3xl mx-auto leading-7 sm:leading-8">
              Tell us what you are building and we will tell you what it takes &mdash;
              scope, timeline and cost &mdash; before you commit to anything.
            </p>
          </div>

          {/* Ways to reach us */}
          <div ref={infoRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="contact-info-card group relative flex flex-col bg-gradient-to-br from-ink-800/70 to-ink-900/70 backdrop-blur-sm border border-brand-500/20 rounded-2xl p-6 sm:p-7 overflow-hidden transition-colors duration-300 hover:border-brand-500/60"
                onMouseEnter={(e) => handleCardHover(e, true)}
                onMouseLeave={(e) => handleCardHover(e, false)}
              >
                {/* red wash that fills in on hover */}
                <span className="absolute inset-0 bg-gradient-to-br from-brand-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <PuzzlePiece className="absolute -bottom-7 -right-7 w-28 h-28 text-brand-500/[0.06] rotate-12 pointer-events-none" />

                <div className="contact-icon relative w-14 h-14 mb-5">
                  <PuzzlePiece className="w-full h-full text-brand-600/40" />
                  <span className="absolute inset-0 flex items-center justify-center text-2xl">
                    {info.icon}
                  </span>
                </div>

                <h3 className="relative text-white font-semibold text-xl mb-2">{info.title}</h3>
                <p className="relative text-gray-400 text-sm leading-6 mb-6">{info.description}</p>

                <span className="relative mt-auto inline-flex items-center gap-2 text-brand-400 font-medium group-hover:text-brand-300 transition-colors duration-300">
                  {info.value}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </span>
              </a>
            ))}
          </div>

          <div className="puzzle-seam w-full mb-20" />

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 mb-24">

            {/* What happens after you send it */}
            <div ref={stepsRef} className="lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What happens
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                  {" "} next
                </span>
              </h2>
              <p className="text-gray-400 leading-7 mb-10">
                Every enquiry follows the same three steps, so you always know
                where things stand.
              </p>

              <div className="space-y-8">
                {nextSteps.map((item, index) => (
                  <div key={index} className="next-step relative flex gap-5">
                    {/* the pieces link into one another down the column */}
                    {index < nextSteps.length - 1 && (
                      <span className="absolute left-7 top-16 bottom-[-2rem] w-px bg-gradient-to-b from-brand-600/50 to-transparent" />
                    )}

                    <div className="relative w-14 h-14 shrink-0">
                      <PuzzlePiece className="w-full h-full text-brand-600/30" />
                      <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-brand-300">
                        {item.step}
                      </span>
                    </div>

                    <div className="pt-2">
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-gray-400 text-sm leading-6">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="lg:col-span-3">
              <div className="relative bg-gradient-to-br from-ink-800/70 to-ink-900/70 backdrop-blur-sm border border-brand-500/20 rounded-2xl p-5 sm:p-8 overflow-hidden">
                <PuzzlePiece className="absolute -top-8 -right-8 w-32 h-32 text-brand-500/[0.05] -rotate-12 pointer-events-none" />

                <h2 className="relative text-2xl sm:text-3xl font-bold text-white mb-2">
                  Tell us about the
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                    {" "} project
                  </span>
                </h2>
                <p className="relative text-gray-400 text-sm mb-8">
                  The more you can tell us up front, the more useful our first reply will be.
                </p>

                <form onSubmit={handleSubmit} className="relative space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    
                    <div className="form-field">
                      <label className="block text-white font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label className="block text-white font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>

                    <div className="form-field">
                      <label className="block text-white font-medium mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label className="block text-white font-medium mb-2">What do you need?</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700 rounded-lg text-white focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-ink-900/60 border border-ink-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/20 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project, requirements, timeline, and any specific details..."
                      required
                    ></textarea>
                  </div>

                  {formStatus.message && (
                    <div className={`p-4 rounded-lg ${
                      formStatus.type === 'success' ? 'bg-green-500/20 border border-green-500/30 text-green-300' :
                      formStatus.type === 'error' ? 'bg-red-500/20 border border-red-500/30 text-red-300' :
                      'bg-blue-500/20 border border-blue-500/30 text-blue-300'
                    }`}>
                      {formStatus.message}
                    </div>
                  )}

                  <div className="form-field">
                    <button
                      type="submit"
                      disabled={formStatus.type === 'loading'}
                      className="w-full py-4 bg-gradient-to-r from-brand-500 to-brand-700 text-white font-semibold rounded-lg hover:from-brand-600 hover:to-brand-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

          </div>

          {/* Social Media */}
          {/* <div ref={socialRef} className="text-center pb-24">
            <h2 className="text-3xl font-bold text-white mb-8">
              Follow
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
                {" "} Us
              </span>
            </h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className={`social-link w-16 h-16 bg-gradient-to-br ${social.color} rounded-full flex items-center justify-center text-2xl text-white cursor-pointer`}
                  onMouseEnter={(e) => handleSocialHover(e, true)}
                  onMouseLeave={(e) => handleSocialHover(e, false)}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;