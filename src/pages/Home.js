import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
