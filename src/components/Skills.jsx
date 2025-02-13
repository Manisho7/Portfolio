// Updated Skills Section with Additional Technologies

import React from 'react';
import './Skills.css';

const skillsData = [
  {
    icon: 'fas fa-code',
    title: 'Web Development',
    description: 'Building responsive and dynamic applications using React.js, Angular, and Node.js.',
  },
  {
    icon: 'fas fa-database',
    title: 'Database Management',
    description: 'Experience with MySQL, MongoDB, Oracle, and Cassandra, using Hibernate ORM.',
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud & DevOps',
    description: 'Hands-on experience with AWS, PCF, Kubernetes, Docker, and Terraform.',
  },
  {
    icon: 'fas fa-cogs',
    title: 'Microservices & APIs',
    description: 'Developing microservices using Spring Boot and integrating RESTful APIs with Apigee.',
  },
  {
    icon: 'fas fa-envelope',
    title: 'Messaging & Event-Driven Architecture',
    description: 'Working with Kafka, JMS queues, and RabbitMQ for asynchronous messaging.',
  },
  {
    icon: 'fas fa-lock',
    title: 'Security & Authentication',
    description: 'Implemented OAuth2, JWT authentication, and Spring Security.',
  },
  {
    icon: 'fas fa-laptop-code',
    title: 'Containerization & CI/CD',
    description: 'Experience with Docker, Kubernetes, Jenkins, and automated deployment pipelines.',
  },
  {
    icon: 'fas fa-project-diagram',
    title: 'Project Management',
    description: 'Agile methodologies, Scrum, and tools like JIRA for project tracking.',
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <i className={skill.icon + ' skill-icon'}></i>
            <h3 className="skill-title">{skill.title}</h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

// Description:
// - Includes additional technical skills from Experience section.
// - Organized for clarity, keeping UI clean and professional.
