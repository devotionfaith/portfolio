"use client"
import React from "react";
import { motion } from "framer-motion";
import { RiHtml5Line, RiCss3Line, RiJavascriptLine, RiTailwindCssLine, RiReactjsLine, RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { textTech } from "@/data";

const iconVariants = (duration: number) => ({
  initial: { y: -10, opacity: 0 },
  animate: {
    y: [10, -10], 
    opacity: 1,
    transition: {
      y: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse" as "reverse",
      },
      opacity: {
        duration: duration*2, 
        ease: "easeInOut",
      }
    },
  },
});



const TechStack = () => {
  return (
    <div id="technologies" className="w-full h-screen flex flex-col items-center justify-center">
      <div className="mb-14 text-center text-4xl">
      <TypewriterEffectSmooth words={textTech} />
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <RiHtml5Line className="text-6xl text-[#e64c26]" />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <RiCss3Line className="text-6xl text-[#2163b1]" />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <RiJavascriptLine className="text-6xl text-[#f0dc4d]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <RiTailwindCssLine className="text-6xl text-[#07b8da]" />
        </motion.div>
        <motion.div
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <RiReactjsLine className="text-6xl text-[#63d8fc]" />
        </motion.div>
        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <RiNextjsLine className="text-6xl text-[#fafafa]" />
        </motion.div>
        <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-2 border-cyan-400 p-4"
        >
          <TbBrandTypescript className="text-6xl text-[#3179c7]" />
        </motion.div>
      </div>
    </div>
  );
};

export default TechStack;
