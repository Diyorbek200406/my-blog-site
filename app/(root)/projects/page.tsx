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

      <main className="grid grid-cols-3 gap-8">
        {myProjects.map((project, idx) => (
          <div key={idx} className="max-w-sm rounded overflow-hidden shadow-lg">
            <Image priority className="w-full h-56" src={project.image} alt="Sunset in the mountains" width={100} height={100} />

            <div className="p-4">
              <h2 className="font-bold text-xl">{project.name}</h2>
              <p className="text-slate-500 py-4">Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>

              <Link href={project.route} target="_blank">
                <Button className="flex items-center justify-center gap-4">
                  <p className="text-lg">Link</p>
                  <ExternalLink />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
};

export default Projects;
