import React from 'react';
import { motion } from 'framer-motion';
import './Home.scss';
import profileImage from '../assets/images/your-photo.jpg';
import headerIcon from '../assets/images/Logo.png';

const Home = () => {
  return (
    <motion.div 
      className="home-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="home-header">
        <img src={headerIcon} alt="Header Icon" className="header-icon" />
      </div>

      <motion.div 
        className="photo-section"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={profileImage}
          alt="Sathwik Hegde"
          className="profile-photo"
        />
      </motion.div>

      <motion.div 
        className="text-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <h1>
          Hi, I'm <span className="highlight">Sathwik Hegde</span>
        </h1>
        <h2>Engineer | Data Enthusiast | Nature Explorer</h2>
        <p>
          I'm an engineer with a passion for solving problems💡 and building reliable systems🛠️. 
          Yeah, so basically, I like to keep things in business🧮 really simple and practical, you know? 
          Just stick to the basic principles💪 that actually work. For me, it's all about having a plan📝 and just doing things reliably🤝. 
          Consistency is huge – that's what really keeps everything running like clockwork⏱.
        </p>
        <p>
          Outside of work, you'll often find me on the soccer field⚽, hiking up a scenic trail⛰️, or
          enjoying the slopes while skiing⛷️, or soaking up the sun☀️ on a beach🏝️. These activities keep me energized and balanced, helping
          me bring focus and clarity to my work.
        </p>
        <div className="home-buttons">
          <a
            href="/resume.pdf"
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            href="mailto:sathwikhegde14@gmail.com"
            className="btn hire-btn"
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
