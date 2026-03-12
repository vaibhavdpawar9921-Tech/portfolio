import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <strong style={{ color: 'var(--primary)' }}>Vaibhav Pawar</strong>. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
