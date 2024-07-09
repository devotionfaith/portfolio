"use client"
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { gridItems, textAbout } from "../data/index.js";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { LampContainer } from "./ui/LampEffect";
import { motion } from "framer-motion";

const Grid = () => {
  return (
    <section id="about" className="mx-auto sm:px-20">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
         About Me
        </motion.h1>
      </LampContainer>
      <BentoGrid className="w-full -mt-60 pb-20 relative z-30">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            classNameData={(() => {
              if (i === 0) {
                return "col-span-4 max-h-[30vh] lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]";
              } else if (i === 1) {
                return "col-span-4 lg:col-span-2 md:col-span-3 md:row-span-4";
              } else if (i === 2) {
                return "col-span-4 lg:col-span-2 md:col-span-3 md:row-span-2";
              } else if (i === 3) {
                return "col-span-4 min-h-[60vh] lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]";
              } else if (i === 4) {
                return "col-span-4 lg:col-span-2 md:col-span-3 md:row-span-2";
              } else {
                return "";
              }
            })()}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
