// Navbar Component with Section Tracking and Icons

import React, { useEffect, useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [sections, setSections] = useState([]);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Get all sections dynamically
    const navbarContainer = document.querySelector(".navbar-container");
    const navbarLinks = Array.from(document.querySelectorAll(".nav-link"));
    let currentSibling = navbarContainer.nextElementSibling;
    let sectionList = [];

    while (currentSibling) {
      sectionList.push(currentSibling);
      currentSibling = currentSibling.nextElementSibling;
    }

    const sectionIds = sectionList.map((section, index) => {
      const id = `section-${index + 1}`;
      section.id = id;
      return id;
    });

    setSections(sectionList);

    // Assign href dynamically
    navbarLinks.forEach((link, index) => {
      link.href = `#${sectionIds[index]}`;
    });

    // Scroll event listener
    const updateActiveLink = () => {
      const scrollPosition = window.scrollY;
      let activeIndex = 0;

      sectionList.forEach((section, i) => {
        if (scrollPosition >= section.offsetTop - 200) {
          activeIndex = i;
        }
      });

      setActiveSection(sectionIds[activeIndex]);
    };

    window.addEventListener("scroll", updateActiveLink);
    window.addEventListener("load", updateActiveLink);

    return () => {
      window.removeEventListener("scroll", updateActiveLink);
      window.removeEventListener("load", updateActiveLink);
    };
  }, []);

  // Navbar sections with icons restored
  const navItems = [
    { name: "Home", icon: "fas fa-home" },
    { name: "About", icon: "fas fa-user" },
    { name: "Education", icon: "fas fa-graduation-cap" },
    { name: "Experience", icon: "fas fa-briefcase" },
    { name: "Skills", icon: "fas fa-tools" },
    { name: "Projects", icon: "fas fa-folder-open" },
    { name: "Contact", icon: "fas fa-envelope" },
  ];

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">MY</div>
        <div className="navbar-links">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#section-${index + 1}`}
              className={`nav-link ${activeSection === `section-${index + 1}` ? "active" : ""}`}
            >
              <i className={item.icon}></i> {item.name}
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
