import React from 'react';
import './Projects.scss';

const ProjectCard = ({ title, description, github, tech }) => (
  <div className="project-card">
    <h3>
      <a href={github} target="_blank" rel="noopener noreferrer">
        {title}
      </a>
    </h3>
    <p>{description}</p>
    {/* <p className="tech-stack">Tech Stack: {tech}</p> */}
    <p className="tech-stack">{tech.split(',').map((t, i) => (
    <span key={i}>{t.trim()}</span>))}
</p>
  </div>
);

const Projects = () => {
  return (
    <div className="projects-wrapper">
      <h1>Featured Projects</h1>
      <div className="projects-container">
        <div className="project-column">
          <h2>Data Science</h2>
          <ProjectCard title="American Express Default Prediction🔗" description="Optimized classification models using PCA, XGBoost, SVM, and GridSearch." tech="Python, Scikit-learn, Pandas, Matplotlib" github="https://github.com/SathwikHegde/data-science-projects/tree/main/American-Express-Default-Prediction" />
          <ProjectCard title="Patient Treatment Prediction🔗" description="Built ML models to predict treatment response from patient health records." tech="Python, Logistic Regression, Random Forest, Flask" github="https://github.com/SathwikHegde/data-science-projects/tree/main/Patient-Treatment-Prediction" />
          <ProjectCard title="Employee Future Prediction🔗" description="Predicted employee churn using AutoML (H2O.ai) and advanced feature engineering." tech="H2O.ai, Pandas, PCA, XGBoost" github="https://github.com/SathwikHegde/data-science-projects/tree/main/AutoML-H20.ai" />
          <ProjectCard title="Neural Network Typeface Classification🔗" description="Trained CNNs on custom font datasets using Keras and evaluated model accuracy." tech="Keras, TensorFlow, Python" github="https://github.com/SathwikHegde/data-science-projects/tree/main/Neural-Network-Type-Classification-Typeface-MNIST" />
          <ProjectCard title="Water Quality Prediction🔗" description="Predicted water potability using SVM, Random Forests, and Gradient Boosting." tech="Python, Scikit-learn, Seaborn" github="https://github.com/SathwikHegde/data-science-projects/tree/main/Water-Quality-Prediction" />
        </div>

        <div className="project-column">
          <h2>Data Engineering</h2>
          <ProjectCard title="AsteroidWatch: Predictive Analytics for NEO Detection🔗" description="Developed end-to-end system for analyzing asteroid data, predicting hazardous events, and visualizing insights." tech="Python, MySQL, Ne04j" github="https://github.com/SathwikHegde/data-engineering-projects/tree/main/AsteroidWatch%20Predictive%20Analytics%20for%20NEO%20Detection" />
          <ProjectCard title="Dental Care Application🔗" description="Developed PHP/MySQL web system for patients and dentists with secure login." tech="PHP, MySQL, Apache" github="https://github.com/SathwikHegde/data-engineering-projects/tree/main/Dental%20Clinic%20DB%20Design" />
          <ProjectCard title="CSV Oracle Loader Automation🔗" description="Automated data transfer with row validation, renaming, and Oracle load." tech="Python, Oracle SQL, SQL*Loader" github="#" />
          <ProjectCard title="Analyzing-Software-Industry-Trends🔗" description="Analyzed software industry trends using web scraping, data warehousing, and visualization." tech="Scraping, Snowflake, Tableau" github="https://github.com/SathwikHegde/data-engineering-projects/tree/main/Analyzing-Software-Industry-Trends" />
        </div>

        <div className="project-column">
          <h2>DevOps</h2>
          <ProjectCard title="AWS Web Application🔗" description="Built a scalable Spring Boot app deployed on AWS EC2 via CI/CD and CloudFormation." tech="Java, Spring Boot, MySQL, AWS" github="https://github.com/SathwikHegde/webapp" />
          <ProjectCard title="AWS Infrastructure Automation🔗" description="Used Bash + CloudFormation to launch scalable AWS resources with cost optimization." tech="AWS, CloudFormation, Bash" github="#" />
        </div>

        <div className="project-column">
          <h2>Software Engineering</h2>
          <ProjectCard title="Expensify Expense Tracker🔗" description="CI/CD with GitHub Actions, JWT auth, MongoDB backend and MUI UI." tech="React, Node.js, MongoDB, GitHub Actions" github="https://github.com/SathwikHegde/software-engineering-projects/tree/main/Expensify%20-%20Expense%20Tracker" />
          <ProjectCard title="Orphanage Supplies Ecosystem🔗" description="Java Swing system to manage donor requests and track inventory visually." tech="Java, Swing, JFreeChart, DB04" github="#" />
          <ProjectCard title="Portfolio Website🔗" description="React-based personal portfolio with animated sections and scroll navigation." tech="React, SCSS, Framer Motion" github="https://github.com/SathwikHegde/portfolio" />
        </div>
      </div>
    </div>
  );
};

export default Projects;