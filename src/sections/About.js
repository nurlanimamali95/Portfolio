import React from "react";
import Laptop from "../assets/Laptop4.jpg";

const Analytics = () => {
  return (
    <div className=" bg-buttery text-nurlan w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-medium ">Meet the Digital Wizard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium py-2">
            A little bit about me
          </h1>
          <p>
            Greetings! I'm a web developer with a passion for creating
            captivating websites and seamless user experiences. My expertise
            spans both front-end and back-end development, merging creativity
            and functionality in code. As a lifelong web explorer, I'm here to
            turn your ideas into digital realities.
          </p>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
