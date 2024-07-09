"use client";
import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import ShimmerButton from "./ui/ShimmerButton";
import { FaLocationArrow } from "react-icons/fa";
import StarsCanvas from "./ui/StarsBg";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => (
  <div id="hero" className="flex my-20 pb-20 pt-32 z-30 relative flex-col gap-4 items-center justify-center">
    <Spotlight
      className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
      fill="white"
    />
    <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple" />
    <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
    <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
      <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
        Learning by doing
      </h2>
      <TextGenerateEffect
        className="text-center text-[40px] md:text-5xl lg:text-6xl"
        words="Let's Build Something Amazing Together."
      />
      <p className="text-left md:tracking-wider text-blue-100 mb-1 text-sm md:text-lg lg:text-2xl">
        Hi, I'm Gustian.
      </p>
      <p className="text-left md:tracking-wider text-blue-100 mb-2 text-sm md:text-lg lg:text-2xl">
        an Ambivert Developer based in Indonesia.
      </p>
      <a className="relative z-30" href="#about">
        <ShimmerButton
          title="About Me"
          icon={<FaLocationArrow />}
          position="right"
        />
      </a>
    </div>
  </div>
);

export default Hero;
