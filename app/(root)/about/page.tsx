"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MyImage from "@/public/Diyorbek.jpg";
import CountUp from "react-countup";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image priority className="rounded rounded-t-xl object-cover" src={MyImage} width={250} alt="Image" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
      >
        <p color={"gray.500"}>First Name : Diyorbek</p>
        <p color={"gray.500"}>Last Name : Erkinov</p>
        <p color={"gray.500"}>
          Date Of Birth : <CountUp delay={2} end={2004} />
        </p>
        <p color={"gray.500"}>
          Age : <CountUp delay={2} end={20} />
        </p>
      </motion.div>
    </div>
  );
};

export default About;
