import React from "react";
import { Link } from "react-router-dom";
import { m } from "framer-motion";

type buttonProps = {
  url: string;
  onClick?: () => void;
  title: string;
};

const hoverVariants = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 500,
      ease: "linear",
    },
  },
};

export default function Button({ url, onClick, title }: buttonProps) {
  return (
    <m.div className="m-6">
      <Link to={url} target="_blank">
        <m.button
          onClick={onClick}
          className="bg-[#00df9a] text-nurlan w-[150] rounded-md font-medium mx-auto px-6 py-3 hover:bg-black hover:text-[#00df9a] my-6 md:mx-0 _blank"
          variants={hoverVariants}
          whileHover="visible"
        >
          {title}
        </m.button>
      </Link>
    </m.div>
  );
}
