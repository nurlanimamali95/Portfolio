import React from "react";

const Footer = () => {
  return (
    <div className="md:flex justify-center uppercase text-lg m-10">
      <p>
        © Nurlan Imamali<span className="md:m-4">Site coded from scratch</span>
      </p>
      <p>
        <ul className="md:flex mx-5 space-x-2">
          <li className="flex items-baseline  group relative ">
            <div class="w-4 h-4 bg-buttery rounded-full mr-2"></div>Social
          </li>
          <li className="group relative inline-block">
            <a
              href="https://www.linkedin.com/in/nurlanimamali/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
          </li>
          <li className="group relative inline-block">
            <a
              href="https://github.com/nurlanimamali95"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
          </li>
          <li className="group relative inline-block">
            <a
              href="https://www.behance.net/nurlanimamali"
              target="_blank"
              rel="noreferrer"
            >
              Behance
            </a>
            <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
          </li>
          <li className="group relative inline-block">
            <a
              href="https://www.instagram.com/nurlanimamali/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
            <div className="absolute w-0 h-1 bg-[#00Df9a] group-hover:w-full transition-all duration-300 ease-in-out origin-left"></div>
          </li>
        </ul>
      </p>
      <p className="mx-5">
        <a></a>
      </p>
    </div>
  );
};

export default Footer;
