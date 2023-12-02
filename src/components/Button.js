import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

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

const Button = (props) => {
  return (
    <motion.div className="m-6">
      <Link to={props.url}>
        <motion.button
          onClick={props.onClick}
          className="bg-[#00df9a] text-nurlan w-[150] rounded-md font-medium mx-auto px-6 py-3 hover:bg-black hover:text-[#00df9a] my-6 md:mx-0"
          variants={hoverVariants}
          whileHover="visible"
        >
          {props.title}
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Button;
