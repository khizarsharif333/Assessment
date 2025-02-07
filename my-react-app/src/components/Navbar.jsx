import React, { useState } from "react";
// import "../styles/styles.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e, targetId) => {
    e.preventDefault();

    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 50, 
        behavior: "smooth",
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navContainer">
        <h1 className="logo">ByteBridge Solutions</h1>

        <div className="menu-toggle" onClick={toggleMenu}>
          ☰
        </div>

        <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <li><a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>About Us</a></li>
          <li><a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Services</a></li>
          <li><a href="#why-us" onClick={(e) => handleNavClick(e, "#why-us")}>Why Us</a></li>
          <li><a href="#how-it-works" onClick={(e) => handleNavClick(e, "#how-it-works")}>How It Works</a></li>
          <li><a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
