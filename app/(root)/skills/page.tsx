"use client";

import { Button } from "@/components/ui/button";
import { mySkills } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Skills = () => {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
      >
        <h1>Diyorbek Erkinov</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <Link href={"/blogs"}>
          <Button>More Blogs</Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold text-center">My Skills</h1>
      </motion.div>

      {mySkills.map((skill, idx) => (
        <div key={idx} className="w-3/5">
          <h2 className="text-3xl my-8 font-bold">{skill.title}</h2>

          <div className="flex flex-wrap justify-center gap-8">
            {skill.skills.map((item, idx) => (
              <div key={idx} className="cursor-pointer flex flex-col items-center justify-between gap-4">
                <Image priority src={item.href} alt="Skill" className="rounded-lg object-fill w-20 h-20 bg-transparent" width={80} height={80} />
                <p>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
