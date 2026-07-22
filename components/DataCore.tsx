"use client";

import { motion } from "framer-motion";

const dataCore = [
  {
    name: "MongoDB",
    icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg",
    level: "Advanced",
    value: 90,
  },
  {
    name: "MySQL",
    icon: "https://www.interviewbit.com/blog/wp-content/uploads/2021/10/MySQL-1024x683.png",
    level: "Advanced",
    value: 88,
  },
  {
    name: "PostgreSQL",
    icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg",
    level: "Intermediate",
    value: 75,
  },
  {
    name: "Prisma ORM",
    icon: "https://cdn.worldvectorlogo.com/logos/prisma-2.svg",
    level: "Intermediate",
    value: 78,
  },
  
  {
    name: "Firebase",
    icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    level: "Intermediate",
    value: 70,
  },
];

export default function DataCore() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {dataCore.map((db) => (
        <div
          key={db.name}
          className="border border-gray-800 bg-black/20 backdrop-blur-sm rounded-xl p-5 hover:border-red-500/60 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="border border-gray-700 rounded-lg p-2 bg-zinc-900">
              <img
                src={db.icon}
                alt={db.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-red-500">
                  {db.name}
                </h2>

                <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {db.level}
                </span>
              </div>

              <p className="text-xs tracking-widest text-gray-500 mt-1">
                PROFICIENCY
              </p>

              <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${db.value}%` }}
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