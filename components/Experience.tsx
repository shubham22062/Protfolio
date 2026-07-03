"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <section ref={ref} className="relative pt-24 min-h-[160vh]">
      {/* Heading */}
      <h1 className="text-6xl font-bold text-red-500 text-center animate-bounce">
        Where I've Worked
      </h1>

      {/* Center Timeline */}
      <div className="absolute left-1/2 top-44 -translate-x-1/2">
        {/* Line */}
        <div className="w-[3px] h-[700px] rounded-full bg-gradient-to-b from-black via-red-500 to-black" />

        {/* Moving Circle */}
        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_red]"
        />
      </div>

      {/* Experiences */}
      <div className="relative mt-24 space-y-40">

        {/* LEFT CARD */}
        <div className="flex justify-start">
          <div className="relative w-[600px] ml-20">

            {/* Logo */}
            <img
              src="https://brandlogos.net/wp-content/uploads/2023/10/1698290270-4070-IBM-logo-1972.jpg"
              alt="IBM"
              className="absolute -top-6 -left-6 w-14 h-14 rounded-full border-2 border-white"
            />

            <div className="rounded-2xl border-2 border-amber-50 bg-black/40 backdrop-blur-md p-6 transition duration-300 hover:scale-105">
              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center">
                  <h1 className="text-lg font-semibold text-white">IBM</h1>
                  <span className="text-white text-2xl">-</span>
                  <span className="text-lg font-semibold text-red-500">
                    Web Development Intern
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  June 2024 – Aug 2024
                </span>
              </div>

              <p className="mt-8 text-gray-400 leading-7">
                During my internship at IBM as a Web Development Intern, I developed Wellness Buddy, a personalized health and wellness platform focused on promoting SDG-3 (Good Health & Well-being). I built an interactive user experience where health assessments and quizzes were used to analyze user needs and deliver personalized exercise plans, diet recommendations, and wellness resources. I also designed a responsive and accessible frontend using HTML, CSS, and JavaScript, ensuring a seamless user journey from assessment to actionable health insights while emphasizing clean UI and user-centric design.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="absolute right-0 top-44 ">
          <div className="relative w-[600px] mr-20">

            {/* Logo */}
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNna6exA-dHyTxZBvGQVKBSnwHGMzXoP-VJDSP4prF9g&s=10"
              alt="IBM"
              className="absolute -top-6 -left-6 w-14 h-14 rounded-full border-2 border-white"
            />

            <div className="rounded-2xl border-2 border-amber-50 bg-black/40 backdrop-blur-md p-6 transition duration-300 hover:scale-105">
              <div className="flex justify-between items-center">
                <div className="flex  items-center">
                  <h1 className="text-lg font-semibold text-white">Eye Craft Security</h1>
                  <span className="text-white text-2xl">-</span>
                  <span className="text-lg font-semibold text-red-500">
                    Full Stack developer Intern
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  Jan 2026 – Apr 2026
                </span>
              </div>

              <p className="mt-8 text-gray-400 leading-7">
                During my internship at Eye Craft Security as a Full Stack Developer Intern, I contributed to building and enhancing security-focused web applications by developing both frontend and backend features. I worked with RESTful APIs and server-side logic to implement real-world client requirements while ensuring smooth system integration. My responsibilities also included debugging and testing across the full stack, which helped improve application stability and reduce UI-related issues. I collaborated closely with designers and senior developers to deliver responsive, production-ready interfaces within deadlines, focusing on performance, usability, and clean implementation.              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}