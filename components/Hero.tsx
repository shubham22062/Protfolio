"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (hasEnded) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setHasEnded(false);
      setIsPlaying(true);
      return;
    }

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      className="px-3 pt-5 flex relative min-h-screen"
      initial={{
        opacity: 0,
        y: 150,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        amount: 0.3,
        once: false,
      }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        playsInline
        onEnded={() => {
          setHasEnded(true);
          setIsPlaying(false);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          if (!hasEnded) setIsPlaying(false);
        }}
        className="h-[800px]"
      >
        <source
          src="https://res.cloudinary.com/dbdvicxun/video/upload/v1781599530/b_Animate_the_characte_online-video-cutter.com_fb230s.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

      <div className="pt-50 pl-40">
        <span className="text-6xl font-bold block text-red-500 text-center animate-title">
          Hi I'm Shubham Awasthi
        </span>

        <span className="text-5xl font-bold block text-white text-center pt-4 animate-subtitle">
          Software Engineer
        </span>

        <p className="text-xl text-gray-400 max-w-6xl pt-10 text-center animate-description">
          Driven by curiosity and innovation, I build modern web applications
          Driven by curiosity and innovation, I build modern web applications
          that combine clean design with powerful functionality. With expertise
          in full-stack development and AI technologies, I strive to create
          products that solve real-world problems.
        </p>

        <div className="flex items-center gap-6 mt-[80px] pl-10 animate-btn">
          <button
            onClick={toggleVideo}
            className="absolute w-[150px] h-[50px] bg-red-500 ml-[150px] text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            {hasEnded ? "Replay" : isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>

          <div className="border border-gray-100 flex bg-white text-black items-center rounded-3xl p-3 gap-2 w-[150px] h-[50px] ml-[350px] transition-transform duration-300 hover:scale-105">
            <a
              href="/resume.pdf"
              target="_blank"
              className="relative group"
            >
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>

                <span>Resume</span>
              </div>

              <span
                className="absolute -bottom-8 left-1/2 -translate-x-1/2
                opacity-0 group-hover:opacity-100
                transition-all duration-200
                text-xs px-2 py-1 rounded-md whitespace-nowrap
                bg-black text-white dark:bg-white dark:text-black"
              >
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}