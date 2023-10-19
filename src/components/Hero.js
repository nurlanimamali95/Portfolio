import React from "react";
import Typed from "react-typed";
import Button from "../components/Button";

const Hero = () => {
  return (
    <div className="text-buttery">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="font-bold p-2 uppercase"></p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-medium md:py-6">
          Welcome to My Portfolio I'm Nurlan Imamali, a Web Developer
        </h1>
        <div className="flex justify-center items-center md:text-3xl sm:text-2xl text-xl m-5">
          <p>Creating Websites with</p>
          <Typed
            className="pl-2 font-light "
            strings={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express",
              "MongoDB",
              "Tailwind",
            ]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <Button title="Say Hello" />
      </div>
    </div>
  );
};

export default Hero;
