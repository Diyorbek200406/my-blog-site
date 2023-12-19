"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { myBackendSkills, myDatabaseSkills, myFrontendSkills } from "@/lib/constants";

const Skills = () => {
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="flex flex-col items-center gap-y-4">
      <h1 className="text-5xl font-bold">Skills</h1>

      <h2 className="text-3xl my-8 font-bold">Frontend</h2>

      <motion.div className="w-3/5 flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 0.7, ease: "linear" }}>
        {myFrontendSkills.map((skill, index) => (
          <motion.div key={index} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 1, delay: 0.3 * (index + 1), ease: "easeInOut" }} className="bg-slate-300 w-[120px] h-[100px] hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-900 py-2 rounded-lg cursor-pointer flex flex-col items-center justify-between gap-2">
            <Image priority src={skill.href} alt="Skill" className="rounded-lg object-fill bg-transparent" width={50} height={50} />
            <p>{skill.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <h2 className="text-3xl my-8 font-bold">Backend</h2>

      <motion.div className="w-3/5 flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 0.7, ease: "linear" }}>
        {myBackendSkills.map((skill, index) => (
          <motion.div key={index} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 1, delay: 0.3 * (index + 1), ease: "easeInOut" }} className="bg-slate-300 w-[120px] h-[100px] hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-900 py-2 rounded-lg cursor-pointer flex flex-col items-center justify-between gap-2">
            <Image priority src={skill.href} alt="Skill" className="rounded-lg object-fill bg-transparent" width={50} height={50} />
            <p>{skill.title}</p>
          </motion.div>
        ))}
      </motion.div>

      <h2 className="text-3xl my-8 font-bold">Database</h2>

      <motion.div className="w-3/5 flex flex-wrap gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1, delay: 0.7, ease: "linear" }}>
        {myDatabaseSkills.map((skill, index) => (
          <motion.div key={index} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0, opacity: 0 }} transition={{ duration: 1, delay: 0.3 * (index + 1), ease: "easeInOut" }} className="bg-slate-300  w-[120px] h-[100px] hover:bg-slate-500 dark:bg-slate-800 dark:hover:bg-slate-900 py-2 rounded-lg cursor-pointer flex flex-col items-center justify-between gap-2">
            <Image priority src={skill.href} alt="Skill" className="rounded-lg object-fill bg-transparent" width={50} height={50} />
            <p>{skill.title}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
