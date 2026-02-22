import About from "./components/About";
import Coding from "./components/Coding";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import CustomCursor from "./components/CustomCursor";
import ScrollIndicator from "./components/ScrollIndicator";


import { useState, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProjects from "./components/AllProjects";

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-neutral-950 md:cursor-none min-h-screen">
        <ScrollIndicator />
        <CustomCursor />

        {/* Dynamic Background Glow */}
        <div
          className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.07), transparent 80%)`
          }}
        />

        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <Routes>
          <Route path="/" element={
            <div className="relative z-10 container mx-auto px-8 pt-16">
              <Navbar />
              <Hero />
              <About />
              <Technologies />
              <Coding />
              <Experience />
              <Projects />
              <Education />
              <Contact />
              <Footer />
            </div>
          } />

          <Route path="/projects" element={
            <div className="relative z-10">
              <AllProjects />
              <div className="container mx-auto px-8">
                <Footer />
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
