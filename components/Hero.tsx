"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
} from "@heroicons/react/24/outline";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [hasEnded, setHasEnded] = useState(false);

  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () =>{
    if(!videoRef.current) return;

    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted)
  }


  const isInView = useInView(heroRef, {
    amount: 0.4,
  });

  useEffect(() => {
    if (!videoRef.current || hasEnded) return;

    if (isInView) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, [isInView, hasEnded]);

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
      ref={heroRef}
      className="px-3 pt-5 flex relative min-h-screen"
      initial={{ opacity: 0, y: 120, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.4, once: false }}
      transition={{
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={() => {
          setHasEnded(true);
          setIsPlaying(false);
        }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => {
          if (!hasEnded) setIsPlaying(false);
        }}
        className="h-[780px] mt-[20px] ml-[20px] object-cover video-mask opacity-90"
      >
        <source
          src="https://res.cloudinary.com/dbdvicxun/video/upload/v1781599530/b_Animate_the_characte_online-video-cutter.com_fb230s.mp4"
          type="video/mp4"
        />
      </video>

      {/* GRADIENT */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />

        <button onClick={toggleMute}>
            {isMuted ? (
                <SpeakerXMarkIcon className="h-7 w-7 text-white hover:scale-105 transition-transform duration-300" />
            ) : (
                <SpeakerWaveIcon className="h-7 w-7 text-white hover:scale-105 transition-transform duration-300" />
            )}
        </button>

      {/* TEXT SECTION */}
      <div className="pt-70 pl-30">
        {/* NAME */}
        <motion.span
          initial={{ opacity: 0, y: 80, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-6xl font-bold block text-red-500 text-center"
        >
          Hi I'm Shubham Awasthi
        </motion.span>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold text-white text-center pt-4"
        >
          <Typewriter
            words={[
              "Software Engineer",
              "Full Stack Developer",
              "Bulid Scalable web App",
              "AI Enthusiast",
              "Problem Solver",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={80}
            deleteSpeed={50}
            delaySpeed={1200}
          />
        </motion.div>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: "easeOut",
          }}
          className="text-lg text-gray-400 max-w-2xl pt-8 text-center"
        >
          Driven by curiosity and innovation, I build modern web applications
          that combine clean design with powerful functionality. With expertise
          in full-stack development and AI technologies, I strive to create
          products that solve real-world problems.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: "easeOut",
          }}
          className="flex items-center gap-6 mt-[50px] pl-10"
        >
          <button
            onClick={toggleVideo}
            className="absolute w-[150px] h-[50px] bg-red-500 ml-[150px] text-white px-6 py-3 rounded-full hover:scale-105 transition"
          >
            {hasEnded ? "Replay" : isPlaying ? "⏸ Pause" : "▶ Play"}
          </button>

          <div className="border border-gray-100 flex bg-white text-black items-center rounded-3xl p-3 gap-2 w-[150px] h-[50px] ml-[350px] transition-transform duration-300 hover:scale-105">
            <a href="/resume.pdf" target="_blank" className="relative group">
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

              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 text-xs px-2 py-1 rounded-md whitespace-nowrap bg-black text-white">
                Resume
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}