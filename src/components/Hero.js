import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Button from "../components/Button";

const Hero = () => {
  const [typeEffect] = useTypewriter({
    words: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind",
    ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div className="text-buttery select-none">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 uppercase"></p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-medium md:py-6">
          Welcome to My Portfolio I'm Nurlan Imamali, a Web Developer
        </h1>
        <div className="flex justify-center items-center md:text-3xl sm:text-2xl text-xl m-5">
          <p>
            Creating Websites with{" "}
            <span className="text-[#00df9a]">{typeEffect}</span>
            <Cursor cursorStyle="❤️" cursorBlinking="false" />
          </p>
        </div>
        <Button title="Say Hello" />
      </div>
    </div>
  );
};

export default Hero;
