"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 700,
    damping: 35,
    mass: 0.2,
  });

  const y = useSpring(mouseY, {
    stiffness: 700,
    damping: 35,
    mass: 0.2,
  });

  const [hovering, setHovering] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setHidden(false);
    };

    const leave = () => setHidden(true);
    const enterWindow = () => setHidden(false);

    const down = () => setClicked(true);
    const up = () => setClicked(false);

    const hover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;

      setHovering(
        !!el.closest(
          "a,button,input,textarea,select,[role='button'],[data-cursor]"
        )
      );
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", hover);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("mouseenter", enterWindow);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", hover);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("mouseenter", enterWindow);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Glow */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-[9996] bg-red-500 blur-2xl"
        style={{
          left: x,
          top: y,
          width: 60,
          height: 60,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : hovering ? 0.45 : 0.18,
          scale: hovering ? 1.8 : clicked ? 0.7 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 20,
        }}
      />

      {/* Ring */}
      <motion.div
        className="fixed rounded-full border border-red-400 pointer-events-none z-[9997]"
        style={{
          left: x,
          top: y,
          width: 36,
          height: 36,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: hovering ? 2 : clicked ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />

      {/* Core */}
      <motion.div
        className="fixed rounded-full bg-red-500 pointer-events-none z-[9999]"
        style={{
          left: mouseX,
          top: mouseY,
          width: 5,
          height: 5,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow:
            "0 0 8px #ff2d2d,0 0 16px #ff2d2d,0 0 30px #ff2d2d",
        }}
        animate={{
          opacity: hidden ? 0 : 1,
          scale: clicked ? 0.6 : hovering ? 1.3 : 1,
        }}
        transition={{
          duration: 0.15,
        }}
      />
    </>
  );
}