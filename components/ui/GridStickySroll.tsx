"use client";
import React from "react";
import { StickyScroll } from "./StickyScrollReveal";
import { content } from "@/data";

export function StickyScrollReveal() {
  return (
    <div>
      <div className="flex justify-center px-5 mb-5 font-sans text-md lg:text-2xl font-bold z-10">
        Education Journey
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
