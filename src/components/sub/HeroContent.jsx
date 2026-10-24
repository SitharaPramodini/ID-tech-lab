"use client";

import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../../utils/motion";
import PuzzlePiece from "./PuzzlePiece";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6 px-5 sm:px-10 lg:px-20 mt-28 sm:mt-32 lg:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto items-center text-center lg:items-start lg:text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[17px] border border-[#ff1a1a66] opacity-[0.9]"
        >
          <PuzzlePiece className="text-[#ff5252] mr-[10px] h-4 w-4 shrink-0" />
          <h1 className="Welcome-text text-[13px] whitespace-nowrap">
            web developing
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          {/* Delivering */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-brand-700">
              {" "}
              Your Vision,{" "}
            </span>
             Our Code.
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-400 max-w-[600px]"
        >
          Custom software solutions to power your next big idea.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#services"
          className="py-2 px-8 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-end"
      >
        <img
          src="/mainIconsdark.svg"
          alt="work icons"
          className="w-[260px] sm:w-[380px] md:w-[480px] lg:w-[560px] xl:w-[650px] h-auto max-w-full"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
