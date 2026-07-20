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
    <div className="pt-24">
      <h1 className="text-red-500 text-6xl animate-bounce font-bold text-center">
        Tech Arsenal
      </h1>

      <div className="flex gap-20 mt-20 px-20">
        {/* Left Side */}
        <div className="flex flex-col gap-6 w-72">
          <span
            onClick={() => setActiveTab("core")}
            className={`cursor-pointer px-8 py-4 border rounded-md transition-all ${
              activeTab === "core"
                ? "border-red-500 text-red-500"
                : "border-gray-400 text-white"
            }`}
          >
            CORE_LANGUAGES
          </span>

          <span
            onClick={() => setActiveTab("frontend")}
            className={`cursor-pointer px-8 py-4 border rounded-md transition-all ${
              activeTab === "frontend"
                ? "border-red-500 text-red-500"
                : "border-gray-400 text-white"
            }`}
          >
            FRONTEND_OPS
          </span>

          <span
            onClick={() => setActiveTab("backend")}
            className={`cursor-pointer px-8 py-4 border rounded-md transition-all ${
              activeTab === "backend"
                ? "border-red-500 text-red-500"
                : "border-gray-400 text-white"
            }`}
          >
            BACKEND_SYS
          </span>

          <span
            onClick={() => setActiveTab("data")}
            className={`cursor-pointer px-8 py-4 border rounded-md transition-all ${
              activeTab === "data"
                ? "border-red-500 text-red-500"
                : "border-gray-400 text-white"
            }`}
          >
            DATA_CORE
          </span>

          <span
            onClick={() => setActiveTab("devops")}
            className={`cursor-pointer px-8 py-4 border rounded-md transition-all ${
              activeTab === "devops"
                ? "border-red-500 text-red-500"
                : "border-gray-400 text-white"
            }`}
          >
            DEVOPS_CLOUD
          </span>
        </div>

        {/* Right Side */}
        <div className="relative border-2 border-red-500 rounded-lg w-[900px] h-[400px] overflow-hidden">
          <img
            src="/grid.svg"
            alt="background"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />

          <div className="relative z-10 p-8">
            {tabs[activeTab as keyof typeof tabs]}
          </div>
        </div>
      </div>
    </div>
  );
}