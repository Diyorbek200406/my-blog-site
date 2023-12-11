"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";

const Contacts = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}>
        <h1>Diyorbek Erkinov</h1>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}>
        <p color={"gray.500"}>If you want to know more about me, click the button</p>
      </motion.div>

      <motion.div initial={{ opacity: 0, x: -500 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 500 }} transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}>
        <Link href={"/"}>
          <Button>Home Page</Button>
        </Link>
      </motion.div>

      <form className="flex gap-12">
        <div className="flex-1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime amet accusamus praesentium distinctio eligendi tempore quasi pariatur, quas dolor ipsa neque aspernatur harum commodi
          excepturi aut possimus doloribus quia itaque delectus quos tenetur sunt veniam consectetur. Esse voluptatem sint id molestias modi soluta quibusdam. Temporibus inventore porro non tempora
          laudantium.
        </div>

        <div className="flex-1">
          <Input type="text" placeholder="Your Name" />
          <PhoneInput defaultCountry="uz" value={phone} onChange={(phone) => setPhone(phone)} />
          <Input type="email" placeholder="Your Email" />
          <button>Send</button>
        </div>
      </form>
    </div>
  );
};

export default Contacts;
