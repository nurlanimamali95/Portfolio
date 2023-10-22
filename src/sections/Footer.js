import React from "react";

const Footer = () => {
  return (
    <div className="md:flex justify-center uppercase text-lg m-10">
      <p>
        © Nurlan Imamali<span className="md:m-4">Site coded from scratch</span>
      </p>
      <p>
        <ul className="md:flex mx-5 space-x-2">
          <li className="group">Social</li>
          <li className="group">LINKEDIN</li>
          <li className="group">GitHub</li>
          <li className="group">Behance</li>
          <li className="group">Instagram</li>
        </ul>
      </p>
      <p className="mx-5">Back to the top</p>
    </div>
  );
};

export default Footer;
