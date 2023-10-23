import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import Footer from "./sections/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="font-rubik text-buttery ">
      <Header />
      <About />
      <Projects />
      <Work />
      <Footer />
      <Contact />
    </div>
  );
};

export default App;
