"use client";

import { motion } from "framer-motion";

const languages = [
  {
    name: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png",
    level: "Advanced",
    value: 90,
  },
  {
    name: "JavaScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    level: "Advanced",
    value: 92,
  },
  {
    name: "Python",
    icon: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
    level: "Intermediate",
    value: 75,
  },
  {
    name: "C++",
    icon: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
    level: "Advanced",
    value: 95,
  },
  {
    name: "Java",
    icon: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    level: "Intermediate",
    value: 65,
  },
];

export default function CoreLanguages() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {languages.map((language) => (
        <div
          key={language.name}
          className="border border-gray-800 bg-black/20 backdrop-blur-sm rounded-xl p-5 hover:border-red-500/60 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="border border-gray-700 rounded-lg p-2 bg-zinc-900">
              <img
                src={language.icon}
                alt={language.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-red-500">
                  {language.name}
                </h2>

                <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {language.level}
                </span>
              </div>

              <p className="text-xs tracking-widest text-gray-500 mt-1">
                PROFICIENCY
              </p>

              <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${language.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2 }}
                  className="h-full rounded-full bg-gradient-to-r from-red-700 via-red-500 to-red-400"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}