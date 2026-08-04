"use client";

import { motion, Variants } from "framer-motion";

const PROJECTS = [
  {
    title: "Meshspire",
    description:
      "MeshSpire is a production-ready, real-time tutoring platform that connects students and tutors through live video sessions, instant messaging, and secure online payments. Built with a scalable monorepo architecture, it leverages Next.js, React, Node.js, PostgreSQL, Prisma, WebRTC, and AWS.",
    image: "/Meshspire.svg",
    liveLink: "https://meshspire-landing.vercel.app/",
    githubLink: "https://github.com/shubham22062/MeshSpire_Core",
  },
  {
    title: "Finance Dashboard",
    description:
      "Financial Dashboard System is a production-ready, full-stack personal finance platform that enables users to track income, expenses, and spending trends through interactive charts and real-time analytics. Built with React.js, Node.js, Express, MongoDB, and Chart.js.",
    image: "/Finance.svg",
    liveLink: "https://finance-dashboard-system-9w37.vercel.app/",
    githubLink:
      "https://github.com/shubham22062/Finance-dashboard-system",
  },
  {
    title: "Awast AI",
    description:
      "Awast AI is a lightweight conversational AI assistant that delivers intelligent, real-time responses through a clean and intuitive chat interface. Built using modern web technologies and LLM integration, it enables users to ask questions and receive contextual assistance.",
    image: "/AwastAi.svg",
    liveLink: "https://awast.vercel.app/",
    githubLink: "https://github.com/shubham22062/Awast",
  },
  {
    title: "Okar",
    description:
      "Okar is a sleek interior design website that delivers an immersive browsing experience through elegant layouts and responsive design. Built using modern web technologies, it allows users to discover design inspiration, explore completed projects, and easily inquire about customized interior services.",
    image: "/okar.png",
    liveLink: "https://okaro-ten.vercel.app/",
    githubLink: "https://github.com/shubham22062/okaro",
  },
  {
    title: "Param Interior",
    description:
      "Param Interior is a premium interior design studio that creates elegant and functional spaces through thoughtful design and craftsmanship. Built with a focus on modern aesthetics, it showcases inspiring projects, unique concepts, and personalized interior solutions for residential and commercial spaces.",
    image: "/Param.png",
    liveLink: "https://param-interiors.vercel.app/",
    githubLink:
      "https://github.com/shubham22062/Param_interiors",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
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
      ease: [0.16, 1, 0.3, 1],
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
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -8,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
            className="group relative flex flex-col w-full max-w-[380px] h-[520px] rounded-2xl border border-zinc-800 bg-zinc-900/50 p-5 shadow-sm transition-all duration-300 hover:shadow-xl hover:bg-zinc-900 hover:border-zinc-700"
          >
            {/* Image */}
            <div className="relative h-[200px] w-full overflow-hidden rounded-xl bg-zinc-800">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col pt-5">
              <h3 className="text-xl font-semibold tracking-tight text-zinc-50">
                {project.title}
              </h3>

              <p className="pt-2 text-sm leading-relaxed text-zinc-400 line-clamp-5">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-auto flex items-center gap-3 pt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-lg bg-red-500 py-2.5 text-center text-xs font-medium uppercase tracking-wide text-zinc-900 transition-all duration-200 hover:bg-red-400"
                >
                  View Live
                </a>

                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg border border-zinc-800 px-4 py-2.5 text-xs font-medium uppercase tracking-wide text-zinc-300 transition-all duration-200 hover:bg-zinc-800"
                >
                  <img
                    src="/github.svg"
                    alt="GitHub"
                    className="h-4 w-4 invert"
                  />
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