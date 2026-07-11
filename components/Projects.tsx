"use client";

import { easeOut, motion} from "framer-motion";
import Card from "./Card";

const headingVariants = {
  hidden: {
    opacity: 0,
    y: -60,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: easeOut,
    },
  },
};

export default function Projects() {
  return (
    <section className="pt-24 pb-20">
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="text-center text-red-500 text-6xl font-bold animate-bounce"
      >
        Stuff I Built
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.3 }}
      >
        <Card />
      </motion.div>
    </section>
  );
}