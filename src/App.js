import React, { useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import { motion } from 'framer-motion';
import { Element, scroller } from 'react-scroll';

const App = () => {
  useEffect(() => {
    // Remove hash from URL to prevent remembering the last position
    window.history.scrollRestoration = "manual";
    window.history.replaceState(null, null, " ");

    // Scroll to the "hero" section after the page loads
    setTimeout(() => {
      scroller.scrollTo("hero", {
        duration: 500,
        smooth: "easeInOutQuad",
      });
    }, 100); // Short delay ensures DOM is fully loaded before scrolling
  }, []);

  return (
    <motion.div
      className="app-container"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
    >
      <Navbar />
      <Element name="hero">
        <Hero />
      </Element>
      <Element name="about">
        <About />
      </Element>
      <Element name="education">
        <Education />
      </Element>
      <Element name="experience">
        <Experience />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
    </motion.div>
  );
};

export default App;
