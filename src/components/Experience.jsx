// Updated Experience Section with Client-Specific Technologies and Achievements

import React, { useEffect } from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Software Developer',
      company: 'Allstate, Texas, USA',
      duration: 'Apr 2024 - Present',
      details: [
        'Utilized AWS Lambda to optimize backend processes and improve application performance.',
        'Developed dynamic, interactive user interfaces using React.js, Redux, and React Router.',
        'Implemented security on microservices using Spring Boot Auth Server and OAuth 2 authentication.',
        'Worked extensively with Kafka, Flume, and Sqoop for data ingestion technologies.',
        'Developed APIs and REST API proxies using APIGEE Edge and integrated them with mobile notifications.',
      ],
    },
    {
      title: 'Software Developer 3',
      company: 'Wells Fargo, Texas, USA',
      duration: 'Aug 2022 - Mar 2024',
      details: [
        'Implemented multi-threaded synchronization processes with JMS queues for asynchronous requests.',
        'Developed and optimized CI/CD pipelines using Jenkins and automated deployment using Docker and Kubernetes.',
        'Built RESTful microservices using Spring Boot, Apache Kafka, and MongoDB.',
        'Developed frontend components using React.js with Redux for state management.',
        'Enhanced performance using React Hooks, React Suspense, and Lazy Loading.',
      ],
    },
    {
      title: 'Software Engineer 2',
      company: 'Charles Schwab, Southlake, Texas, USA',
      duration: 'Jun 2021 - Jul 2022',
      details: [
        'Developed RESTful microservices using Java 8 (JDK 1.8) and integrated with Oracle databases.',
        'Implemented Spring Core Annotations for Dependency Injection and developed APIs using Spring Boot.',
        'Created Angular components using Angular Materials, Services, and Directives.',
        'Developed SQL queries and PL/SQL procedures for efficient data transformation.',
        'Utilized AWS CloudFormation for microservices deployment into EC2 containers.',
      ],
    },
    {
      title: 'Senior Java Developer',
      company: 'Allica Bank, Bangalore, India',
      duration: 'Sep 2019 - Jan 2021',
      details: [
        'Developed persistence layers using Hibernate to manage and store data efficiently.',
        'Implemented dynamic UI components using Angular and Angular Router.',
        'Integrated microservices using Spring Boot and designed authentication via OAuth2.',
        'Managed messaging services with Java Message Service (JMS) and Apache Kafka.',
        'Developed database operations using Cassandra and optimized Java-based APIs.',
      ],
    },
    {
      title: 'Java Developer',
      company: 'Lowe’s India, Bangalore, India',
      duration: 'Mar 2018 - Aug 2019',
      details: [
        'Developed RESTful Web Services for client-side applications using Spring Boot.',
        'Implemented messaging services using JMS and Apache Kafka for event-driven architecture.',
        'Built reusable React components and ensured UI responsiveness with HTML, CSS, and JavaScript.',
        'Automated deployment processes using Kubernetes, Jenkins, and Terraform.',
        'Enhanced security with Spring Security and managed database interactions with SQL and Oracle.',
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
