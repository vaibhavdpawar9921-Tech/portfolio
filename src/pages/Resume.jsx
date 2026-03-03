import React from 'react';

const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  return (
    <main className="container">


      <div className="resume-container">
        <header className="resume-header">
          <h1>Vaibhav Pawar</h1>
          <div className="title">Full Stack Developer</div>
          <div className="resume-contact">
            <span><i className="fa-solid fa-location-dot"></i> Nashik, Maharashtra</span>
            <span><i className="fa-solid fa-phone"></i> +91 9699553980</span>
            <span><i className="fa-solid fa-envelope"></i> vaibhavdpawar9921@gmail.com</span>
            <span><i className="fa-brands fa-linkedin"></i> linkedin.com/in/vaibhav-pawar-0011913b4</span>
            <span><i className="fa-brands fa-github"></i> github.com/vaibhavdpawar9921</span>
          </div>
        </header>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p className="resume-summary">
            Motivated and results-driven Full Stack Developer pursuing a Diploma in Information Technology, with hands-on experience in building scalable and user-centric web applications using React.js, Node.js, Express.js, and MySQL. Strong foundation in frontend development, backend architecture, RESTful APIs, role-based authentication, and database management. Experienced in developing real-world projects with complete lifecycle involvement from design to deployment. Passionate about writing clean, maintainable code and continuously learning modern technologies to build efficient and performance-optimized solutions.
          </p>
        </section>

        <section className="resume-section">
          <h2>Technical Skills</h2>
          <div className="resume-skill-group">
            <strong>Programming Languages:</strong> C, C++, Java, Advanced Java (JSP, Servlets), Python, JavaScript (ES6+)
          </div>
          <div className="resume-skill-group">
            <strong>Web Development:</strong> HTML5, CSS3, JavaScript, React.js, Node.js, Express.js, REST APIs, Full Stack Development (MERN Stack)
          </div>
          <div className="resume-skill-group">
            <strong>Database:</strong> MySQL, MongoDB
          </div>
          <div className="resume-skill-group">
            <strong>Operating Systems:</strong> Linux (Basic commands, file system, process management), Windows
          </div>
          <div className="resume-skill-group">
            <strong>Software Engineering:</strong> Software Development Life Cycle (SDLC), Object-Oriented Programming (OOP), Agile Basics, Requirement Analysis, System Design Basics
          </div>
          <div className="resume-skill-group">
            <strong>Software Testing:</strong> Manual Testing, STLC (Software Testing Life Cycle), Test Case Writing, Bug Reporting, Basic Automation Concepts
          </div>
        </section>

        <section className="resume-section">
          <h2>Projects</h2>
          <div className="resume-project">
            <div className="resume-entry-header">
              <span>The Perfect Home – Property Search Platform</span>
            </div>
            <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#4b5563', marginBottom: '0.5rem' }}>
              Tech Stack: React.js, Node.js, Express.js, MySQL
            </div>
            <ul className="resume-list">
              <li>Developed a full-stack web application connecting home buyers with private builders.</li>
              <li>Implemented property search with advanced filters and responsive UI.</li>
              <li>Built role-based authentication (User / Builder / Admin) and Admin dashboard.</li>
              <li>Integrated secure REST APIs for seamless data management.</li>
            </ul>
          </div>
          
          <div className="resume-project">
            <div className="resume-entry-header">
              <span>AI Custom GPT</span>
            </div>
            <div style={{ fontStyle: 'italic', fontSize: '0.9rem', color: '#4b5563', marginBottom: '0.5rem' }}>
              Tech Stack: AI, Prompt Engineering, API Integration
            </div>
            <ul className="resume-list">
              <li>Built a custom AI chatbot for specific task-oriented use cases.</li>
              <li>Utilized prompt engineering for high-accuracy task-specific responses.</li>
              <li>Configured custom instructions and integrated with backend APIs.</li>
              <li>Designed a clean and interactive UI-based chat interface.</li>
            </ul>
          </div>

        </section>

        <section className="resume-section">
          <h2>Education</h2>
          <div className="resume-edu">
            <div className="resume-entry-header">
              <span>Diploma in Information Technology</span>
              <span className="date">2023 – 2026</span>
            </div>
            <div style={{ color: '#4b5563' }}>Government Polytechnic Nashik</div>
            <div style={{ fontWeight: 600 }}>Final Year Percentage: 85%</div>
          </div>
          
        </section>

        <section className="resume-section">
          <h2>Internship</h2>
          <div className="resume-edu">
            <div className="resume-entry-header">
              <span>Full Stack Developer & AI Engineer Intern</span>
              <span className="date">6 Months</span>
            </div>
            <div style={{ color: '#4b5563' }}>ESTPL Engeniuspark Technologies Pvt. Ltd.</div>
            <div style={{ fontStyle: 'italic', fontSize: '0.9rem' }}>Nashik, Maharashtra</div>
          </div>
        </section>

        <section className="resume-section">
          <h2>Strengths</h2>
          <ul className="resume-list">
            <li>Problem-solving mindset</li>
            <li>Quick learner</li>
            <li>Team collaboration</li>
            <li>Strong debugging skills</li>
            <li>Clean and maintainable coding practice</li>
          </ul>
        </section>

      </div>
    </main>
  );
};

export default Resume;
