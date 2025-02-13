// Navbar Component with Section Tracking, Smooth Scrolling & Clean URL Updates
import React, { useEffect, useState } from "react";
import { scroller } from "react-scroll";
import { useLocation, useNavigate } from "react-router-dom"; // Use router for proper URL management
import "./Navbar.css";

const Navbar = () => {
  // const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get all sections dynamically
    const navbarContainer = document.querySelector(".navbar-container");
    let currentSibling = navbarContainer.nextElementSibling;
    let sectionList = [];

    while (currentSibling) {
      sectionList.push(currentSibling);
      currentSibling = currentSibling.nextElementSibling;
    }

    // Define meaningful section names
    const sectionIds = [
      "home",
      "about",
      "education",
      "experience",
      "skills",
      "projects",
      "contact",
    ];

    sectionList.forEach((section, index) => {
      section.id = sectionIds[index]; // Assign meaningful ID
    });

    // setSections(sectionList);

    // Scroll event listener to update active section
    const updateActiveLink = () => {
      const scrollPosition = window.scrollY;
      let activeIndex = 0;

      sectionList.forEach((section, i) => {
        if (scrollPosition >= section.offsetTop - 200) {
          activeIndex = i;
        }
      });

      setActiveSection(sectionIds[activeIndex]);

      // Prevent redundant URL updates
      const newUrl = `/Portfolio/${sectionIds[activeIndex]}`;
      if (window.location.pathname !== newUrl) {
        window.history.replaceState(null, null, newUrl);
      }
    };

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("load", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("load", updateActiveLink);
    };
  }, [navigate, location]);

  // Navbar sections with icons
  const navItems = [
    { name: "Home", id: "home", icon: "fas fa-home" },
    { name: "About", id: "about", icon: "fas fa-user" },
    { name: "Education", id: "education", icon: "fas fa-graduation-cap" },
    { name: "Experience", id: "experience", icon: "fas fa-briefcase" },
    { name: "Skills", id: "skills", icon: "fas fa-tools" },
    { name: "Projects", id: "projects", icon: "fas fa-folder-open" },
    { name: "Contact", id: "contact", icon: "fas fa-envelope" },
  ];

  // Handle smooth scrolling and URL update
  const handleScrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 500,
      smooth: "easeInOutQuad",
    });

    // Update URL properly
    const newUrl = `/Portfolio/${sectionId}`;
    window.history.replaceState(null, null, newUrl);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">MY</div>
        <div className="navbar-links">
          {navItems.map((item, index) => (
            <span
              key={index}
              className={`nav-link ${
                activeSection === item.id ? "active" : ""
              }`}
              onClick={() => handleScrollToSection(item.id)}
            >
              <i className={item.icon}></i> {item.name}
            </span>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
