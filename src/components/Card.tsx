import React from "react";
import Button from "./Button";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";

type cardProps = {
  demoUrl: string;
  sourceUrl: string;
  image: string;
};

export default function Card({ demoUrl, sourceUrl, image }: cardProps) {
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

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const rect = (e.target as HTMLImageElement).getBoundingClientRect();

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
    <m.div className="w-full h-500 shadow-xl flex flex-col p-4 my-4 rounded-lg ">
      <div className="inline-block h-80 mx-auto mt-[-3rem] ">
        <m.img
          src={image}
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
        <Button title="Demo" url={demoUrl} />
        <Button title="Source" url={sourceUrl} />
      </div>
    </m.div>
  );
}
