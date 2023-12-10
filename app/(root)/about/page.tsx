"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import MyImage from "@/public/2023-12-06 22.31.19.jpg";
import Link from "next/link";
import CountUp from "react-countup";
import ReactTypingEffect from "react-typing-effect";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}>
        <h1>Diyorbek Erkinov</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, ease: "easeInOut" }}>
        <Image className="rounded rounded-t-xl object-cover" src={MyImage} width={250} alt="Image" />
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}>
        <p color={"gray.500"}>
          First Name : <ReactTypingEffect text={["Diyorbek"]} />
        </p>
        <p color={"gray.500"}>Last Name : Erkinov</p>
        <p color={"gray.500"}>
          Date Of Birth : <CountUp delay={2} end={2004} />
        </p>
        <p color={"gray.500"}>
          Age : <CountUp delay={2} end={20} />
        </p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}>
        <Link href={"/projects"}>
          <Button>More Projects</Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
