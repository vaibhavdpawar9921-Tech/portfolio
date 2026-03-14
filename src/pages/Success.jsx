import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Success = () => {
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
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.main 
      className="container flex items-center justify-center min-vh-80"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="card glass text-center p-large" variants={itemVariants}>
        <div className="success-icon-wrapper mb-medium">
          <CheckCircle size={80} color="var(--primary)" />
        </div>
        <h1 className="mb-small">Message Sent!</h1>
        <p className="mb-large">Thank you for reaching out. I'll get back to you as soon as possible.</p>
        
        <Link to="/" className="btn flex items-center gap-small">
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </motion.div>
    </motion.main>
  );
};

export default Success;
