import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import cat from "../assets/loadercat1.gif";

const Preloader = ({ onFinishLoading }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress((prevProgress) => {
        const newProgress = prevProgress + 1;
        if (newProgress === 100) {
          clearInterval(interval);
          setIsLoading(false);
          onFinishLoading();
        }
        return newProgress;
      });
    }, 25);

    return () => clearInterval(interval);
  }, [onFinishLoading]);

  return (
    isLoading && (
      <div className="flex flex-col items-center justify-center h-screen">
        <img src={cat} alt="Cat Loader" className="w-32 h-32 mb-4" />
        <div className="w-64 h-6 bg-gray-200 rounded-full overflow-hidden relative">
          <motion.div
            className="h-full bg-buttery"
            style={{
              width: `${loadingProgress}%`,
            }}
            initial={{ width: "0%" }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="mt-4 text-buttery font-bold">{`${loadingProgress}%`}</div>
      </div>
    )
  );
};

export default Preloader;
