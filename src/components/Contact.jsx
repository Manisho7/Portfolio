// Contact Page with Email and Phone Links

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Me</h1>
      <div className="contact-content">
        {/* Left Section: Contact Details */}
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-envelope contact-icon"></i>
            <a href="mailto:manishyegurla3@gmail.com" className="contact-info">manishyegurla3@gmail.com</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone contact-icon"></i>
            <a href="tel:+13165184611" className="contact-info">+1 316-518-4611</a>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt contact-icon"></i>
            <span className="contact-info">Irving, TX, USA</span>
          </div>
        </div>
      </div>
      <div style={{ height: "50px", visibility: "hidden" }}></div>
    </div>
  );
};

export default Contact;

// Description:
// - Left section now includes email and phone links for direct interaction.
// - Right section replaced with a placeholder for simplicity.
