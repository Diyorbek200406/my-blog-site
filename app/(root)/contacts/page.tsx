"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Contacts = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
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
        <Link href={"/"}>
          <Button>Home Page</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Contacts;
