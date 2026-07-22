"use client";

import { motion } from "framer-motion";

export default function ContactMe() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-8 lg:px-16 py-28 overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="text-5xl md:text-6xl font-bold mb-5"
          >
            Let's{" "}
            <span className="text-red-500 animate-pulse">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-gray-400 text-lg leading-8 max-w-lg mb-10"
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Fill out the form below and let's build something amazing
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />

            <textarea
              rows={6}
              placeholder="Write your message..."
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 outline-none resize-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />

            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(239,68,68,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex justify-center lg:justify-end"
        >
          <motion.img
            src="/Mine.png"
            alt="Shubham"
            className="h-[720px] object-contain select-none pointer-events-none"
            whileHover={{
              scale: 1.03,
              y: -8,
            }}
            transition={{
              duration: 0.3,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}