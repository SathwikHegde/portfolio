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
        I'm a <span className="highlight">Data Engineer</span> with a passion for designing
        scalable, high-performance <span className="highlight">data pipelines</span> and
        enabling predictive analytics through reliable <span className="highlight">cloud-based architectures</span>.
      </p>

      <p className="about-text">
        My experience spans across <span className="highlight">GCP</span>, <span className="highlight">AWS</span>, 
        <span className="highlight">Apache Spark</span>, <span className="highlight">SQL</span>, and <span className="highlight">Python</span>.
        I help organizations turn raw data into meaningful, actionable outcomes.
      </p>

      <p className="about-text">
        Whether it's optimizing ETL pipelines, modernizing data warehouses, or mentoring junior engineers,
        I thrive on creating systems that scale and deliver real business value.
      </p>

      <p className="quote">
        "Believe you can, and you're halfway there." – Theodore Roosevelt
      </p>
    </motion.div>
  );
};

export default About;
