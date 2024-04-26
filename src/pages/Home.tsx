import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Skills from "../components/Skills";
import Form from "../components/Form";
import ScrollUp from "../components/ScrollToTop";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Form />
      <Footer />
      <ScrollUp />
    </div>
  );
};

export default Home;
