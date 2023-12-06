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
        <p color={"gray.500"}>If you want to know more about me, click the button</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
      >
        <Link href={"/blogs"}>
          <Button>More Blogs</Button>
        </Link>
      </motion.div>

      <div>
        <h1 className="text-5xl font-bold text-center">My Skills</h1>

        {mySkills.map((skill, idx) => (
          <div key={idx}>
            <p className="text-2xl my-4 font-bold">{skill.title}</p>

            <div className="flex gap-8 flex-wrap max-w-5xl items-center">
              {skill.skills.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center justify-between gap-y-2 cursor-pointer">
                  <Image priority src={item.href} alt="Skill" className="rounded object-cover" width={100} height={100} />
                  <p>{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
