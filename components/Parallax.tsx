"use client";
import React from "react";
import { products } from "@/data";
import { PageParallax } from "./ui/ParallaxPage";

export function Parallax() {
  return (
    <section id="project">
      <PageParallax products={products}/>
    </section>
  )
}
