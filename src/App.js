import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <div className="md:font-rubik text-buttery ">
      <Header />
      <About />
      <Projects />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
