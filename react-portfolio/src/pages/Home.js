import './Home.scss';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="photo-section">
        <motion.img
          src="/your-photo.jpg"
          alt="Sathwik Hegde"
          className="profile-photo"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300 }}
        />
      </div>

      <div className="text-section">
        <h1>
          Hi, I'm <span className="highlight">Sathwik Hegde</span>
        </h1>
        <h2>Data Engineer | Big Data Specialist | Cloud Enthusiast</h2>
        <p>
          I design and build scalable, high-performance data pipelines that handle 
          massive volumes of data daily. My work enables smarter business decisions 
          through reliable engineering practices and cloud-native solutions.
        </p>
        <p>
          Passionate about crafting solutions in GCP, AWS, Apache Spark, SQL, Python, and more.
          Let's harness data to transform tomorrow!
        </p>
      </div>
    </motion.div>
  );
};

export default Home;

