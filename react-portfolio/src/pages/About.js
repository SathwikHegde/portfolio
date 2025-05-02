import './About.scss';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h1>About Me</h1>

      <p className="about-text">
        I'm a <span className="highlight">Data Engineer</span> with a strong foundation in 
        <span className="highlight"> data engineering</span>, 
        <span className="highlight"> business intelligence</span>, 
        <span className="highlight"> cloud architecture</span>, and 
        <span className="highlight"> data science</span>. I specialize in building scalable, high-performance 
        <span className="highlight"> data pipelines</span> and 
        <span className="highlight"> cloud-based solutions</span> that transform raw data into actionable insights.
      </p>

      <p className="about-text">
        With hands-on experience in 
        <span className="highlight"> AWS</span>, 
        <span className="highlight"> GCP</span>, 
        <span className="highlight"> Apache Spark</span>, 
        <span className="highlight"> Python</span>, and 
        <span className="highlight"> SQL</span>, I’ve developed and optimized 
        <span className="highlight"> ETL processes</span>, modernized 
        <span className="highlight"> data warehouses</span>, and enabled 
        <span className="highlight"> real-time analytics</span> to support strategic business decisions. 
        My work bridges engineering and analytics — from backend data architecture to impactful dashboards and predictive modeling.
      </p>

      <p className="about-text">
        I also bring expertise in 
        <span className="highlight"> Business Intelligence</span>, leveraging tools like 
        <span className="highlight"> Tableau</span> and 
        <span className="highlight"> Power BI</span> to create intuitive 
        <span className="highlight"> visualizations</span> and empower teams with data they can trust. 
        I'm passionate about 
        <span className="highlight"> collaborating across disciplines</span>, 
        <span className="highlight"> mentoring junior engineers</span>, and driving 
        <span className="highlight"> data strategies</span> that deliver measurable value.
      </p>

      <p className="about-text">
        Whether your organization needs to 
        <span className="highlight"> scale its data infrastructure</span>, 
        <span className="highlight"> improve data quality</span>, or 
        <span className="highlight"> gain deeper insights</span> through analytics, 
        I bring the experience and mindset to make it happen.
      </p>

      <p className="quote">
        "Believe you can, and you're halfway there." – Theodore Roosevelt
      </p>
    </motion.div>
  );
};

export default About;
