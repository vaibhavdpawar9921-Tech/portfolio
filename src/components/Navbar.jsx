import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </div>

        <div className="nav-actions" style={{ marginLeft: "auto" }}>
          <div className="resume-actions" style={{ display: 'flex', alignItems: 'center' }}>
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
                      style={{ 
                        border: 'none', 
                        background: 'transparent', 
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'inherit'
                      }}
                    >
                      <i className="fa-solid fa-download"></i>
                    </button>
                  )}
                </>
              )}
            </NavLink>
          </div>

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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
