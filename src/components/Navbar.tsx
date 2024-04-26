import React from "react";
import { Link as ScrollLink } from "react-scroll";
import AnimatedLogo from "./AnimatedLogo";

export default function NavBar() {
  return (
    <div className="flex justify-between items-center  h-24 max-w-[1024px] mx-auto px-4 select-none">
      <div className="cursor-pointer">
        <AnimatedLogo />
      </div>

      <ul className="hidden md:flex items-baseline">
        <li className="p-4 cursor-pointer hover:text-mygreen ">
          <ScrollLink
            to="projects"
            spy={true}
            offset={125}
            smooth={true}
            duration={500}
          >
            Projects
          </ScrollLink>
        </li>
        <li className="p-4 cursor-pointer hover:text-mygreen ">
          <ScrollLink
            to="contact"
            spy={true}
            offset={-20}
            smooth={true}
            duration={500}
          >
            Contact Me
          </ScrollLink>
        </li>
      </ul>
    </div>
  );
}
