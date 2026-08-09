"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

function Logo() {
  const { scene } = useGLTF("/logo.glb");
  const [scale, setScale] = useState(3.5);

  useEffect(() => {
    const computeScale = () => {
      const w = window.innerWidth;
      if (w < 640) return 2.2;       // mobile
      if (w < 768) return 2.6;       // large mobile
      if (w < 1024) return 3.0;      // tablet
      return 3.5;                    // desktop (original value)
    };

    setScale(computeScale());

    const handleResize = () => setScale(computeScale());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <primitive
      object={scene}
      scale={scale}
      rotation={[0, 0, 0]}
    />
  );
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

    audioRef.current.play().catch((err) => {
      console.log("Audio blocked:", err);
    });
  };

  // Pointer events unify mouse click + touch tap, so this works the same
  // on desktop, tablet, and mobile without duplicating handlers.
  const handleClick = (e: React.PointerEvent<HTMLDivElement>) => {
    const x = e.clientX;
    const y = e.clientY;

    const baseId = Date.now();

    const waves: Ripple[] = [
      { x, y, id: baseId + 1, delay: 0 },
      { x, y, id: baseId + 2, delay: 120 },
      { x, y, id: baseId + 3, delay: 240 },
      { x, y, id: baseId + 4, delay: 360 },
    ];

    setRipples((prev) => [...prev, ...waves]);

    playSound();

    setTimeout(() => {
      setRipples((prev) =>
        prev.filter((r) => r.id < baseId || r.id > baseId + 10)
      );
    }, 1200);
  };

  return (
    <div
      onPointerDown={handleClick}
      className="relative h-screen w-full overflow-hidden touch-pan-y"
    >
      {/* Background */}
      <img
        src="/Landing.svg"
        alt="Landing"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Ripple */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {ripples.map((r) => (
          <span
            key={r.id}
            className="ripple bg-red-500/20"
            style={{
              left: r.x,
              top: r.y,
              animationDelay: `${r.delay}ms`,
            }}
          />
        ))}
      </div>

      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div
          className="
            translate-y-[28vh]
            w-[180px] h-[100px]
            sm:w-[240px] sm:h-[140px]
            md:w-[320px] md:h-[180px]
            lg:w-[380px] lg:h-[220px]
            rounded-full
            bg-white
            blur-3xl
          "
        />
      </div>

      {/* Model */}
      <div
        className="
          absolute inset-0
          flex items-center justify-center
          translate-y-[20vh]
          sm:translate-y-[22vh]
          md:translate-y-[24vh]
          lg:translate-y-[26vh]
          animate-float
        "
      >
        <div
          className="
            w-full
            max-w-[900px]
            xl:max-w-[1000px]
            h-[260px]
            sm:h-[340px]
            md:h-[420px]
            lg:h-[500px]
            touch-none
          "
        >
          <Canvas
            camera={{ position: [0, 0, 60], fov: 45 }}
            dpr={[1, 2]}
            gl={{ antialias: true }}
          >
            <ambientLight intensity={3} />
            <directionalLight position={[5, 5, 5]} intensity={5} />
            <pointLight position={[-5, 5, 5]} intensity={3} />
            <pointLight position={[5, -5, 5]} intensity={2} />

            <Logo />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              enableDamping
              dampingFactor={0.1}
            />
          </Canvas>
        </div>
      </div>
    </div>
  );
}