import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, tagline, features, tech, github, live, isComingSoon }) => {
  if (isComingSoon) {
    return (
      <div className="card glass" style={{ 
        border: '1px dashed var(--glass-border)', 
        boxShadow: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem',
        textAlign: 'center'
      }}>
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
        <h3 style={{ marginBottom: '0.5rem' }}>Upcoming Project</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>New AI-based project coming soon</p>
      </div>
    );
  }

  return (
    <motion.div 
      className="card glass" 
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <div style={{ marginBottom: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: '700' }}>{title}</h3>
        <p style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '1rem', marginBottom: '1rem' }}>{tagline}</p>
      </div>

      <ul className="feature-list">
        {features.map((f, i) => (
          <li key={i} className="feature-item">
            <span className="feature-icon">•</span> {f}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem' }}>
        {tech.map((t, i) => (
          <span key={i} className="badge">
            {t}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
        {live && (
          <a href={live} target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Live Demo
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            GitHub
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "The Perfect Home – Property Search Platform",
      tagline: "Full-stack web application connecting home buyers with private builders.",
      features: [
        "Property search with advanced filters",
        "Role-based authentication (User / Builder / Admin)",
        "Admin dashboard for managing listings",
        "Secure REST API integration",
        "Responsive UI"
      ],
      tech: ["React.js", "Node.js", "Express.js", "MySQL"],
      live: "https://lavender-donkey-922858.hostingersite.com/Builders/index.php"
    },
    {
      title: "AI Custom GPT",
      tagline: "Custom AI chatbot built for specific use cases.",
      features: [
        "Prompt engineering for task-specific responses",
        "API integration",
        "Custom instruction configuration",
        "UI-based chat interface"
      ],
      tech: ["AI", "Prompt Engineering", "API Integration"]
    }
  ];

  return (
    <main className="container">
      <header className="section-header">
        <h1>My Projects</h1>
        <p>A collection of full-stack applications and AI-driven solutions built with scalability in mind.</p>
      </header>

      <section className="grid">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </section>

      {/* THE ENGINEERING MINDSET SECTION */}
      <section style={{ marginTop: '10rem', maxWidth: '900px', margin: '8rem auto 0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800' }}>The Engineering Mindset</h2>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '4rem', marginLeft: 'auto', marginRight: 'auto' }}>
          I build applications that are more than just functional—they are designed to <strong>scale</strong>. 
          From optimizing complex <strong>MySQL</strong> queries to crafting high-performance <strong>React</strong> interfaces, 
          I deliver maintainable code that solves real-world challenges.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', textAlign: 'left' }}>
          <div className="card glass">
            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>⚡ Scalability</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>Designing modular architectures that grow seamlessly with user demand and data complexity.</p>
          </div>
          <div className="card glass">
            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>🔒 Security</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>Implementing robust JWT authentication and secure API patterns to safeguard sensitive user data.</p>
          </div>
          <div className="card glass">
            <h4 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.25rem' }}>📱 Performance</h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>Prioritizing speed and responsiveness to ensure a fluid experience across every device and network.</p>
          </div>
        </div>
      </section>

    </main>
  );
};

export default Projects;
