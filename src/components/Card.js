import React from "react";
import Project1 from "../assets/kitty.jpg";
import Button from "./Button";

const Card = (props) => {
  return (
    <div className="">
      <div className="w-full h-500 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        <div className="w-20 h-80 mx-auto mt-[-3rem] bg-white">
          <img
            src={props.image}
            className="w-full h-full object-cover"
            alt="Project Screenshot"
          />
        </div>
        <div className="flex justify-center">
          <Button className="" title="Source Code" />
        </div>
      </div>
    </div>
  );
};

export default Card;
