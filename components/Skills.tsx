"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationControls,
  useInView,
} from "framer-motion";

import CoreLanguages from "./CoreLanguages";
import FrontendOps from "./FrontendOps";
import BackendSys from "./BackendSys";
import DataCore from "./DataCore";
import DevOpsCloud from "./DevOpsCloud";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("core");

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {
    amount: 0.2,
  });

  const controls = useAnimationControls();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const tabs = {
    core: <CoreLanguages />,
    frontend: <FrontendOps />,
    backend: <BackendSys />,
    data: <DataCore />,
    devops: <DevOpsCloud />,
  };

  return (
    <motion.section
      ref={sectionRef}
      className="pt-24 px-6 lg:px-20"
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 80,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.8,
            ease: "easeOut",
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {/* Heading */}
      <motion.h1
        className="text-red-500 text-5xl font-bold text-center animate-bounce"
        variants={{
          hidden: {
            opacity: 0,
            y: -40,
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
            },
          },
        }}
      >
        Tech Arsenal
      </motion.h1>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-20 items-start">
        {/* Sidebar */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-72 shrink-0"
          variants={{
            hidden: {
              opacity: 0,
              x: -80,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
              },
            },
          }}
        >
          <button
            onClick={() => setActiveTab("core")}
            className={`text-left cursor-pointer px-8 py-4 border rounded-lg transition-all duration-300 hover:border-red-500 hover:text-red-500 ${
              activeTab === "core"
                ? "border-red-500 text-red-500"
                : "border-gray-700 text-white"
            }`}
          >
            CORE_LANGUAGES
          </button>

          <button
            onClick={() => setActiveTab("frontend")}
            className={`text-left cursor-pointer px-8 py-4 border rounded-lg transition-all duration-300 hover:border-red-500 hover:text-red-500 ${
              activeTab === "frontend"
                ? "border-red-500 text-red-500"
                : "border-gray-700 text-white"
            }`}
          >
            FRONTEND_OPS
          </button>

          <button
            onClick={() => setActiveTab("backend")}
            className={`text-left cursor-pointer px-8 py-4 border rounded-lg transition-all duration-300 hover:border-red-500 hover:text-red-500 ${
              activeTab === "backend"
                ? "border-red-500 text-red-500"
                : "border-gray-700 text-white"
            }`}
          >
            BACKEND_SYS
          </button>

          <button
            onClick={() => setActiveTab("data")}
            className={`text-left cursor-pointer px-8 py-4 border rounded-lg transition-all duration-300 hover:border-red-500 hover:text-red-500 ${
              activeTab === "data"
                ? "border-red-500 text-red-500"
                : "border-gray-700 text-white"
            }`}
          >
            DATA_CORE
          </button>

          <button
            onClick={() => setActiveTab("devops")}
            className={`text-left cursor-pointer px-8 py-4 border rounded-lg transition-all duration-300 hover:border-red-500 hover:text-red-500 ${
              activeTab === "devops"
                ? "border-red-500 text-red-500"
                : "border-gray-700 text-white"
            }`}
          >
            DEVOPS_CLOUD
          </button>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="relative flex-1 min-h-[450px] border-2 border-red-500 rounded-xl overflow-hidden"
          variants={{
            hidden: {
              opacity: 0,
              x: 80,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.7,
              },
            },
          }}
        >
          {/* Background */}
          <img
            src="/grid.svg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="relative z-10 p-8"
          >
            {tabs[activeTab as keyof typeof tabs]}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}