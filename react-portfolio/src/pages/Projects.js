import React from 'react';
import './Projects.scss';

const projectList = [
  {
    title: 'American Express Default Prediction',
    description: 'Predicting the probability that a customer will default on their credit card balance using anonymized financial data.',
    github: 'https://github.com/SathwikHegde/Amex-Default-Prediction'
  },
  {
    title: 'Employee Future Prediction (AutoML - H2O.ai)',
    description: 'Using H2O AutoML to predict whether employees will leave or stay based on historical HR data.',
    github: 'https://github.com/SathwikHegde/Employee-Future-Prediction'
  },
  {
    title: 'Water Quality Prediction',
    description: 'Predicting potability of water based on physicochemical properties using machine learning techniques.',
    github: 'https://github.com/SathwikHegde/Water-Quality-Prediction'
  },
  {
    title: 'CSV Automation + Oracle Loader',
    description: 'Automates CSV ingestion, file renaming, row counting, and loading into Oracle DB via SQL*Loader.',
    github: 'https://github.com/SathwikHegde/csv_data_pipeline'
  },
  {
    title: 'Dental Clinic DB Design',
    description: 'Designed relational schema, ER diagram, and seeding logic for managing appointments, staff, and patient records.',
    github: 'https://github.com/SathwikHegde/Dental-Clinic-DB-Design'
  }
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <div className="project-grid">
        {projectList.map((project, idx) => (
          <div className="project-card" key={idx}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
