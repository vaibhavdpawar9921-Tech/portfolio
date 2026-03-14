import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close menu when resizing to desktop
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar shadow-lg">
      <div className="nav-container">
        <NavLink to="/" className="nav-logo">
          Vaibhav Pawar
        </NavLink>

        {/* Desktop Links */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="nav-actions">
          {/* Hamburger Menu Toggle - Mobile Only */}
          <button 
            className="mobile-menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}></i>
          </button>

          {/* Theme Toggle - Visible on all screens */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <i className="fa-solid fa-sun"></i>
            ) : (
              <i className="fa-solid fa-moon"></i>
            )}
          </button>

          <div className="resume-actions desktop-only">
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                isActive ? "active resume-link" : "resume-link"
              }
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              {({ isActive }) => (
                <>
                  <span>Resume</span>
                  {isActive && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.print();
                      }} 
                      className="download-icon-btn"
                      title="Download/Print Resume"
                    >
                      <i className="fa-solid fa-download"></i>
                    </button>
                  )}
                </>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop for mobile menu */}
            <motion.div 
              className="mobile-menu-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              className="mobile-menu"
              initial={{ y: -20, opacity: 0, height: 0 }}
              animate={{ y: 0, opacity: 1, height: "auto" }}
              exit={{ y: -20, opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="mobile-nav-links">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
                <NavLink
                  to="/resume"
                  className={({ isActive }) =>
                    isActive ? "active resume-link-mobile" : "resume-link-mobile"
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Resume
                </NavLink>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
