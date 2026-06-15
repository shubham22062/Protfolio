"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useState } from "react";

function Logo() {
  const { scene } = useGLTF("/logo.glb");
  return <primitive object={scene} scale={3.5} rotation={[0, 0, 0]} />;
}

type Ripple = {
  x: number;
  y: number;
  id: number;
  delay: number;
};

export default function Landing() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
  if (!audioRef.current) {
    audioRef.current = new Audio("/water.mp3");
    audioRef.current.volume = 0.5;
    audioRef.current.preload = "auto";
  }

  audioRef.current.currentTime = 0;

  const playPromise = audioRef.current.play();

  if (playPromise !== undefined) {
    playPromise.catch((err) => {
      console.log("Audio blocked or not ready:", err);
    });
  }
};

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
  const x = e.clientX;
  const y = e.clientY;

  const baseId = Date.now();

  const waves: Ripple[] = [
    { x, y, id: baseId + 1, delay: 0 },
    { x, y, id: baseId + 2, delay: 240 },
    { x, y, id: baseId + 3, delay: 360 },
    { x, y, id: baseId + 4, delay: 460},
  ];

  setRipples((prev) => [...prev, ...waves]);

  playSound();

  setTimeout(() => {
    setRipples((prev) => prev.filter((r) => r.id < baseId || r.id > baseId + 10));
  }, 1200);
};

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={handleClick}
    >
      {/* Background Image */}
      <img
        src="/Landing.svg"
        alt="Landing"
        className="absolute inset-0 w-full h-full object-cover"
      />

            <div className="fixed inset-0 pointer-events-none z-50">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple"
            style={{
              left: r.x,
              top: r.y,
              animationDelay: `${r.delay}ms`,
            }}
          />
        ))}
      </div>

      {/* Glow Effect Behind Model */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none mt-80">
        <div className="w-[300px] sm:w-[300px] md:w-[400px] h-[180px] sm:h-[220px] md:h-[260px] rounded-full bg-red-500/20 blur-3xl translate-y-[20%]" />
      </div>

      {/* 3D Model */}
      <div className="absolute inset-0 flex items-center justify-center translate-y-[20%] sm:translate-y-[25%] md:translate-y-[30%] animate-float">
        <div className="w-full max-w-[1000px] h-[300px] sm:h-[400px] md:h-[500px]">
          <Canvas camera={{ position: [0, 0, 60], fov: 45 }}>
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={5} />
            <pointLight position={[-5, 5, 5]} intensity={3} />
            <pointLight position={[5, -5, 5]} intensity={2} />

            <Logo />

            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </div>
      </div>
    </div>
  );
}