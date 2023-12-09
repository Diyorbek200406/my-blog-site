"use client";

import { Button } from "@/components/ui/button";
import { myProjects } from "@/lib/constants";
import { motion } from "framer-motion";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}>
        <h1>Diyorbek Erkinov</h1>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}>
        <p color={"gray.500"}>If you want to know more about me, click the button</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}>
        <Link href={"/skills"}>
          <Button>More Skills</Button>
        </Link>
      </motion.div>

      {myProjects.map((project) => (
        <div>
          <Link href={project.route}>{project.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Projects;
