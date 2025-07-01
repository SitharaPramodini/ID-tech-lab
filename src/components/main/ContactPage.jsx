import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { slideInFromTop, slideInFromLeft } from "../../../utils/motion";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const containerRef = useRef(null);
  const headerRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);
  const officesRef = useRef(null);
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
      primary: "idtechlabs@outlook.com",
      secondary: "idtechlabs@outlook.com",
      description: "Get in touch via email"
    },
    {
      icon: "📞",
      title: "Call Us",
      primary: "+1 (437) 673-0424",
      secondary: "+1 (905) 261-2516",
      description: "Speak with our team"
    },
    {
      icon: "📍",
      title: "Visit Us",
      primary: "123 Tech Street",
      secondary: "San Francisco, CA 94105",
      description: "Our main office"
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Tech Street, Suite 100",
      zipcode: "CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@yourcompany.com",
      hours: "Mon-Fri: 9AM-6PM PST"
    },
    {
      city: "New York",
      address: "456 Innovation Ave, Floor 25",
      zipcode: "NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@yourcompany.com",
      hours: "Mon-Fri: 9AM-6PM EST"
    },
    {
      city: "Remote",
      address: "Global Team Available",
      zipcode: "Worldwide",
      phone: "+1 (555) 555-0123",
      email: "remote@yourcompany.com",
      hours: "24/7 Support Available"
    }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: "💼", url: "#", color: "from-blue-500 to-blue-600" },
    { name: "Twitter", icon: "🐦", url: "#", color: "from-sky-400 to-sky-500" },
    { name: "GitHub", icon: "🐙", url: "#", color: "from-gray-600 to-gray-700" },
    { name: "Instagram", icon: "📷", url: "#", color: "from-pink-500 to-purple-500" }
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

      // Contact info cards
      gsap.fromTo(".contact-info-card",
        {
          x: -100,
          opacity: 0,
          rotationY: -15
        },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.15,
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Office cards
      gsap.fromTo(".office-card",
        {
          y: 100,
          opacity: 0,
          scale: 0.8
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.2,
          scrollTrigger: {
            trigger: officesRef.current,
            start: "top 80%",
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

  const handleCardHover = (e, isEntering) => {
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
    <div ref={containerRef} id="contact" className="relative overflow-hidden bg-[#030014] min-h-screen">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-contact absolute top-32 left-16 w-32 h-32 bg-purple-500/5 rounded-full blur-xl"></div>
        <div className="floating-contact absolute top-64 right-24 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl"></div>
        <div className="floating-contact absolute bottom-64 left-1/4 w-40 h-40 bg-purple-500/3 rounded-full blur-2xl"></div>
        <div className="floating-contact absolute bottom-32 right-20 w-28 h-28 bg-cyan-500/5 rounded-full blur-xl"></div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-10"
      >
        <div className="px-20">
          
          {/* Header Section */}
          <div ref={headerRef} className="text-center mb-20">
            <div className="text-[60px] font-medium text-gray-200 mb-6">
              Contact
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "} Us{" "}
              </span>
            </div>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-8">
              Ready to transform your digital presence? Let's discuss your project and 
              create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            
            {/* Contact Form */}
            <div ref={formRef}>
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Send us a 
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                    {" "} Message
                  </span>
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
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
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>


                  <div className="form-field">
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="6"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-300 resize-none"
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
                      className="w-full py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {formStatus.type === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div ref={infoRef} className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">
                Get in
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {" "} Touch
                </span>
              </h2>

              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="contact-info-card bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 cursor-pointer"
                  onMouseEnter={(e) => handleCardHover(e, true)}
                  onMouseLeave={(e) => handleCardHover(e, false)}
                >
                  <div className="flex items-center space-x-4">
                    <div className="contact-icon text-3xl">{info.icon}</div>
                    <div>
                      <h3 className="text-white font-semibold text-lg">{info.title}</h3>
                      <p className="text-gray-300">{info.primary}</p>
                      <p className="text-gray-400 text-sm">{info.secondary}</p>
                      <p className="text-purple-300 text-sm">{info.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Media */}
          {/* <div ref={socialRef} className="text-center pb-24">
            <h2 className="text-3xl font-bold text-white mb-8">
              Follow
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
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