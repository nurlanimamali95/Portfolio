import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="bg-[#00df9a] text-nurlan w-[200px] rounded-md font-medium mx-auto px-6 py-3 text-black ">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
