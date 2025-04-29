import React, { useState } from "react";
import "./navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <a href="#home">Portfolio</a>
        </div>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setIsMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>
            About
          </a>
          <a href="#services" onClick={() => setIsMenuOpen(false)}>
            Services
          </a>
          <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </a>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
