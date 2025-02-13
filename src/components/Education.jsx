// Education Section with Scroll Animation Fix and Slide-In Effects

import React, { useEffect } from 'react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Computer Science',
      institution: 'Wichita State University',
      location: 'Wichita, Kansas, USA',
      year: '2021',
      logo: '/wsu.png',
      coursework: [
        'Advanced Algorithms',
        'Distributed Systems',
        'Database Management Systems',
        'Machine Learning',
        'Cloud Computing',
      ],
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'Jawaharlal Nehru Technological University',
      location: 'Hyderabad, India',
      year: '2016',
      logo: '/jntuh.png',
      coursework: [
        'Data Structures and Algorithms',
        'Operating Systems',
        'Computer Networks',
        'Software Engineering',
        'Artificial Intelligence',
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.education-item');
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add('visible');
          item.classList.add(index % 2 === 0 ? 'slide-left' : 'slide-right');
        } else {
          item.classList.remove('visible', 'slide-left', 'slide-right');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on component mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="education-container">
      <h1 className="education-title">Education</h1>
      <div className="education-list">
        {educationData.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <div className="education-logo">
                <img src={require(`../images${edu.logo}`)} alt={`${edu.institution} logo`} />
              </div>
              <div className="education-details">
                <h2 className="degree">{edu.degree}</h2>
                <p className="institution">{edu.institution}</p>
                <p className="location">{edu.location}</p>
                <p className="year">Class of {edu.year}</p>
              </div>
            </div>
            <div className="coursework">
              <h3>Coursework:</h3>
              <div className="coursework-grid">
                {edu.coursework.map((course, idx) => (
                  <div key={idx} className="course-box">{course}</div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

// Description:
// - Added slide-in effects: items slide from the left or right alternately as they become visible.
// - Improved scroll animation logic.
