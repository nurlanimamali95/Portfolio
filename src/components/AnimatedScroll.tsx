import React from "react";
import { motion as m, Variants } from "framer-motion";

const svgVariants: Variants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: [0, -2, 2, -2, 0],
    transition: {
      delay: 8,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

const spanVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 8,
      duration: 4,
      ease: "linear",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export default function AnimatedScroll() {
  return (
    <m.div className="flex items-center">
      <m.svg
        width="50px"
        height="50px"
        viewBox="0 0 24.00 24.00"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#2e3532"
        transform="rotate(0)"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        className="lg:mt-[-1em]"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0" />

        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
          stroke="#CCCCCC"
          strokeWidth="0.9120000000000001"
        />

        <g id="SVGRepo_iconCarrier">
          <path
            d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
            stroke="#e5fddb"
            strokeWidth="0.624"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M12 6V14"
            stroke="#e5fddb"
            strokeWidth="0.624"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
          <path
            d="M15 11L12 14L9 11"
            stroke="#e5fddb"
            strokeWidth="0.624"
            strokeLinecap="round"
            strokeLinejoin="round"
          />{" "}
        </g>
      </m.svg>
      <m.span
        className="font-hairline lg:mt-[-1em]"
        variants={spanVariants}
        initial="hidden"
        animate="visible"
      >
        Scroll Down
      </m.span>
    </m.div>
  );
}
