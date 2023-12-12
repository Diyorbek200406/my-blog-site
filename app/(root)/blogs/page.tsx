"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Blogs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <h1 className="text-5xl font-bold">Blogs</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
        className="flex flex-col items-center justify-center gap-4"
      ></motion.div>
    </div>
  );
};

export default Blogs;
