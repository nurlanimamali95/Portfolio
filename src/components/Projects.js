import React from "react";
import Card from "../components/Card";

const projectDetails = [
  {
    image: require("../assets/AlbumSpotter.png"),
    demoUrl: "https://nurlanimamali95.github.io/AlbumSpotter/",
    sourceUrl: "https://github.com/nurlanimamali95/AlbumSpotter",
  },
  {
    image: require("../assets/ArtMuseum.png"),
    demoUrl:
      "https://a-museum-react-m6dw-my6hzwkze-nurlanimamali95.vercel.app/",
    sourceUrl: "https://github.com/nurlanimamali95/ArtMuseum",
  },
  {
    image: require("../assets/BookYourFuture.png"),
    demoUrl: "https://hyf-c43-group-1-c55b85dfa12d.herokuapp.com/login",
    sourceUrl: "https://github.com/nurlanimamali95/BookYourFuture",
  },
  {
    image: require("../assets/MarioQuiz (2).png"),
    demoUrl: "https://nurlanimamali95.github.io/SuperMarioQuiz/",
    sourceUrl: "https://github.com/nurlanimamali95/SuperMarioQuiz",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="w-full py-[8rem] px-4 bg-nurlan">
      <div className="text-center mb-[8em]">
        <h1 className="text-4xl font-bold py-2 ">Projects</h1>
      </div>
      <div className="max-w-[1500px] mx-auto grid md:grid-cols-2 gap-20">
        {projectDetails.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            demoUrl={project.demoUrl}
            sourceUrl={project.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
