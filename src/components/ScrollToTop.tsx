import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollUp() {
  const [isVisible, setIsVisible] = useState(false);

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
            <button
              onClick={scrollToTop}
              className="fixed right-[0.5em] bottom-[3em] bg-nurlan p-[0.3em] opacity-[0.8] border-[0.1em] flex items-center justify-center md:p-[0.5em] hover:bg-buttery hover:text-nurlan hover:border-nurlan"
            >
              <FaArrowUp />
            </button>
          </ScrollLink>
        </div>
      )}
    </>
  );
}
