import React from "react";
import "./index.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
import ContactPage from "./components/main/ContactPage";
import About from "./components/main/About";
import Projects from "./components/main/Projects";
import ServicesPage from "./components/main/ServicesPage";


function App() {
  return (
    <div className="bg-[#030014] overflow-x-hidden font-inter">
      {/* <StarsCanvas /> */}
      <Navbar />
      
      {/* Replace with your routing or content */}
      <main>
      <Hero />
      <About />
      <ServicesPage />
      <ContactPage />
      
      {/* <Projects /> */}
        {/* Example: <Routes> ... </Routes> or <Home /> */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
