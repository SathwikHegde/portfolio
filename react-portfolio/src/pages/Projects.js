import React from 'react';
import './Projects.scss';

const ProjectCard = ({ title, description, github, demo, tech }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <p className="tech-stack">Tech Stack: {tech}</p>
    <div className="project-links">
      <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href={demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
    </div>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h1>Featured Projects</h1>
      <div className="projects-container">
        <div className="project-column">
          <h2>Data Science Projects</h2>
          <ProjectCard title="American Express Default Prediction" description="Optimized classification models using PCA, XGBoost, SVM, and GridSearch." tech="Python, Scikit-learn, Pandas, Matplotlib" github="https://github.com/SathwikHegde/data-science-projects/tree/main/American-Express-Default-Prediction" demo="#" />
          <ProjectCard title="Patient Treatment Prediction" description="Built ML models to predict treatment response from patient health records." tech="Python, Logistic Regression, Random Forest, Flask" github="https://github.com/SathwikHegde/data-science-projects/tree/main/Patient-Treatment-Prediction" demo="#" />
          <ProjectCard title="Employee Future Prediction" description="Predicted employee churn using AutoML (H2O.ai) and advanced feature engineering." tech="H2O.ai, Pandas, PCA, XGBoost" github="https://github.com/SathwikHegde/data-science-projects/tree/main/AutoML-H20.ai" demo="#" />
          <ProjectCard title="Neural Network Typeface Classification" description="Trained CNNs on custom font datasets using Keras and evaluated model accuracy." tech="Keras, TensorFlow, Python" github="https://github.com/SathwikHegde/data-science-projects/tree/main/Neural-Network-Type-Classification-Typeface-MNIST" demo="#" />
          <ProjectCard title="Water Quality Prediction" description="Predicted water potability using SVM, Random Forests, and Gradient Boosting." tech="Python, Scikit-learn, Seaborn" github="https://github.com/SathwikHegde/data-science-projects/tree/main/Water-Quality-Prediction" demo="#" />
        </div>

        <div className="project-column">
          <h2>Data Engineering Projects</h2>
          <ProjectCard title="AsteroidWatch: Predictive Analytics for NEO Detection" description="Developed end-to-end system for analyzing asteroid data, predicting hazardous events, and visualizing insights." tech="Python, MySQL, Ne04j" github="https://github.com/SathwikHegde/data-engineering-projects/tree/main/AsteroidWatch%20Predictive%20Analytics%20for%20NEO%20Detection" demo="#" />
          <ProjectCard title="Dental Care Application" description="Developed PHP/MySQL web system for patients and dentists with secure login." tech="PHP, MySQL, Apache" github="https://github.com/SathwikHegde/data-engineering-projects/tree/main/Dental%20Clinic%20DB%20Design" demo="#" />
          <ProjectCard title="CSV Oracle Loader Automation" description="Automated data transfer with row validation, renaming, and Oracle load." tech="Python, Oracle SQL, SQL*Loader" github="" demo="#" />
          <ProjectCard title="Analyzing-Software-Industry-Trends" description="Analyzed software industry trends using web scraping, data warehousing, and visualization." tech="Scraping, Snowflake, Tableau" github="https://github.com/SathwikHegde/data-engineering-projects/tree/main/Analyzing-Software-Industry-Trends" demo="#" />
        </div>

        <div className="project-column">
          <h2>DevOps Projects</h2>
          <ProjectCard title="AWS Web Application" description="Built a scalable Spring Boot app deployed on AWS EC2 via CI/CD and CloudFormation." tech="Java, Spring Boot, MySQL, AWS" github="#" demo="#" />
          <ProjectCard title="AWS Infrastructure Automation" description="Used Bash + CloudFormation to launch scalable AWS resources with cost optimization." tech="AWS, CloudFormation, Bash" github="#" demo="#" />
        </div>

        <div className="project-column">
          <h2>Software Engineering Projects</h2>
          <ProjectCard title="Expensify Expense Tracker" description="CI/CD with GitHub Actions, JWT auth, MongoDB backend and MUI UI." tech="React, Node.js, MongoDB, GitHub Actions" github="#" demo="#" />
          <ProjectCard title="Orphanage Supplies Ecosystem" description="Java Swing system to manage donor requests and track inventory visually." tech="Java, Swing, JFreeChart, DB04" github="#" demo="#" />
          <ProjectCard title="Portfolio Website" description="React-based personal portfolio with animated sections and scroll navigation." tech="React, SCSS, Framer Motion" github="#" demo="#" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
