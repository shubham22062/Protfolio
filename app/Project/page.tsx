"use client";

import Fixedlogo from "@/components/Fixedlogo";
import Footer from "@/components/Footer";
import WorkCard from "@/components/WorkCard";
import { useRouter } from "next/navigation";

export default function MyWork() {
  const router = useRouter();

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="https://res.cloudinary.com/dbdvicxun/video/upload/v1785399967/15063174_3840_2160_25fps_1_mxhmbl.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      

      {/* Content */}
      <div className="relative z-10">
        <div className="pt-10">
          <h1 className="text-white font-bold text-4xl text-center">
            Projects
          </h1>

          <h1 className="text-red-500 font-bold text-6xl text-center animate-bounce pt-2">
            That I've Created
          </h1>

          {/* Close Button */}
          <button
            onClick={() => router.push("/")}
            className="absolute top-6 right-6 text-white hover:text-red-500 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <WorkCard />

          <div className="mt-6">
            <Footer />
          </div>

          <Fixedlogo />
        </div>
      </div>
    </div>
  );
}