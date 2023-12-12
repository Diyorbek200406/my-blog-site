"use client";

import { Button } from "@/components/ui/button";
import { myProjects } from "@/lib/constants";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold py-4">Projects</h1>
      </motion.div>

      <main className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 p-4">
        {myProjects.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 1, delay: 0.1 * (idx + 1), ease: "easeInOut" }}
            key={idx}
            className="max-w-sm rounded-xl overflow-hidden dark:shadow-slate-500 shadow-xl shadow-slate-400 p-4 border border-slate-200"
          >
            <Link href={`projects/${project.name.toLowerCase()}`}>
              <Image
                priority
                className="w-full h-56 rounded-xl border border-slate-400"
                src={project.image}
                alt="Sunset in the mountains"
                width={100}
                height={100}
              />

              <h2 className="font-bold text-xl py-2">{project.name}</h2>
              <p className="text-slate-500 pb-2">{project.description}</p>

              <div className="flex items-center justify-between gap-4">
                <Link href={project.route} target="_blank" className="w-full">
                  <Button variant={"outline"} className="flex w-full items-center justify-center gap-4">
                    <p className="text-lg">Link</p>
                    <ExternalLink />
                  </Button>
                </Link>

                <Link href={project.github} target="_blank" className="w-full">
                  <Button className="flex w-full items-center justify-center gap-4">
                    <p className="text-lg">Code</p>
                    <ExternalLink />
                  </Button>
                </Link>
              </div>
            </Link>
          </motion.div>
        ))}
      </main>
    </div>
  );
};

export default Projects;
