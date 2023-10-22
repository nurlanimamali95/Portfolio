import React from "react";
import Button from "../components/Button";

const Work = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h3 className="md:text-5xl sm:text-4xl text-3xl font-medium md:py-6">
        Liked what you just saw?
      </h3>
      <Button className="flex justify-center items-center" title="Contact Me" />
    </div>
  );
};

export default Work;
