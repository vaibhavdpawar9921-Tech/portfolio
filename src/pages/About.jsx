import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
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
    <motion.main 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <header className="section-header">
        <h1>About Me</h1>
        <p>A passionate developer focused on building scalable systems and elegant user experiences.</p>
      </header>
      
      <motion.div className="card glass" variants={itemVariants} style={{ textAlign: 'center' }}>
        <p style={{ margin: '0 auto 1.5rem', maxWidth: '850px' }}>I hold a Diploma in Information Technology from Government Polytechnic Nashik, where I developed a strong foundation in software engineering and modern development practices.</p>

        <p style={{ margin: '0 auto 1.5rem', maxWidth: '850px' }}>I specialize in building scalable web applications designed to handle high traffic and complex requirements. My focus is on creating robust, maintainable solutions that evolve with business needs.</p>

        <p style={{ margin: '0 auto', maxWidth: '850px' }}>With expertise in Microservices architecture, I design resilient distributed systems, focusing on service communication, API gateways, and containerized deployments.</p>
      </motion.div>
      
      <section className="skills-container">
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Technical Skills</h2>
        <div className="skills-grid">
          <motion.div className="card glass skill-category" variants={itemVariants}>
            <h4>Programming Languages</h4>
            <p className="skill-text">C, C++, Java, Advanced Java (JSP, Servlets), Python, JavaScript (ES6+)</p>
          </motion.div>
          
          <motion.div className="card glass skill-category" variants={itemVariants}>
            <h4>Web Development</h4>
            <p className="skill-text">HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, REST APIs, Full Stack Development (MERN Stack)</p>
          </motion.div>


          <motion.div className="card glass skill-category" variants={itemVariants}>
            <h4>Operating Systems</h4>
            <p className="skill-text">Linux (Basic commands, file system, process management), Windows</p>
          </motion.div>

          <motion.div className="card glass skill-category" variants={itemVariants}>
            <h4>Software Engineering</h4>
            <p className="skill-text">Software Development Life Cycle (SDLC), Object-Oriented Programming (OOP), Agile Basics, Requirement Analysis, System Design Basics</p>
          </motion.div>

          <motion.div className="card glass skill-category" variants={itemVariants}>
            <h4>Software Testing</h4>
            <p className="skill-text">Manual Testing, STLC (Software Testing Life Cycle), Test Case Writing, Bug Reporting, Basic Automation Concepts</p>
          </motion.div>

          <motion.div className="card glass skill-category" variants={itemVariants}>
            <h4>Tools & Technologies</h4>
            <p className="skill-text">Git & GitHub, Docker (Basics), VS Code, Postman</p>
          </motion.div>

        </div>
      </section>

      <section className="timeline">
        <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Education & Journey</h2>
        
        <motion.div className="timeline-item" variants={itemVariants}>
          <div className="timeline-content card glass">
            <span className="timeline-date">2023</span>
            <h3>10th Grade (94.40%)</h3>
            <p>Achieved academic excellence with strong fundamentals in mathematics, logic, and science.</p>
          </div>
        </motion.div>

        <motion.div className="timeline-item" variants={itemVariants}>
          <div className="timeline-content card glass">
            <span className="timeline-date">2023 - 2026</span>
            <h3>Diploma in Information Technology (Final Year Percentage: 85%)</h3>
            <p>Government Polytechnic, Nashik</p>
            <p>Focused on software engineering principles, full stack development, backend systems, and modern web technologies.</p>
          </div>
        </motion.div>

        <motion.div className="timeline-item" variants={itemVariants}>
          <div className="timeline-content card glass">
            <span className="timeline-date">6 Months</span>
            <h3>Full Stack Developer & AI Engineer Intern</h3>
            <p>ESTPL Engeniuspark Technologies Pvt. Ltd., Nashik</p>
            <p>Hands-on experience in full-stack development and AI integration for real-world applications.</p>
          </div>
        </motion.div>
      </section>
      
    </motion.main>
  );
};

export default About;
