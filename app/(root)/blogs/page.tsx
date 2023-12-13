"use client";

import { blogs } from "@/lib/blogs";
import { motion } from "framer-motion";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}>
        <h1 className="text-5xl font-bold">Blogs</h1>
      </motion.div>

      <ul className="flex flex-col items-center justify-center gap-4">
        {blogs.map((blog, idx) => (
          <motion.li initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.4 * (idx + 1), ease: "easeInOut" }} key={idx} className="p-4 mt-1 w-full bg-slate-400 rounded-md">
            <Link href={`blogs/${blog.route}`} className="flex items-center justify-between">
              <div className="w-[20%]">
                <p className="text-lg font-semibold">{blog.date}</p>
              </div>

              <div className="w-[80%]">
                <h3 className="text-2xl font-bold">{blog.title}</h3>
                <p className="text-lg font-semibold line-clamp-1">{blog.description}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
