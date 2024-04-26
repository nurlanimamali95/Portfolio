import React from "react";
import Button from "./Button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Card = (props) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div className="w-full h-500 shadow-xl flex flex-col p-4 my-4 rounded-lg ">
      <div className="inline-block h-80 mx-auto mt-[-3rem] ">
        <motion.img
          src={props.image}
          className="w-full h-full object-cover curs"
          alt="Project Screenshot"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
        />
      </div>
      <div className="flex justify-center">
        <Button title="Demo" url={props.demoUrl} />
        <Button title="Source" url={props.sourceUrl} />
      </div>
    </motion.div>
  );
};

export default Card;
