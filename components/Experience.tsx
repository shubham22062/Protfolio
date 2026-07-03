"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  // Track scrolling only for this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Move the circle from top to bottom of the line
  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <section
      ref={ref}
      className="relative pt-24 min-h-[160vh]"
    >
      <h1 className="text-6xl font-bold text-red-500 text-center animate-bounce">
        Where I've worked
      </h1>

      {/* Timeline */}
      <div className="relative mt-15 flex justify-center">
        {/* Vertical Line */}
        <div className="w-[3px] h-[700px] rounded-full bg-gradient-to-b from-black via-red-500 to-black" />

        {/* Scrolling Circle */}
        <motion.div
          style={{ y }}
          className="absolute top-0 w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_red]"
        />
      </div>
      <div className="flex gap-2">
        <div className="absolute top-0 mt-65 ml-4">
        <img src="https://brandlogos.net/wp-content/uploads/2023/10/1698290270-4070-IBM-logo-1972.jpg" alt="Ibmimage" className="w-13 h-13 rounded-full"/>
      </div>
     <div className="absolute top-0 mt-60 ml-20 w-[600px] h-[300px] rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-md p-4">

     <div className="flex gap-2">
        <h1 className="text-2xl text-black pt-1">IBM</h1>
        <span className="font-bold text-gray-400 text-3xl">-</span>
        <span className="text-2xl text-red-500 pt-1">Web Development Intern</span>
     </div>
     </div>
      </div>
      
      
    </section>
  );
}