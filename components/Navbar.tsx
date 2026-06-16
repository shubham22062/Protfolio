"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // show navbar after landing (1 screen height)
      setShow(window.scrollY > window.innerHeight - 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0 backdrop-blur-md bg-black/40"
          : "opacity-0 -translate-y-10 pointer-events-none"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src="/hacker.svg"
            alt="logo"
            className="w-12 h-12 hover:rotate-12 transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#home" className="text-gray-300 hover:text-red-500 transition">
            Home
          </a>
          <a href="#projects" className="text-gray-300 hover:text-red-500 transition">
            Projects
          </a>
          <a href="#experience" className="text-gray-300 hover:text-red-500 transition">
            Experience
          </a>
          <a href="#skills" className="text-gray-300 hover:text-red-500 transition">
            Skills
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/shubham22062"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/github.svg"
              alt="github"
              className="w-10 h-10 bg-white rounded-full p-1 hover:scale-110 transition"
            />
          </a>

          <button className="px-5 py-2 rounded-lg bg-red-500/20 text-white font-semibold hover:bg-red-600/20 hover:scale-105 transition-all duration-300">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
}