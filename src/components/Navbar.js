import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Button from "./Button";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center  h-24 max-w-[1024px] mx-auto px-4">
      <h1 className="w-full text-3xl font-bold ">NI.</h1>
      <ul className="hidden md:flex items-baseline">
        <li className="p-4">Projects</li>
        <li className="p-4">
          <Button className="mt-0" title="Contact Me" />
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#56655f] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4">NI.</h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-buttery">Projects</li>
          <li className="p-4">
            <Button title="Contact me" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
