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
      className="pt-24 px-4"
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
        className="font-bold text-2xl text-center hover:text-red-500 transition"
      >
        Who Am I
      </motion.h1>

      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="block text-center pt-4 text-red-500 text-7xl font-bold animate-bounce transition"
      >
        About Me.
      </motion.span>

      {/* MAIN WRAPPER */}
      <motion.div
        className="flex gap-18 flex-nowrap items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        {/* LEFT SIDE */}
        <motion.div
          className="ml-10 shrink-0"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* GitHub Card */}
          <motion.div
            className="mt-16 w-[650px] h-[300px] max-w-3xl bg-black/40 border border-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:scale-105"
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

              <div className="flex justify-center overflow-x-auto">
                <GitHubCalendar username="shubham22062" />
              </div>
            </a>
          </motion.div>

          {/* CARDS WRAPPER */}
          <motion.div
            className="mt-10 flex gap-6 flex-wrap"
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
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md w-[200px] h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">
                <span className="font-bold text-red-500 text-4xl">90+</span>
                <span className="block text-white text-xl font-semibold mt-2">
                  Total Projects
                </span>
              </div>
            </motion.a>

            {/* Card 2 */}
            <motion.a
              href="https://meshspire-landing.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md w-[200px] h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">
                <span className="font-bold text-red-500 text-4xl">2</span>
                <span className="block text-white text-xl font-semibold mt-2">
                  Core SaaS Products
                </span>
              </div>
            </motion.a>

            {/* Card 3 */}
            <motion.a
              href="https://github.com/shubham22062/Awast"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md w-[200px] h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">

                <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                </span>

                <span className="text-lg text-red-500">Currently building</span>
                <span className="block text-white text-2xl mt-2 font-semibold">
                  AwastAI
                </span>

              </div>
            </motion.a>

          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          className="flex-1 min-w-0"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <h1 className="font-semibold text-4xl mt-15">
            Comfortable shipping, not just prototyping.
          </h1>

          <p className="mt-8 text-gray-400 max-w-xl">
            I'm a software engineer who enjoys building products from zero to production. I love transforming ideas into polished, scalable applications that combine clean code, thoughtful user experiences, and modern engineering practices.
          </p>

          <p className="mt-4 text-gray-400 max-w-xl">
            Over the past few years, I've worked extensively with Next.js, React, Node.js, TypeScript, MongoDB, and Generative AI technologies to develop applications that solve real problems. Whether it's building SaaS platforms, AI-powered tools, or full-stack web applications, I'm driven by curiosity, continuous improvement, and the satisfaction of shipping products that make an impact.
          </p>

          <motion.div
            className="mt-16 flex gap-15 ml-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >

            <a href="https://github.com/shubham22062">
              <img src="github.svg" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="https://www.linkedin.com/in/shubham-awasthi-310520291/">
              <img src="Linkedin.svg" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="https://x.com/Awa24777Shubham">
              <img src="twitter.svg" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

            <a href="mailto:shubhamawasthi021@gmail.com">
              <img src="email.svg" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
            </a>

          </motion.div>

        </motion.div>

      </motion.div>
    </motion.div>
  );
}