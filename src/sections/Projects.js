import React from "react";
import Card from "../components/Card";
import Card1 from "../assets/AlbumSpotter.png";
import Card2 from "../assets/ArtMuseum.png";
import Card3 from "../assets/BookYourFuture.png";
import Card4 from "../assets/MarioQuiz (2).png";

const Projects = () => {
  return (
    <div id="projects" className="w-full py-[10rem] px-4 bg-nurlan">
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-20">
        <Card image={Card1} />
        <Card image={Card2} />
        <Card image={Card3} />
        <Card image={Card4} />
      </div>
    </div>
  );
};

export default Projects;  
