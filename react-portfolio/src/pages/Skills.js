import React, { useEffect, useRef } from 'react';
import './Skills.scss';
import { FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const canvasRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    loadScript('https://www.goat1000.com/tagcanvas.min.js').then(() => {
      if (window.TagCanvas) {
        try {
          window.TagCanvas.Start('myCanvas', 'tag-list', {
            textColour: '#30B0CA',
            textHeight: 42,
            outlineMethod: 'colour',
            outlineColour: '#ffd700',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            weight: false,
            initial: [0.1, -0.1],
            dragControl: true,
            freezeActive: true,
            freezeDecel: false,
            shuffleTags: true,
            wheelZoom: false,
            activeCursor: 'grab',
          });
        } catch (e) {
          console.error('TagCanvas error:', e);
        }
      }
    });
  }, []);

  const experiences = [
    {
      role: "Business Intelligence Engineer",
      company: "CloudData Technology LLC · Contract | Denver, Colorado, USA",
      date: "Sep 24 – Mar 25",
      description:
        "In the healthcare domain, I designed and implemented scalable ETL pipelines using AWS services to streamline claims data processing and analysis. I built optimized data models in Amazon Redshift and orchestrated workflows with AWS Step Functions, improving performance and reliability. I ensured HIPAA compliance and achieved 98% accuracy through rigorous data validation.",
      technologies: [
        "AWS Kinesis", "AWS Glue", "AWS Lambda", "Redshift", "Step Functions", "HIPAA Compliance"
      ],
    },
    {
      role: "Software Architect I",
      company: "Spectrum · Contract | Denver, Colorado, USA",
      date: "Sep 23 – May 24",
      description:
        "In the telecom domain at Charter Communications, I architected end-to-end data solutions and ETL pipelines using AWS and ETL tools to optimize HMNO operations, reduce fallouts, and streamline reporting. I developed real-time dashboards with Tableau and MicroStrategy, enabling senior management to gain actionable insights into CBRS, SIM usage, and RAN KPIs. Additionally, I applied machine learning for forecasting and used Datadog for proactive system monitoring and performance optimization.",
      technologies: [
        "AWS", "Alteryx", "Tableau", "MicroStrategy", "Datadog", "ML Forecasting"
      ],
    },
    {
      role: "Consultant – DataOps Engineer",
      company: "Capgemini India Pvt Ltd · Full-Time | Mumbai, Maharashtra, India",
      date: "Feb 17 – Jul 21",
      description:
        "At Capgemini, I led end-to-end data engineering and BI initiatives across HR analytics, wholesale, and manufacturing domains, delivering scalable ETL pipelines and data models using scripting and cloud technologies. I developed dashboards and predictive models, enhancing decision-making and operational efficiency. My work spanned data warehouse design, machine learning, RPA automation, and regulatory compliance, supporting global clients across diverse sectors.",
      technologies: [
        "Azure", "AWS", "Python", "SQL", "Power BI", "SAP BO", "RPA", "Tableau"
      ],
    },
  ];
  
  return (
    <div className="skills-wrapper">
      <h1>My Skills & Experience</h1>

      <div className="skills-content">

        <div className="canvas-container">
          <canvas width="800" height="700" id="myCanvas" ref={canvasRef}>
            <p>Your browser does not support the canvas element.</p>
          </canvas>

          <div id="tag-list" ref={listRef} style={{ display: 'none' }}>
            <ul>
              {[
                'Python', 'SQL', 'Airflow', 'Spark', 'AWS',
                'Docker', 'BigQuery', 'Terraform', 'Kafka', 'MongoDB',
                'PostgreSQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn',
                'Git', 'Linux', 'JavaScript', 'HTML5', 'CSS3'
              ].map((skill, index) => (
                <li key={index}>
                  <a href="/" onClick={(e) => e.preventDefault()} data-weight="1">
                    {skill}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        
        <div className="experience-section">
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-content">
                  <h3>{exp.role}</h3>
                  <p className="company">{exp.company}</p>
                  <p className="description">{exp.description}</p>
                  <div className="tech-tags">
                  {exp.technologies.map((tech, i) => (
                    <span className="tech-pill" key={i}>{tech}</span>
                  ))}
                </div>
                </div>
                <div className="timeline-circle">
                  <FaLaptopCode />
                  <span className="date">{exp.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
