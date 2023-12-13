"use client";

import { Button } from "@/components/ui/button";
import { blogs } from "@/lib/blogs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BlogDetail = () => {
  const pathname = usePathname().split(`/`)[2];

  const blog = blogs.find((blog) => blog.route === pathname);

  return (
    <div className="flex flex-col items-center">
      <Link href={"/blogs"} className="w-full my-4">
        <Button variant={"outline"} className="px-8 w-full">
          Back
        </Button>
      </Link>

      <h1 className="text-3xl font-bold">{blog?.title}</h1>

      <p className="py-4">{blog?.description}</p>

      <Button>{blog?.date}</Button>
    </div>
  );
};

export default BlogDetail;
