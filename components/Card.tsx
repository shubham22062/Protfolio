"use client";

import { motion,Variants } from "framer-motion";
import { useRouter } from "next/navigation";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.92,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Card() {

  const router = useRouter();
  return (
    <div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{  amount: 0.25 }}
        className="mt-15 px-4 flex flex-wrap justify-center gap-8"
      >
        {/* MeshSpire */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="border-2 border-amber-50 rounded-2xl w-full sm:w-[450px] min-h-[500px] flex flex-col p-4"
        >
          <img
            src="Meshspire.svg"
            alt="meshspire"
            className="w-full h-[200px] object-cover rounded-lg"
          />

          <span className="font-bold text-red-500 text-xl block pt-5">
            Meshspire
          </span>

          <p className="text-gray-400 pt-3 text-sm">
            MeshSpire is a production-ready, real-time tutoring platform that
            connects students and tutors through live video sessions, instant
            messaging, and secure online payments. Built with a scalable
            monorepo architecture, it leverages Next.js, React, Node.js,
            PostgreSQL, Prisma, WebRTC, and AWS to deliver a seamless,
            high-performance learning experience while supporting efficient
            growth and reliable backend operations.
          </p>

          <div className="mt-auto pt-6 flex gap-4">
            <button className="bg-red-500 border border-red-500 text-black text-sm rounded-md px-4 py-2 transition-transform duration-300 hover:scale-105">
              View Live
            </button>

            <button className="bg-white border border-white text-black text-sm rounded-md px-4 py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img src="github.svg" alt="github" className="w-4 h-4" />
              Github
            </button>
          </div>
        </motion.div>

        {/* Finance Dashboard */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="border-2 border-amber-50 rounded-2xl w-full sm:w-[450px] min-h-[500px] flex flex-col p-4"
        >
          <img
            src="Finance.svg"
            alt="Finance-dashboard"
            className="w-full h-[200px] object-cover rounded-lg"
          />

          <span className="font-bold text-red-500 text-xl block pt-5">
            Finance Dashboard
          </span>

          <p className="text-gray-400 pt-3 text-sm">
            Financial Dashboard System is a production-ready, full-stack
            personal finance platform that enables users to track income,
            expenses, and spending trends through interactive charts and
            real-time analytics. Built with React.js, Node.js, Express,
            MongoDB, and Chart.js, it features secure JWT authentication,
            customizable date-range filtering, and a responsive mobile-first
            interface to deliver a seamless, scalable, and intuitive financial
            management experience.
          </p>

          <div className="mt-auto pt-6 flex gap-4">
            <button className="bg-red-500 border border-red-500 text-black text-sm rounded-md px-4 py-2 transition-transform duration-300 hover:scale-105">
              View Live
            </button>

            <button className="bg-white border border-white text-black text-sm rounded-md px-4 py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img src="github.svg" alt="github" className="w-4 h-4" />
              Github
            </button>
          </div>
        </motion.div>

        {/* Awast AI */}
        <motion.div
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.3 },
          }}
          className="border-2 border-amber-50 rounded-2xl w-full sm:w-[450px] min-h-[500px] flex flex-col p-4"
        >
          <img
            src="AwastAi.svg"
            alt="AwastAi"
            className="w-full h-[200px] object-cover rounded-lg"
          />

          <span className="font-bold text-red-500 text-xl block pt-5">
            Awast AI
          </span>

          <p className="text-gray-400 pt-3 text-sm">
            Awast AI is a lightweight conversational AI assistant that delivers
            intelligent, real-time responses through a clean and intuitive chat
            interface. Built using modern web technologies and LLM integration,
            it enables users to ask questions, generate content, and receive
            contextual assistance in a fast and seamless experience.
          </p>

          <div className="mt-auto pt-6 flex gap-4">
            <button className="bg-red-500 border border-red-500 text-black text-sm rounded-md px-4 py-2 transition-transform duration-300 hover:scale-105">
              View Live
            </button>

            <button className="bg-white border border-white text-black text-sm rounded-md px-4 py-2 flex items-center gap-2 transition-transform duration-300 hover:scale-105">
              <img src="github.svg" alt="github" className="w-4 h-4" />
              Github
            </button>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex justify-center mt-8 px-4">
        <motion.button
         onClick={() => router.push("/Project")}
        initial={{ opacity: 0, y: 40, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ amount: 0.25 }}
        transition={{
            delay: 0.8,
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
            scale: 1.08,
            y: -4,
            transition: {
            duration: 0.3,
            ease: "easeOut",
            },
        }}
        whileTap={{
            scale: 0.95,
        }}
        className="
            bg-red-500 
            border border-red-500 
            rounded-2xl 
            font-semibold 
            text-lg 
            px-6 
            py-4 
            flex 
            items-center 
            justify-center 
            gap-3 
            w-[170px]
            hover:text-black
        "
        >
        See All

        <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
            whileHover={{
            x: 6,
            transition: {
                duration: 0.3,
                ease: "easeOut",
            },
            }}
        >
            <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
        </motion.svg>
        </motion.button>
      </div>
    </div>
  );
}