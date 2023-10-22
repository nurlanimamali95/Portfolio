import React from "react";
import Header from "./sections/Header";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Work from "./sections/Work";

const App = () => {
  return (
    <div className="font-rubik text-buttery ">
      <Header />
      <About />
      <Projects />
      <Work />
    </div>
  );
};

export default App;
