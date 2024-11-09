"use client";
import React from "react";
import { AnimatedTooltip } from "../ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "Nitish Kumar",
    designation: "Team Leader",
    image:
      "/m1.jpg",
  },
  {
    id: 2,
    name: "Aravind Miras",
    designation: "Product Design Lead",
    image:
      "/m2.jpg",
  },
  {
    id: 3,
    name: "Sheik Hameed",
    designation: "Hardware",
    image:
      "/m3.jpg",
  },
  {
    id: 4,
    name: "Nithish U",
    designation: "Mobile Application Developer",
    image:
      "/m4.jpg",
  },
  {
    id: 5,
    name: "Usha Kalathinathan",
    designation: "Machine Learning Engineer",
    image:
      "/m5.jpg",
  },
  {
    id: 6,
    name: "Soma Sundari",
    designation: "UI / UX Designer",
    image:
      "/m6.jpg",
  },
];

export function FooterTooltip() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
