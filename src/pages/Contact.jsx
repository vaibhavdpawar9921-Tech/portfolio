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
      <header className="section-header">
        <h1>Contact Me</h1>
        <p>Interested in working together or just want to say hi? I'd love to hear from you!</p>
      </header>
      
      <div className="contact-grid">
        <motion.div className="card glass contact-info" variants={itemVariants}>
          <div className="contact-info-header">
            <h2>Let's build something amazing together.</h2>
            <p>Open to freelance, internships & full-time opportunities.</p>
          </div>
          
          <div className="contact-methods">
            <div className="contact-method">
              <Mail className="contact-icon" size={24} />
              <div className="contact-text">
                <strong>Email</strong>
                <a href="mailto:vaibhavdpawar9921@gmail.com">vaibhavdpawar9921@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <Linkedin className="contact-icon" size={24} />
              <div className="contact-text">
                <strong>LinkedIn</strong>
                <a href="https://www.linkedin.com/in/vaibhav-pawar-0011913b4" target="_blank" rel="noopener noreferrer">linkedin.com/in/vaibhav-pawar</a>
              </div>
            </div>
            
            <div className="contact-method">
              <MapPin className="contact-icon" size={24} />
              <div className="contact-text">
                <strong>Location</strong>
                <span>Malegaon, India</span>
              </div>
            </div>
            
            <div className="contact-method">
              <Phone className="contact-icon" size={24} />
              <div className="contact-text">
                <strong>Phone</strong>
                <a href="tel:+919699553980">+91 9699553980</a>
              </div>
            </div>
          </div>
          
          <div className="contact-actions">
            <a href="mailto:vaibhavdpawar9921@gmail.com" className="btn">Send Email</a>
            <a href="tel:+919699553980" className="btn btn-secondary">Call Me</a>
          </div>
        </motion.div>

        <motion.div className="card glass contact-form-card" variants={itemVariants}>
          <h3>Send a Message</h3>
          <form 
            action="https://formsubmit.co/vaibhavdpawar9921@gmail.com" 
            method="POST" 
            className="contact-form"
            onSubmit={handleSubmit}
          >
            {/* FormSubmit Configuration */}
            <input type="hidden" name="_subject" value="New submission from Portfolio!" />
            <input type="hidden" name="_captcha" value="false" />
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
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
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
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
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
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            
            <button type="submit" className="btn submit-btn">
              Submit Message
            </button>
          </form>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default Contact;
