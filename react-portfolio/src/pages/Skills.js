import React, { useEffect, useRef } from 'react';
import './Skills.scss';

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
            textHeight: 32,
            outlineMethod: 'colour',
            outlineColour: '#ffd700',
            reverse: true,
            depth: 0.8,
            maxSpeed: 0.05,
            weight: true,
            weightFrom: 'data-weight',
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

  return (
    <div className="skills-wrapper">
      <div className="skills-info">
        <h1>My Skills</h1>
        <p>
          With a strong background in data engineering, I have designed scalable pipelines,
          optimized cloud-based architectures, and contributed to intelligent decision-making
          systems using tools like Airflow, BigQuery, AWS, GCP, Docker, and more. I focus on
          turning complex data into streamlined, actionable insights that fuel business growth.
        </p>
      </div>
      <div className="canvas-container">
        <canvas width="900" height="900" id="myCanvas" ref={canvasRef}>
          <p>Anything in here will be replaced on browsers that support the canvas element</p>
        </canvas>
        <div id="tag-list" ref={listRef} style={{ display: 'none' }}>
          <ul>
            {[
              'Python', 'SQL', 'Airflow', 'Spark', 'AWS',
              'Docker', 'BigQuery', 'Terraform', 'Kafka', 'MongoDB',
              'PostgreSQL', 'NumPy', 'Pandas', 'Matplotlib', 'Seaborn',
              'Git', 'Linux', 'JavaScript', 'HTML5', 'CSS3'
            ].map((skill, index) => (
              <li key={index}><a href="#" data-weight="{Math.random() * 5 + 1}">{skill}</a></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
