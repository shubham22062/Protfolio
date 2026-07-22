"use client";

import { motion } from "framer-motion";

const devopsCloud = [
  {
    name: "Git",
    icon: "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg",
    level: "Advanced",
    value: 92,
  },
  {
    name: "GitHub",
    icon: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    level: "Advanced",
    value: 90,
  },
  {
    name: "Docker",
    icon: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg",
    level: "Intermediate",
    value: 75,
  },
  {
    name: "Postman",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    level: "Advanced",
    value: 90,
  },
  {
    name: "Vercel",
    icon: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
    level: "Advanced",
    value: 88,
  },
  {
    name: "Render",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThajqzWJEYzbE_U8FjMVIUDK-_ngBjFCfDeidm2SCp3_cT000DNW0CnRi1&s=10",
    level: "Intermediate",
    value: 80,
  },
  {
    name: "Cloudinary",
    icon: "https://cdn.prod.website-files.com/64d41aab8183c7c3324ddb29/674f5ebd0de31390e6f53218_3-logo-brand-square.svg",
    level: "Advanced",
    value: 87,
  },
  
];

export default function DevOpsCloud() {
  return (
    <div className="grid lg:grid-cols-2 gap-6">
      {devopsCloud.map((tool) => (
        <div
          key={tool.name}
          className="border border-gray-800 bg-black/20 backdrop-blur-sm rounded-xl p-5 hover:border-red-500/60 transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className="border border-gray-700 rounded-lg p-2 bg-zinc-900">
              <img
                src={tool.icon}
                alt={tool.name}
                className="w-10 h-10 object-contain"
              />
            </div>

            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-red-500">
                  {tool.name}
                </h2>

                <span className="text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {tool.level}
                </span>
              </div>

              <p className="text-xs tracking-widest text-gray-500 mt-1">
                PROFICIENCY
              </p>

              <div className="mt-3 h-2 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${tool.value}%` }}
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