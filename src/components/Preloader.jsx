import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Preloader = ({ onFinish }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev < 100) return prev + 1;
        return 100;
      });
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (count === 100) {
      setTimeout(() => {
        onFinish();
      }, 500);
    }
  }, [count, onFinish]);

  return (
    <motion.div
      className="fixed h-[100dvh] w-full bg-white top-0 left-0 text-black z-[100] flex flex-col items-center justify-center font-[Neue]"
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ 
        duration: 2, 
        ease: [0.76, 0, 0.24, 1],
        delay: 0.5
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-8 font-[Socilo]"
      >
        <div className="flex items-center gap-2">
          <h1 className="text-5xl">U</h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "15vh" }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="h-[15vh] bg-black"
          ></motion.div>
          <h1 className="text-5xl">X</h1>
        </div>
      </motion.h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="bottom-2 absolute w-full"
      >
        <div className="flex items-center justify-between w-full px-5 font-bold">
          <div className="text-xs">( Loading )</div>
          <div className="text-xs">{count}%</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

Preloader.propTypes = {
  onFinish: PropTypes.func.isRequired,
};

export default Preloader;