import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className="container home-page">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1>Hi, I'm Sathwik Hegde</h1>
        <h2>Data Engineer | Data Enthusiast | Lifelong Learner</h2>
        <p>Welcome to my personal portfolio showcasing my journey in Data Engineering, Data Science, and beyond.</p>
        <a href="/Resume.pdf" download className="flat-button">Download Resume</a>
      </motion.div>
    </div>
  );
};

export default Home;
