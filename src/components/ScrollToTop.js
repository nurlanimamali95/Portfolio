import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentHeight = window.innerHeight;
      setIsVisible(currentHeight > 560 && window.scrollY > 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <div className="z-index-100">
          <ScrollLink to="/" spy={true} smooth={true} duration={500}>
            <div className="fixed right-[2.5em] bottom-[3em] bg-nurlan p-[0.5em] opacity-[0.8] border-[0.1em] flex items-center justify-center">
              <FaArrowUp onClick={scrollToTop} />
            </div>
          </ScrollLink>
        </div>
      )}
    </>
  );
};

export default ScrollUp;
