"use client";

import { useState } from "react";

import CoreLanguages from "./CoreLanguages";
import FrontendOps from "./FrontendOps";
import BackendSys from "./BackendSys";
import DataCore from "./DataCore";
import DevOpsCloud from "./DevOpsCloud";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("core");

  const tabs = {
    core: <CoreLanguages />,
    frontend: <FrontendOps />,
    backend: <BackendSys />,
    data: <DataCore />,
    devops: <DevOpsCloud />,
  };

  return (
    <section className="pt-24 px-6 lg:px-20">
      {/* Heading */}
      <h1 className="text-red-500 text-5xl font-bold text-center animate-bounce">
        Tech Arsenal
      </h1>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mt-20 items-start">
        {/* Left Sidebar */}
        <div className="flex flex-col gap-6 w-full lg:w-72 shrink-0">
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
        </div>

        {/* Right Content */}
        <div className="relative flex-1 min-h-[450px] border-2 border-red-500 rounded-xl overflow-hidden">
          {/* Background Grid */}
          <img
            src="/grid.svg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
          />

          {/* Active Skills */}
          <div className="relative z-10 p-8">
            {tabs[activeTab as keyof typeof tabs]}
          </div>
        </div>
      </div>
    </section>
  );
}