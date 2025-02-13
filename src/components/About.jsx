// Updated About Section Layout with Image and Unified Background

import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <img
          src={require("../images/Profile.jpeg")}
          alt="Profile"
          className="about-photo"
        />
        <h1 className="about-title">About Me</h1>
        <p className="about-description">
        I am Manish Yegurla, a Java Full-Stack Developer with expertise in backend, frontend, and database technologies. 
        I build scalable web applications using Java, Spring Boot, and Microservices, ensuring efficient server-side logic and API integrations.

        On the frontend, I specialize in React.js and Redux, crafting dynamic and responsive user interfaces. 
        For data management, I work with MongoDB, Oracle, and SQL, optimizing performance and scalability. With AWS, Docker, and Kubernetes, I deploy and manage cloud-based applications, ensuring seamless user experiences.
        </p>
      </div>
    </div>
  );
};

export default About;

// Description:
// - Added an image to the About section for a personal touch.
// - Ensured the background color matches the rest of the website.
// - Adjusted the layout for a balanced and professional look.
