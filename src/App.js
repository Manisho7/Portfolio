import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Element, scroller } from "react-scroll";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { motion } from "framer-motion";
import './App.css'

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If the user refreshes the page, always redirect to the base URL ("/")
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
    }

    // Short delay to ensure DOM is fully loaded before scrolling
    setTimeout(() => {
      scroller.scrollTo("home", {
        duration: 500,
        smooth: "easeInOutQuad",
      });
    }, 100);
  }, [location.pathname, navigate]);

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
      <Element name="home">
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
