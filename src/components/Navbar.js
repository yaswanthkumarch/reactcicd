import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h2>My Company</h2>
      </div>
      <ul className={isMobile ? "nav-links mobile" : "nav-links"}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div className="hamburger" onClick={toggleMobileMenu}>
        &#9776;
      </div>
    </nav>
  );
};

export default Navbar;
