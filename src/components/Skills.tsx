import React from "react";
import { motion as m } from "framer-motion";

const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Shadcn/UI",
  "React",
  "Next.js",
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
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-buttery px-4 py-[8rem]  mb-28 scroll-mt-28 text-center sm:mb-40 flex flex-col items-center h-screen"
    >
      <div>
        <h1 className="text-4xl font-bold mb-20 text-nurlan ">My Skills</h1>
      </div>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 max-w-[53rem] ">
        {skillsData.map((skill, index) => (
          <m.li
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
          </m.li>
        ))}{" "}
      </ul>
    </section>
  );
}
