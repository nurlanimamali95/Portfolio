import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <div>
      <button
        onClick={props.onClick}
        className="bg-[#00df9a] text-nurlan w-[200px] rounded-md font-medium mx-auto px-6 py-3  hover:bg-black hover:text-[#00df9a] my-6  md:mx-0"
      >
        <Link to={props.url}>{props.title}</Link>
      </button>
    </div>
  );
};

export default Button;
