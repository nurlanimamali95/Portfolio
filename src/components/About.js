import React, { useState, useEffect } from "react";
import Laptop from "../assets/meillustration.png";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    visible: { x: mousePosition.x - 16, y: mousePosition.y - 16, opacity: 0 },
    text: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 40,
      width: 40,
      backgroundColor: "#00df9a",
      mixBlendMode: "difference",
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.5 },
    },
  };

  const handleMouseEnter = () => {
    setShowCursor(true);
    setCursorVariant("text");
  };

  const handleMouseLeave = () => {
    setShowCursor(false);
    setCursorVariant("default");
  };

  return (
    <div
      className="bg-buttery text-nurlan w-full px-4 about-container cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-center">
        <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-[2em]">
          A little bit about me
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-1">
        <img className="w-[25em] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center pb-[5em]">
          <h3 className="text-mygreen font-medium md:text-2xl sm:text-1xl text-1xl my-4 py-2">
            Meet the Digital Wizard
          </h3>
          <p className="text-xl max-w-[28em]">
            Greetings! I'm a web developer with a passion for creating
            captivating websites and seamless user experiences. My expertise
            spans both front-end and back-end development, merging creativity
            and functionality in code. As a lifelong web explorer, I'm here to
            turn your ideas into digital realities. My faithful companion, Leo,
            a mischievous but adorable tabby cat, often perches on my desk,
            offering inspiration with his curious antics. He's an integral part
            of my coding journey, providing unwavering support and occasional
            distraction, reminding me to take breaks and appreciate the simple
            joys in life.
          </p>
        </div>
      </div>
      <motion.div
        className={`cursor ${showCursor ? "visible" : "hidden"}`}
        variants={variants}
        animate={cursorVariant}
      />
    </div>
  );
};

export default About;
