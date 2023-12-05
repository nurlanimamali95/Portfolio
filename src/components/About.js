import React from "react";
import Laptop from "../assets/Laptop4.jpg";

const Analytics = () => {
  return (
    <div className=" bg-buttery text-nurlan w-full  px-4">
      <div className="text-center">
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-medium py-[2em]">
          A little bit about me
        </h1>
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-1">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <h3 className="text-[#00df9a] font-medium md:text-2xl sm:text-1xl text-1xl my-4 py-2">
            Meet the Digital Wizard
          </h3>
          <p>
            Greetings! I'm a web developer with a passion for creating
            captivating websites and seamless user experiences. My expertise
            spans both front-end and back-end development, merging creativity
            and functionality in code. As a lifelong web explorer, I'm here to
            turn your ideas into digital realities. My faithful companion, Leo,
            a mischievous but adorable tabby cat, often perches on my desk,
            offering inspiration with his curious antics. He's an integral part
            of my coding journey, providing unwavering support and occasional
            distraction, reminding me to take breaks and appreciate the simple
            joys in life.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
