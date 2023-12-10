"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MyImage from "@/public/2023-12-06 22.31.19.jpg";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <Image className="rounded rounded-t-xl object-cover" src={MyImage} width={250} alt="Image" />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}>
        <h1>
          <ReactTypingEffect cursor=" " text={["Erkinov Diyorbek"]} />
        </h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}>
        <p>
          <ReactTypingEffect cursor=" " text={["I'm a Frontend Developer", "I'm a Backend Developer", "I'm a Full Stack Developer"]} />
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}>
        <p color={"gray.500"}>If You Want To Know More About Me, Click The Button</p>
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
