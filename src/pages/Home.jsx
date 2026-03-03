import React, { useState } from 'react';
import { motion } from 'framer-motion';
import profileImg from '../assets/photo.jpg';

const Home = () => {
  const [showSocials, setShowSocials] = useState(false);

  const toggleSocials = () => {
    setShowSocials(!showSocials);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <main className="container">
      <motion.section 
        className="hero"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.img 
          src={profileImg} 
          alt="Vaibhav Pawar" 
          className="profile-img" 
          variants={itemVariants}
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        />
        <h1><span className="hero-name">Vaibhav Pawar</span></h1>
        <motion.h2 className="subtitle" variants={itemVariants}>Full Stack Developer</motion.h2>
        
        <motion.p variants={itemVariants} style={{ fontWeight: 'bold' }}>
          I am a software engineer with a passion for coding life into ideas.<br />
          I have a background in Full Stack Development and Machine Learning.
        </motion.p>

        <motion.div className={`social-links ${showSocials ? 'show' : ''}`} variants={itemVariants}>
          <a href="https://github.com/vaibhavdpawar9921" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/vaibhav-pawar-0011913b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/vaibhav_pawar.96.k?igsh=MW52MGZ5YWp2d2E5aQ==" target="_blank" rel="noopener noreferrer" className="social-link"><i className="fa-brands fa-instagram"></i></a>
          <a href="mailto:vaibhavdpawar9921@gmail.com" className="social-link"><i className="fa-solid fa-envelope"></i></a>
        </motion.div>

        <motion.div className="actions" variants={itemVariants}>
          <a href="/projects" className="btn">View Projects</a>
          <button onClick={toggleSocials} className="btn btn-secondary">
            {showSocials ? 'Hide Links' : 'Get in Touch'}
          </button>
        </motion.div>
      </motion.section>
    </main>
  );
};

export default Home;
