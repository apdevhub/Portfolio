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
import Services from "./components/Services";
import GlobalBackground from "./components/GlobalBackground";

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
        <GlobalBackground />
        <ScrollIndicator />
        <CustomCursor />

        <Routes>
          <Route path="/" element={
            <div className="relative z-10 container mx-auto px-8 pt-16">
              <Navbar />
              <Hero />
              <About />
              <Technologies />
              <Coding />
              <Experience />
              <Services />
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
