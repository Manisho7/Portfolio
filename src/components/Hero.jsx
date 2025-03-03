import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-title">Manish Yegurla</h1>
        <p className="hero-subtitle">Software Developer</p>
        
        <div className="hero-icons">
          <a href="https://github.com/Manisho7" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/manish-yegurla-429286206/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://leetcode.com/u/manish_yegurla/" target="_blank" rel="noopener noreferrer" aria-label="LeetCode">
            <i className="fas fa-code"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
