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

      <span className="block text-center pt-4 text-red-500 text-7xl font-bold hover:animate-bounce transition">
        About Me.
      </span>

      {/* GitHub Card */}
      <div className="flex gap-18">
        <div className="ml-10">
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


    <div>
        <h1 className="font-semibold text-4xl mt-15">Comfortable shipping, not just prototyping.</h1>
        <p className="mt-8 text-gray-400 max-w-xl">I'm a final-year Computer Engineering student at NIMS Institute of Engineering & Technology, graduating in 2026. 
            Most of what I build ends up deployed with real users attached — MeshSpire and my Financial Dashboard are both running in production,
             which forces a different level of care than a class project ever does.</p>

        <p className="mt-4 text-gray-400 max-w-xl">Lately I've been pulling GenAI into the stack: retrieval-augmented pipelines, agentic workflows, and vector search, alongside the MERN and WebRTC work I started with. I also keep my problem-solving sharp through competitive programming 
            — I've competed in Flipkart GRiD — and contribute to open source through SSOC.</p>

            <div className="mt-16 flex gap-15 ml-10">
                <a
                  href="https://github.com/shubham22062"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <img src="github.svg" alt="github" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
                </a>

                <a
                  href="https://www.linkedin.com/in/shubham-awasthi-310520291/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <img src="Linkedin.svg" alt="linkedIn" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
                </a>


                <a
                  href="https://x.com/Awa24777Shubham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                >
                    <img src="twitter.svg" alt="twitter" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
                </a>


                <a
                    href="mailto:shubhamawasthi021@gmail.com"
                    aria-label="Send me an email"
                
                >
                    <img src="email.svg" alt="email" className="w-12 h-12 bg-white border rounded-full transition-transform duration-300 hover:scale-105"/>
                </a>
                
                
            </div>
    </div>

      
      
      </div>
    </div>
  );
}