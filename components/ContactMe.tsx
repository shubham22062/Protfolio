"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactMe() {

  const [form,setForm] = useState({
    name:"",
    email:"",
    message:"",
  })

  const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
    setLoading(true);

  if (!form.name || !form.email || !form.message) {
    alert("Please fill all fields.");
    setLoading(false);
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(form.email)) {
    alert("Please enter a valid email.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (data.success) {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert(data.message || "Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};



  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-8 lg:px-16 py-16 sm:py-28 overflow-hidden">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once:false, amount: 0.3 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-5"
          >
            Let's{" "}
            <span className="text-red-500 animate-pulse">Connect</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 max-w-lg mb-8 sm:mb-10"
          >
            Have a project in mind or just want to say hello? I'd love to hear
            from you. Fill out the form below and let's build something amazing
            together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="space-y-4 sm:space-y-5"
          >
            <input
              type="text"
              value={form.name}
              onChange={(e)=> setForm({...form,name:e.target.value})}
              placeholder="Your Name"
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />

            <input
              type="email"
              value={form.email}
              onChange={(e)=>setForm({...form, email:e.target.value})}
              placeholder="Email Address"
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />

            <textarea
              rows={6}
              value={form.message}
              onChange={(e)=>setForm({...form, message:e.target.value})}
              placeholder="Write your message..."
              className="w-full rounded-xl bg-neutral-900 border border-neutral-700 px-5 py-4 outline-none resize-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all duration-300"
            />

            <motion.button
             onClick={sendMessage}
             disabled={loading}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(239,68,68,0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 hover:bg-red-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="flex justify-center lg:justify-end"
        >
          <motion.img
            src="/Mine.png"
            alt="Shubham"
            className="h-[320px] sm:h-[520px] lg:h-[720px] object-contain select-none pointer-events-none"
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