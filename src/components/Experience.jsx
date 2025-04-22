// Updated Experience Section with Client-Specific Technologies and Achievements

import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Allstate, Texas, USA',
      duration: 'Apr 2024 - Present',
      details: [
        'Helped develop a centralized UI component library for Allstate’s design system, using React.js, TypeScript, and Material UI, reducing development time by 7% and ensuring UI consistency across insurance platforms.',
        'Migrated legacy claims processing applications to AWS Lambda and Pivotal Cloud Foundry (PCF), refactoring Spring Boot microservices to improve scalability and reduce operational overhead by 6%.',
        'Implemented AI-driven automation in the claim’s validation process, integrating GraphQL APIs and Kafka messaging to speed up fraud detection and reduce manual processing time by 8%.',
        'Automated CI/CD pipelines using Jenkins, GitLab CI/CD, and Docker, streamlining deployments to Kubernetes. Integrated Kafka for event-driven messaging, enhanced and fine-tuned backend processes with Node.js and Spring Boot for high-performance applications.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Wells Fargo, Texas, USA',
      duration: 'Aug 2022 - Mar 2024',
      details: [
        'Contributed to the integration of WCIS, HR, and CSTN data into case management systems, automating end-to-end case creation workflows through custom scripting, reduced case processing time by 8%, using Java, Spring Boot, and MongoDB, implementing multi-threaded synchronization and JMS queues, improving data processing efficiency.',
        'Automated infrastructure provisioning with Terraform and deployed microservices on Azure App Services, streamlining deployments and cutting manual configurations by over 5 hours per release through CI/CD pipelines in Jenkins.',
        'Deployed Obaas APIs to integrate automated request generation and case initiation, cutting down response time by 7% and boosting throughput rate by 9%, enhancing customer service experience.',
        'Introduced and rolled out Quick Navigation functionality on multiple web platforms, implementing Redux, React Context API, and Suspense, optimizing rendering speed and enhancing front-end interactivity, leading to a 6% faster load time.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Juntran Technologies, Hyderabad, India',
      duration: 'May 2020 - Jan 2021',
      details: [
        'Revamped the user interface for a client-facing portal using ReactJS and Redux, creating reusable components that reduced development effort by 20% across multiple product teams.',
        'Integrated RESTful APIs with PostgreSQL for dynamic data rendering in customer dashboards, improving response times and reducing data sync issues by 15%.',
        'Contributed to the migration of monolithic services to Spring Boot microservices, improving deployment scalability and reducing post-release bugs by 25%.',
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const items = document.querySelectorAll('.experience-item');
      items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          item.classList.add('visible');
        } else {
          item.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on mount to check visibility
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="experience-container">
      <h1 className="experience-title">Experience</h1>
      <div className="experience-list">
        {experiences.map((exp, index) => (
          <div key={index} className="experience-item">
            <h2 className="experience-role">{exp.title}</h2>
            <h3 className="experience-company">{exp.company}</h3>
            <p className="experience-duration">{exp.duration}</p>
            <ul className="experience-details">
              {exp.details.map((detail, idx) => (
                <li key={idx}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

// Description:
// - Integrated technologies and achievements specific to each client.
// - Maintained the original workflow with smooth animations.
// - Updated responsibilities to reflect key technical implementations per company.
