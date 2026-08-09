"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar"),
  { ssr: false }
);

export default function About() {
  return (
    <motion.div
      className="relative overflow-x-hidden min-h-screen pt-12 sm:pt-24 px-3 sm:px-6 lg:px-8 pb-10 sm:pb-12"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-bold text-2xl text-center hover:text-red-500 transition text-white"
      >
        Who Am I
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="block text-center pt-3 sm:pt-4 text-red-500 text-4xl sm:text-6xl lg:text-7xl font-bold animate-bounce transition"
      >
        About Me.
      </motion.span>

      {/* MAIN WRAPPER */}
      <motion.div
        className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start lg:justify-between max-w-7xl mx-auto w-full min-w-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* LEFT SIDE */}
        <motion.div
          className="w-full lg:w-[48%] lg:ml-0 lg:shrink-0 min-w-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* GitHub Card */}
          <motion.div
            className="mt-6 sm:mt-16 w-full max-w-full lg:max-w-full h-auto min-h-[260px] sm:min-h-[300px] bg-black/40 border border-gray-800 rounded-2xl p-4 sm:p-6 transition-transform duration-300 hover:scale-105 mx-auto lg:mx-0 text-white"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <a
              href="https://github.com/shubham22062"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-lg font-semibold text-gray-300 mb-6">
                GitHub Activity
              </h2>

              <div className="flex justify-center overflow-x-auto w-full">
                <GitHubCalendar username="shubham22062" />
              </div>
            </a>
          </motion.div>

          {/* CARDS WRAPPER - Grid on smaller screens, 3-column row on sm+ */}
          <motion.div
            className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-full"
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
          >
            {/* Card 1 */}
            <motion.a
              href="https://github.com/shubham22062?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 flex flex-col justify-between">
                <span className="font-bold text-red-500 text-3xl sm:text-4xl">
                  90+
                </span>
                <span className="block text-white text-base sm:text-lg font-semibold">
                  Total Projects
                </span>
              </div>
            </motion.a>

            {/* Card 2 */}
            <motion.a
              href="https://meshspire-landing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 flex flex-col justify-between">
                <span className="font-bold text-red-500 text-3xl sm:text-4xl">
                  2
                </span>
                <span className="block text-white text-base sm:text-lg font-semibold">
                  Core SaaS Products
                </span>
              </div>
            </motion.a>

            {/* Card 3 */}
            <motion.a
              href="https://github.com/shubham22062/Awast"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600 flex flex-col justify-between">
                <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>

                <span className="text-sm text-red-500">Currently building</span>
                <span className="block text-white text-xl sm:text-2xl font-semibold">
                  AwastAI
                </span>
              </div>
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="w-full lg:w-[48%] flex-1 min-w-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-semibold text-2xl sm:text-4xl mt-6 sm:mt-8 lg:mt-16 text-white">
            Comfortable shipping, not just prototyping.
          </h1>

          <p className="mt-4 sm:mt-8 text-gray-400 max-w-none lg:max-w-xl text-sm sm:text-base">
            I'm a software engineer who enjoys building products from zero to production. I love transforming ideas into polished, scalable applications that combine clean code, thoughtful user experiences, and modern engineering practices.
          </p>

          <p className="mt-3 sm:mt-4 text-gray-400 max-w-none lg:max-w-xl text-sm sm:text-base">
            Over the past few years, I've worked extensively with Next.js, React, Node.js, TypeScript, MongoDB, and Generative AI technologies to develop applications that solve real problems. Whether it's building SaaS platforms, AI-powered tools, or full-stack web applications, I'm driven by curiosity, continuous improvement, and the satisfaction of shipping products that make an impact.
          </p>

          <motion.div
            className="mt-8 sm:mt-16 flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-10 lg:gap-12 ml-0 sm:ml-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <a href="https://github.com/shubham22062" target="_blank" rel="noopener noreferrer">
              <img src="github.svg" alt="GitHub" className="w-10 h-10 sm:w-12 sm:h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="https://www.linkedin.com/in/shubham-awasthi-310520291/" target="_blank" rel="noopener noreferrer">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkkHI_JJfZV-v8iqTSZ8p1UpOk4sMvSxOY3_2dwgiWWw&s=10" alt="LinkedIn" className="w-10 h-10 sm:w-12 sm:h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="https://x.com/Awa24777Shubham" target="_blank" rel="noopener noreferrer">
              <img src="twitter.svg" alt="Twitter" className="w-10 h-10 sm:w-12 sm:h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="mailto:shubhamawasthi021@gmail.com">
              <img src="email.svg" alt="Email" className="w-10 h-10 sm:w-12 sm:h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}