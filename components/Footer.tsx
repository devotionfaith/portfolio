import React from "react";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FlipWords } from "./ui/FlipWords";
import { socialMedia, words } from "@/data";
import { FaLocationArrow } from "react-icons/fa";
import ShimmerButton from "./ui/ShimmerButton";

const Footer = () => {
  return (
    <footer className="w-full relative -mt-80 px-10 lg:mt-20 lg:pt-10 pb-4 z-30" id="contact">
       <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col lg:px-60 items-center">
        <h1 className="heading lg:max-w-[45vw]">
            Let's stay <span className="text-purple">connected!</span> Follow me and stay in touch with me
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Feel free to reach out and connect with me through social media or drop me a message. Let's collaborate and create something amazing together!
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base lg:text-xs text-sm md:font-normal font-light">
          © Devotionfaith 2024, All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
