import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleSubmit = (e) => {
    if (!validate()) {
      e.preventDefault();
    }
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
    <motion.main 
      className="container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 style={{ marginBottom: '0.5rem' }}><b>Contact Me</b></h1>
      
      <div className="contact-grid" style={{ marginTop: '3rem' }}>
        <motion.div className="card glass" variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '1rem' }}>Let's build something amazing together.</h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>Open to freelance, internships & full-time opportunities.</p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Mail style={{ color: 'var(--primary)', minWidth: '24px' }} size={24} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>Email</strong>
                <a href="mailto:vaibhavdpawar9921@gmail.com" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>vaibhavdpawar9921@gmail.com</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Linkedin style={{ color: 'var(--primary)', minWidth: '24px' }} size={24} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/vaibhav-pawar-0011913b4" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>linkedin.com/in/vaibhav-pawar</a>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <MapPin style={{ color: 'var(--primary)', minWidth: '24px' }} size={24} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>Location</strong>
                <span style={{ color: 'var(--text-muted)' }}>Malegaon, India</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Phone style={{ color: 'var(--primary)', minWidth: '24px' }} size={24} />
              <div>
                <strong style={{ display: 'block', fontSize: '1.1rem' }}>Phone</strong>
                <a href="tel:+919699553980" style={{ color: 'var(--text-muted)', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = 'var(--primary)'} onMouseOut={(e) => e.target.style.color = 'var(--text-muted)'}>+91 9699553980</a>
              </div>
            </div>
          </div>
          
          <div style={{ marginTop: 'auto', paddingTop: '1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="mailto:vaibhavdpawar9921@gmail.com" className="btn">Send Email</a>
            <a href="tel:+919699553980" className="btn btn-secondary">Call Me</a>
          </div>
        </motion.div>

        <motion.div className="card glass" variants={itemVariants}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '2rem' }}>Send a Message</h3>
          <form 
            action="https://formsubmit.co/vaibhavdpawar9921@gmail.com" 
            method="POST" 
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New submission from Portfolio!" />
            <input type="hidden" name="_captcha" value="true" />
            <input type="hidden" name="_template" value="box" />
            
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="John Doe" 
                value={formData.name}
                onChange={handleChange}
                style={{ borderColor: errors.name ? '#ef4444' : '' }}
              />
              {errors.name && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px' }}>{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="text" 
                id="email" 
                name="email" 
                placeholder="john@example.com" 
                value={formData.email}
                onChange={handleChange}
                style={{ borderColor: errors.email ? '#ef4444' : '' }}
              />
              {errors.email && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px' }}>{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                style={{ borderColor: errors.message ? '#ef4444' : '' }}
              ></textarea>
              {errors.message && <span style={{ color: '#ef4444', fontSize: '0.85rem', marginTop: '4px' }}>{errors.message}</span>}
            </div>
            
            <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem' }}>
              Submit Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Contact;
