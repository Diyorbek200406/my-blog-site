"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import { toast } from "react-toastify";

const Contacts = () => {
  const [phone, setPhone] = useState("");

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, gender }: any = e.target;
    toast("Thanks For The Message");
  };

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
        transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
      >
        <Link href={"/"}>
          <Button>Home Page</Button>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 500 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
      >
        <h1 className="text-4xl my-2 font-bold text-center">Contact Us</h1>
        <p className="text-xl my-2 font-semibold text-center">Any question or remark ? Just write us a message.</p>
      </motion.div>

      <form onSubmit={onSubmit} className="flex flex-col lg:flex-row gap-12">
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 500 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          className="flex-1 p-4 bg-gray-300 dark:bg-slate-600 rounded"
        >
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          >
            <h3 className="text-xl font-semibold">We will contact you for sure, fill out the form and send </h3>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 500 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
          >
            <p className="font-semibold text-sm">We will contact you for sure, fill out the form </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -500 }}
          transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          className="flex-1 flex flex-col gap-4 p-4 bg-slate-300 dark:bg-slate-600 rounded"
        >
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeInOut" }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Input name="firstname" className="w-full" type="text" placeholder="FirstName" required />
              <Input name="lastname" className="w-full" type="text" placeholder="LastName" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
          >
            <Input name="email" className="w-full" type="email" placeholder="Email" required />
          </motion.div>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-evenly">
            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 1, delay: 1.1, ease: "easeInOut" }}
            >
              <PhoneInput
                name="phone"
                disableDialCodePrefill
                placeholder="+998 99 999 99 99"
                defaultCountry="uz"
                value={phone}
                onChange={(phone) => setPhone(phone)}
                required
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -500 }}
              transition={{ duration: 1, delay: 1.3, ease: "easeInOut" }}
            >
              <div className="flex gap-4 items-center">
                <Input type="radio" name="gender" value="male" defaultChecked /> Male
                <Input type="radio" name="gender" value="female" /> Female
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeInOut" }}
          >
            <Button variant={"outline"} className="w-full" type="submit">
              Send
            </Button>
          </motion.div>
        </motion.div>
      </form>
    </div>
  );
};

export default Contacts;
