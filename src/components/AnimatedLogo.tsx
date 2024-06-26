import React from "react";
import { motion as m, Variants } from "framer-motion";

const svgVariants: Variants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};
const pathVariants: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    pathSpacing: 0,
    pathOffset: 0,
    fillOpacity: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    pathSpacing: 1,
    pathOffset: 1,
    fillOpacity: 1,
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export default function AnimatedLogo() {
  return (
    <m.svg
      width="40"
      height="40"
      viewBox="0 0 58 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      drag
      dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
      dragElastic={0.5}
    >
      <m.path
        variants={pathVariants}
        d="M1.56 34C1.208 34 0.92 33.888 0.696 33.664C0.472 33.44 0.36 33.152 0.36 32.8V1.6C0.36 1.248 0.472 0.959998 0.696 0.735999C0.92 0.511998 1.208 0.399998 1.56 0.399998H6.648C7.192 0.399998 7.576 0.527998 7.8 0.783998C8.056 1.008 8.216 1.184 8.28 1.312L19.992 19.792V1.6C19.992 1.248 20.104 0.959998 20.328 0.735999C20.552 0.511998 20.84 0.399998 21.192 0.399998H26.952C27.304 0.399998 27.592 0.511998 27.816 0.735999C28.04 0.959998 28.152 1.248 28.152 1.6V32.8C28.152 33.12 28.04 33.408 27.816 33.664C27.592 33.888 27.304 34 26.952 34H21.816C21.304 34 20.92 33.872 20.664 33.616C20.44 33.36 20.296 33.184 20.232 33.088L8.52 15.328V32.8C8.52 33.152 8.408 33.44 8.184 33.664C7.96 33.888 7.672 34 7.32 34H1.56ZM36.06 34C35.708 34 35.42 33.888 35.196 33.664C34.972 33.44 34.86 33.152 34.86 32.8V1.6C34.86 1.248 34.972 0.959998 35.196 0.735999C35.42 0.511998 35.708 0.399998 36.06 0.399998H42.492C42.844 0.399998 43.132 0.511998 43.356 0.735999C43.58 0.959998 43.692 1.248 43.692 1.6V32.8C43.692 33.152 43.58 33.44 43.356 33.664C43.132 33.888 42.844 34 42.492 34H36.06ZM50.7139 34C50.3619 34 50.0739 33.888 49.8499 33.664C49.6259 33.44 49.5139 33.152 49.5139 32.8V26.704C49.5139 26.384 49.6259 26.112 49.8499 25.888C50.0739 25.632 50.3619 25.504 50.7139 25.504H56.7619C57.1139 25.504 57.4019 25.632 57.6259 25.888C57.8819 26.112 58.0099 26.384 58.0099 26.704V32.8C58.0099 33.152 57.8819 33.44 57.6259 33.664C57.4019 33.888 57.1139 34 56.7619 34H50.7139Z"
        stroke="#00df9a"
        strokeWidth="4"
        fill="#E5FDDB"
      />
    </m.svg>
  );
}
