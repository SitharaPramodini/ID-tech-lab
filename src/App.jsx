import React from "react";
import "./index.css";
import StarsCanvas from "./components/main/StarBackground";
import Navbar from "./components/main/Navbar";
import Footer from "./components/main/Footer";
import Hero from "./components/main/Hero";
import Skills from "./components/main/Skills";
import Encription from "./components/main/Encryption";
import Projects from "./components/main/Projects";


function App() {
  return (
    <div className="bg-[#030014] overflow-x-hidden font-inter">
      {/* <StarsCanvas /> */}
      <Navbar />
      
      {/* Replace with your routing or content */}
      <main>
      <Hero />
      <Encription />
      <Skills />
      
      <Projects />
        {/* Example: <Routes> ... </Routes> or <Home /> */}
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
