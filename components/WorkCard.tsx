"use client";

import { motion, Variants } from "framer-motion";

// 1. Clean Data Structure to avoid code duplication
const PROJECTS = [
  {
    title: "Meshspire",
    description: "MeshSpire is a production-ready, real-time tutoring platform that connects students and tutors through live video sessions, instant messaging, and secure online payments. Built with a scalable monorepo architecture, it leverages Next.js, React, Node.js, PostgreSQL, Prisma, WebRTC, and AWS.",
    image: "/Meshspire.svg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Finance Dashboard",
    description: "Financial Dashboard System is a production-ready, full-stack personal finance platform that enables users to track income, expenses, and spending trends through interactive charts and real-time analytics. Built with React.js, Node.js, Express, MongoDB, and Chart.js.",
    image: "/Finance.svg",
    liveLink: "#",
    githubLink: "#",
  },
  {
    title: "Awast AI",
    description: "Awast AI is a lightweight conversational AI assistant that delivers intelligent, real-time responses through a clean and intuitive chat interface. Built using modern web technologies and LLM integration, it enables users to ask questions and receive contextual assistance.",
    image: "/AwastAi.svg",
    liveLink: "#",
    githubLink: "#",
  },
];

// Duplicate the array once to keep your 6-card layout dynamic
const ALL_PROJECTS = [...PROJECTS, ...PROJECTS];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15, // Smooth sequential card reveal
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth ease-out
    },
  },
};

export default function WorkCard() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        {ALL_PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="group relative flex flex-col w-full max-w-[380px] h-[520px] rounded-2xl border border-zinc-200/50 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-zinc-300 dark:border-zinc-800/50 dark:bg-zinc-900/50 dark:hover:bg-zinc-900 dark:hover:border-zinc-700"
          >
            {/* Image Wrapper with Hover Zoom effect */}
            <div className="overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 h-[200px] w-full relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content section */}
            <div className="flex flex-col flex-1 pt-5">
              <span className="font-semibold text-zinc-900 dark:text-zinc-50 text-xl tracking-tight">
                {project.title}
              </span>

              <p className="text-zinc-500 dark:text-zinc-400 pt-2 text-sm leading-relaxed line-clamp-5">
                {project.description}
              </p>

              {/* Action Buttons pushed perfectly to bottom */}
              <div className="mt-auto pt-4 flex items-center gap-3">
                <a
                  href={project.liveLink}
                  className="flex-1 text-center bg-zinc-900 dark:bg-red-500 text-white dark:text-zinc-900 font-medium text-xs tracking-wide uppercase rounded-lg py-2.5 shadow-sm transition-all duration-200 hover:bg-zinc-800 dark:hover:bg-zinc-200"
                >
                  View Live
                </a>

                <a
                  href={project.githubLink}
                  className="flex items-center justify-center gap-2 px-4 py-2.5 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 font-medium text-xs tracking-wide uppercase rounded-lg transition-all duration-200 hover:bg-zinc-50 dark:hover:bg-zinc-800/50"
                >
                  <img src="/github.svg" alt="GitHub" className="w-4 h-4 dark:invert" />
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}