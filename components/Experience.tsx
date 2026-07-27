"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  Variants,
} from "framer-motion";

const headingVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    scaleY: 0,
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const leftCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -120,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const rightCardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 120,
    scale: 0.95,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      delay: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 700]);

  return (
    <section
      ref={ref}
      className="relative pt-12 sm:pt-24 min-h-fit sm:min-h-[160vh] px-3 sm:px-0 pb-12 sm:pb-0"
    >

      {/* Heading */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="text-2xl sm:text-6xl font-bold text-red-500 text-center animate-bounce"
      >
        Where I've Worked
      </motion.h1>

      {/* Timeline */}
      <div className="absolute left-1/2 top-44 -translate-x-1/2 hidden sm:block">

        <motion.div
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          style={{ originY: 0 }}
          className="w-[3px] h-[700px] rounded-full bg-gradient-to-b from-black via-red-500 to-black"
        />

        <motion.div
          style={{ y }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-red-500 shadow-[0_0_20px_red]"
        />

      </div>

      <div className="relative mt-6 sm:mt-24 space-y-8 sm:space-y-40">

        {/* LEFT CARD */}
        <div className="flex justify-center sm:justify-start">

          <motion.div
            variants={leftCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-full max-w-[600px] sm:w-[600px] sm:ml-20"
          >

            <motion.img
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: 0.7,
              }}
              src="https://brandlogos.net/wp-content/uploads/2023/10/1698290270-4070-IBM-logo-1972.jpg"
              alt="IBM"
              className="absolute -top-4 -left-4 w-10 h-10 sm:-top-6 sm:-left-6 sm:w-14 sm:h-14 rounded-full border-2 border-white"
            />

            <div className="rounded-2xl border-2 border-amber-50 bg-black/40 backdrop-blur-md p-4 sm:p-6 transition duration-300 hover:scale-105">

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

                <div className="flex flex-wrap gap-2 items-center">
                  <h1 className="text-base sm:text-md font-semibold text-white">
                    IBM
                  </h1>

                  <span className="text-white text-xl sm:text-2xl">-</span>

                  <span className="text-base sm:text-md font-semibold text-red-500">
                    Web Development Intern
                  </span>
                </div>

                <span className="text-xs sm:text-sm text-gray-400">
                  June 2024 – Aug 2024
                </span>

              </div>

              {/* YOUR ORIGINAL PARAGRAPH (UNCHANGED) */}
              <p className="mt-4 sm:mt-8 text-sm sm:text-base text-gray-400 leading-6 sm:leading-7">
                During my internship at IBM as a Web Development Intern, I
                developed Wellness Buddy, a personalized health and wellness
                platform focused on promoting SDG-3 (Good Health & Well-being). I
                built an interactive user experience where health assessments and
                quizzes were used to analyze user needs and deliver personalized
                exercise plans, diet recommendations, and wellness resources. I
                also designed a responsive and accessible frontend using HTML,
                CSS, and JavaScript, ensuring a seamless user journey from
                assessment to actionable health insights while emphasizing clean
                UI and user-centric design.
              </p>

            </div>

          </motion.div>

        </div>

        {/* RIGHT CARD */}
        <div className="w-full flex justify-center sm:absolute sm:right-0 sm:top-44 sm:justify-end">

          <motion.div
            variants={rightCardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="relative w-full max-w-[600px] sm:w-[600px] sm:mr-20"
          >

            <motion.img
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.6,
                delay: 1,
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNna6exA-dHyTxZBvGQVKBSnwHGMzXoP-VJDSP4prF9g&s=10"
              alt="Eye Craft Security"
              className="absolute -top-4 -left-4 w-10 h-10 sm:-top-6 sm:-left-6 sm:w-14 sm:h-14 rounded-full border-2 border-white"
            />

            <div className="rounded-2xl border-2 border-amber-50 bg-black/40 backdrop-blur-md p-4 sm:p-6 transition duration-300 hover:scale-105">

              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">

                <div className="flex flex-wrap items-center gap-2">

                  <h1 className="text-base sm:text-md font-semibold text-white">
                    Eye Craft Security
                  </h1>

                  <span className="text-white text-xl sm:text-2xl">-</span>

                  <span className="text-base sm:text-md font-semibold text-red-500">
                    Full Stack Developer Intern
                  </span>

                </div>

                <span className="text-xs sm:text-sm text-gray-400">
                  Jan 2026 – Apr 2026
                </span>

              </div>

              {/* YOUR ORIGINAL PARAGRAPH (UNCHANGED) */}
              <p className="mt-4 sm:mt-8 text-sm sm:text-base text-gray-400 leading-6 sm:leading-6">
                During my internship at Eye Craft Security as a Full Stack
                Developer Intern, I contributed to building and enhancing
                security-focused web applications by developing both frontend and
                backend features. I worked with RESTful APIs and server-side
                logic to implement real-world client requirements while ensuring
                smooth system integration. My responsibilities also included
                debugging and testing across the full stack, which helped improve
                application stability and reduce UI-related issues. I
                collaborated closely with designers and senior developers to
                deliver responsive, production-ready interfaces within deadlines,
                focusing on performance, usability, and clean implementation.
              </p>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}