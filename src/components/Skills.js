import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "Framer Motion",
  "Bootstrap",
  "MaterialUI",
];

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

const Skills = () => {
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
    <section
      id="skills"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full bg-buttery px-4 py-[8rem]  mb-28 scroll-mt-28 text-center sm:mb-40 flex flex-col items-center h-screen cursor-none"
    >
      <div>
        <h1 className="text-4xl font-bold mb-20 text-nurlan ">My Skills</h1>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-[53rem] ">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-nurlan border-black rounded-xl px-5 py-3 text-buttery "
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}{" "}
        <motion.div
          className={`cursor ${showCursor ? "visible" : "hidden"}`}
          variants={variants}
          animate={cursorVariant}
        />
      </ul>
    </section>
  );
};

export default Skills;
