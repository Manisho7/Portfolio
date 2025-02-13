// Projects Section with Centered Title and Enhanced Cards

import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Food-Order Application',
      description: 'A Food-Order website to showcase my projects and skills.',
      technologies: ['React', 'Context API', 'CSS Modules', 'CSS', 'JavaScript', 'Firebase'],
      link: 'https://manisho7.github.io/Food-Delivery/',
      github: null,
    },
    {
      title: 'Expenses Application',
      description: 'A Expenses management application with user authentication and expense categorization.',
      technologies: ['React', 'Context', 'CSS'],
      link: 'https://manisho7.github.io/React-project3/',
      github: 'https://github.com/Manisho7/React-Project3',
    },
    {
      title: 'Precision Weather Tracker',
      description: 'A task management application with user authentication and task categorization.Developed a fully functional Weather report platform with precise weather data given a place name.',
      technologies: ['HTML', 'CSS', 'Handlebars', 'ExpressJS'],
      link: null,
      github: 'https://github.com/Manisho7/Weather-web-application',
    },
    {
      title: 'Image Stitching',
      description: 'Image stitching or photo stitching is the process of combining multiple photographic images with overlapping fields of view to produce a segmented panorama or high-resolution image.',
      technologies: ['Python', 'OpenCV', 'RANSAC', 'SIFT algorithms'],
      link: null,
      github: null,
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h2 className="project-title">{project.title}</h2>
              {(project.link || project.github) && (
                <a
                  href={project.link || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-icon"
                >
                  <i
                    className={`${
                      project.link ? 'bi bi-link-45deg' : 'bi bi-github'
                    }`}
                  ></i>
                </a>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="project-technologies">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="technology">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

// Description:
// - Updated icons to use modern and professional styles (Bootstrap icons).
// - Icons are only displayed if a project link or GitHub URL exists.
// - Each card includes a title, description, and list of technologies used.
