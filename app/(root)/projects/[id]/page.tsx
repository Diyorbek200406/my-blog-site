"use client";

import { Button } from "@/components/ui/button";
import { myProjects } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ProjectDetail = () => {
  const pathname = usePathname().split(`/`)[2];
  const project = myProjects.find((project) => project.name.toLowerCase() === pathname);

  return (
    <div>
      <h1 className="text-5xl font-bold py-8 text-center">{project?.name}</h1>

      <div className="px-8">
        <Link href={"/projects"}>
          <Button>Back</Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 p-8">
        <div className="flex-1 flex items-center justify-center">
          <Image className="rounded-xl" src={project?.image} alt={"project"} width={400} height={400} />
        </div>

        <div className="flex-1">
          <h2>
            Project Name : <span className="text-slate-400">{project?.name}</span>
          </h2>
          <p className="py-4">
            Description : <span className="text-slate-400">{project?.description}</span>
          </p>

          <div className="flex flex-wrap items-center justify-start gap-2">
            <h2>Technologies used in the project:</h2>
            {project?.technologies?.map((item, index) => (
              <Button variant={"ghost"} key={index} className="text-slate-600 pt-1">
                {item}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-8 w-full">
            <Link className="w-full" href={project?.route as string} target="_blank">
              <Button variant={"outline"} className="text-blue-400 w-full outline-dotted my-4">
                Live Demo
              </Button>
            </Link>

            <Link className="w-full" href={project?.github as string} target="_blank">
              <Button variant={"outline"} className="text-green-400 w-full outline-dotted my-4">
                Github Code
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
