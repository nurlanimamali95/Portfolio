import React, { useEffect, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { motion } from "framer-motion";
import AnimatedScroll from "./AnimatedScroll";

const Hero = () => {
  const [startTyping, setStartTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTyping(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const [typeEffect] = useTypewriter({
    words: [
      "",
      "",
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
    typeSpeed: 150,
    deleteSpeed: 100,
    start: startTyping,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.5 } },
  };

  return (
    <div className="text-buttery select-none">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <motion.h1
          className="md:text-5xl sm:text-4xl text-3xl font-medium md:py-6"
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          Welcome to My Portfolio I'm Nurlan Imamali, a Web Developer
        </motion.h1>
        <div className="flex justify-center items-center md:text-3xl sm:text-2xl text-xl m-5">
          <motion.p variants={textVariants} initial="hidden" animate="visible">
            Creating Websites with{" "}
            <span className="text-[#00df9a]">{typeEffect}</span>
            <Cursor cursorStyle="❤️" cursorBlinking="false" />
          </motion.p>
        </div>
        <div className="mt-[3em] sm:mt-[6em] mx-auto">
          <AnimatedScroll />
        </div>
      </div>
    </div>
  );
};

export default Hero;
