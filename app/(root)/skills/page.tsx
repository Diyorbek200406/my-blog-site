"use client";

import { mySkills } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

const Skills = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold">Skills</h1>
      </motion.div>

      {mySkills.map((skill, index) => (
        <div key={index} className="w-3/5">
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -500 }}
            animate={{ scale: 1, opacity: 1, x: 0 }}
            exit={{ scale: 0, opacity: 0, x: 500 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
          >
            <h2 className="text-3xl my-8 font-bold">{skill.title}</h2>
          </motion.div>

          <div className="flex flex-wrap justify-between gap-4">
            {skill.skills.map((item, idx) => (
              <motion.div
                initial={{ scale: 0, opacity: 0, x: -500 }}
                animate={{ scale: 1, opacity: 1, x: 0 }}
                exit={{ scale: 0, opacity: 0, x: 500 }}
                transition={{ duration: 1, delay: 0.3 * idx + index, ease: "easeInOut" }}
                key={idx}
                className="bg-slate-300 w-full sm:w-max hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-900 px-8 py-4 rounded-lg cursor-pointer flex flex-col items-center justify-between gap-4"
              >
                <Image
                  priority
                  src={item.href}
                  alt="Skill"
                  className="rounded-lg object-fill bg-transparent"
                  width={100}
                  height={100}
                />
                <p>{item.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
