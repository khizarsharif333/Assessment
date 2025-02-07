
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import Contact from "./components/Contact";
// import Users from "./components/Users";
import Footer from "./components/Footer";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Contact />
      {/* <Users /> */}
      <Footer />
    </>
  );
}

export default App;