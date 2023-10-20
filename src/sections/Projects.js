import React from "react";
import Card from "../components/Card";

const Projects = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-nurlan">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 gap-20">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
