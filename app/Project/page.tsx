"use client"

import { useRouter } from "next/navigation";

export default function MyWork(){
    const router = useRouter();
    return(
        <div className="mt-10 relative">
            <h1 className="text-red-500 font-semibold text-4xl text-center animate-bounce">My Work</h1>
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
        </div>
    )
}