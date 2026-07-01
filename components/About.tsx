"use client";

import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(
  () => import("react-github-calendar"),
  { ssr: false }
);

export default function About() {
  return (
    <div className="pt-24 px-4">

      {/* Heading */}
      <h1 className="font-bold text-2xl text-center hover:text-red-500 transition">
        Who Am I
      </h1>

      <span className="block text-center pt-4 text-red-500 text-7xl font-bold hover:text-white transition">
        About Me.
      </span>

      {/* GitHub Card */}
      <div className="mt-16 w-[650px] h-[300px] max-w-3xl bg-black/40 border border-gray-800 rounded-2xl p-6 transition-transform duration-300 hover:scale-105">
      <a href="https://github.com/shubham22062"
        target="_blank"
        rel="noopener noreferrer">
        

        <h2 className="text-lg font-semibold text-gray-300 mb-6">
          GitHub Activity
        </h2>

        <div className="flex justify-center overflow-x-auto">
          <GitHubCalendar username="shubham22062" />
        </div>
        </a>
      </div>
      

    <div className="mt-10 flex gap-6 flex-wrap">

    {/* Card 1 */}
    <a
        href="https://github.com/shubham22062?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
    >
        <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md w-[200px] h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">

        <span className="font-bold text-red-500 text-4xl">90+</span>
        <span className="block text-white text-xl font-semibold mt-2">
            Total Projects
        </span>

        </div>
    </a>

    {/* Card 2 */}
    <a
        href="https://meshspire-landing.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
    >
        <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md w-[200px] h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">

        <span className="font-bold text-red-500 text-4xl">2</span>
        <span className="block text-white text-xl font-semibold mt-2">
            Core SaaS Products
        </span>

        </div>
    </a>

    {/* Card 3 */}
    <a
        href="https://github.com/shubham22062/Awast"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
    >
        <div className="relative border border-gray-800 bg-black/40 backdrop-blur-md w-[200px] h-[130px] rounded-2xl p-4 transition-all duration-300 group-hover:scale-105 group-hover:border-gray-600">

        {/* Green status dot */}
        <span className="absolute top-4 right-4 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>

        <span className="text-lg text-red-500">Currently building</span>
        <span className="block text-white text-2xl mt-2 font-semibold">
            AwastAI
        </span>

        </div>
    </a>

    </div>

      
      

    </div>
  );
}