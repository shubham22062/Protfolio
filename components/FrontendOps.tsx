"use client";

import { motion } from "framer-motion";

const frontendSkills = [
  {
    name: "React.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    level: "Advanced",
    value: 92,
  },
  {
    name: "Next.js",
    icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    level: "Advanced",
    value: 90,
  },
  {
    name: "TypeScript",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    level: "Advanced",
    value: 90,
  },
  {
    name: "Tailwind CSS",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    level: "Advanced",
    value: 95,
  },
  {
    name: "HTML5",
    icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    level: "Advanced",
    value: 98,
  },
  {
    name: "CSS3",
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    level: "Advanced",
    value: 95,
  },
  {
    name: "Framer Motion",
    icon: "https://www.ejable.com/wp-content/uploads/2022/04/Framer-Motion-1200x1159.webp",
    level: "Advanced",
    value: 88,
  },
  {
    name: "Redux Toolkit",
    icon: "https://redux.js.org/img/redux.svg",
    level: "Intermediate",
    value: 80,
  },
];

export default function FrontendSkills() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {frontendSkills.map((skill) => (
        <div
          key={skill.name}
          className="border border-gray-800 bg-black/20 backdrop-blur-sm rounded-xl p-5 hover:border-red-500/60 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="border border-gray-700 rounded-lg p-2 bg-zinc-900">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-red-500">
                  {skill.name}
                </h2>

                <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {skill.level}
                </span>
              </div>

              <p className="text-xs tracking-widest text-gray-500 mt-1">
                PROFICIENCY
              </p>

              <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.value}%` }}
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