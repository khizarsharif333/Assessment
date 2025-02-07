import React, { useEffect, useState } from "react";
import "../styles/styles.css";

const Hero = () => {
  const [heroData, setHeroData] = useState({
    title: "Loading...",
    description: "Fetching data..."
  });

  useEffect(() => {
    const fetchHeroData = async () => {
     

      try {
        const response = await fetch("https://script.google.com/macros/s/AKfycbyXEYz84vgasvE4jf01wFsI-Pf5UUplz_lBl_neP1Gr50erapwjBe-g4lU65f9i8gNWmw/exec");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setHeroData(data); // ✅ Update state with API response

      } catch (error) {
        console.error("Error fetching Hero data:", error);
      }
    };

    fetchHeroData();
  }, []);

  return (
    <header id="hero" className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h1 className="heroTitle">{heroData.title}</h1>
          <p>{heroData.description}</p>
          <a href="#contact" className="btn">Get a Free Consultation</a>
        </div>

        <div className="hero-image">
          <img src="./cover1.jpeg" alt="IT Consulting" />
        </div>
      </div>
    </header>
  );
};

export default Hero;
