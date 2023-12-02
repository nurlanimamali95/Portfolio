import React from "react";
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
  return (
    <section
      id="skills"
      className="w-full py-[10rem] bg-buttery px-4 mb-28 scroll-mt-28 text-center sm:mb-40 flex flex-col justify-center items-center h-screen"
    >
      <div>
        <h1 className="text-4xl font-bold mb-20 text-nurlan">My Skills</h1>
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
        ))}
      </ul>
    </section>
  );
};

export default Skills;
