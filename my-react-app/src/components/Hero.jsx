import React from "react";
import "../styles/styles.css";

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="heroTitle">Empowering Businesses with IT Solutions</h1>
          <p>
            At <strong>ByteBridge Solutions</strong>, we specialize in delivering innovative
            and scalable technology solutions tailored to your business needs. With over a decade of experience,
            we help businesses leverage <strong>cloud computing, cybersecurity, AI, and automation</strong>
            to optimize operations and drive sustainable growth.
          </p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>

        <div className="hero-image">
          <img src="cover1.jpeg" alt="IT Consulting" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
