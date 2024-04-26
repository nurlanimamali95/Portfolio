import React from "react";

export default function Footer() {
  return (
    <div className="md:flex md:flex-col md:items-center md:justify-center uppercase text-lg m-10 lg:flex-row">
      <p className="text-center">© Nurlan Imamali</p>
      <div className="flex justify-center space-x-2 mx-[3em]">
        <a
          href="https://www.linkedin.com/in/nurlanimamali/"
          target="_blank"
          rel="noreferrer"
          className="group relative"
        >
          LinkedIn
          <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
        </a>
        <a
          href="https://github.com/nurlanimamali95"
          target="_blank"
          rel="noreferrer"
          className="group relative"
        >
          Github
          <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
        </a>
        <a
          href="https://www.instagram.com/nurlanimamali/"
          target="_blank"
          rel="noreferrer"
          className="group relative"
        >
          Instagram
          <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
        </a>
      </div>
      <p className="text-center">
        <a href="https://storyset.com/home">Home illustrations by Storyset</a>
      </p>
    </div>
  );
}
