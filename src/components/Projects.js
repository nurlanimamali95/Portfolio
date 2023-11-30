import React from "react";
import Card from "../components/Card";

const cardImages = [
  require("../assets/AlbumSpotter.png"),
  require("../assets/ArtMuseum.png"),
  require("../assets/BookYourFuture.png"),
  require("../assets/MarioQuiz (2).png"),
];

const Projects = () => {
  return (
    <div id="projects" className="w-full py-[10rem] px-4 bg-nurlan">
      <div className="text-center mb-[8em]">
        <h1 className="text-4xl font-bold">Projects</h1>
      </div>
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-20">
        {cardImages.map((image, index) => (
          <Card key={index} image={image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
