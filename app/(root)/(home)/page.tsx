"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import MyImage from "@/public/2023-12-06 22.31.19.jpg";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <Image className="rounded rounded-t-xl object-cover" src={MyImage} width={250} alt="Image" />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}>
        <h1>Diyorbek Erkinov</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}>
        <p>
          I'm a <TypeAnimation sequence={["D", 2000, "De", 2000, "Dev", 2000]} repeat={Infinity} />
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}>
        <p color={"gray.500"}>If you want to know more about me, click the button</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}>
        <div className="flex gap-4">
          <Link href={"/about"}>
            <Button>More About</Button>
          </Link>

          <a href={"./Diyorbek.pdf"} download>
            <Button variant={"outline"}>Download CV</Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
