"use client";

import Link from "next/link";
import { AlignLeftIcon, Menu, X } from "lucide-react";
import { ModeToggle } from "../mode";
import { navigation } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();
  const toggleNavbar = () => setToggle(!toggle);

  return (
    <div className="relative z-[999]">
      <div className="w-full h-[10vh] fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-5 bg-background z-50">
        <Link href="/" className="flex items-center gap-2">
          <AlignLeftIcon />
          Diyorbek
        </Link>

        <div className="flex items-center gap-x-8">
          <nav className="hidden md:flex items-center gap-x-8 ">
            {navigation.map((item, idx) => (
              <Link key={idx} href={item.route} className={cn("text-sm font-bold hover:underline", item.route === pathname && "underline")}>
                {item.title}
              </Link>
            ))}
          </nav>

          <ModeToggle />

          {toggle ? (
            <X className="md:hidden cursor-pointer" onClick={toggleNavbar} />
          ) : (
            <Menu className="md:hidden cursor-pointer" onClick={toggleNavbar} />
          )}
        </div>
      </div>

      {toggle && (
        <nav className={cn("md:hidden w-screen h-screen fixed top-[10vh] bg-background")}>
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              href={item.route}
              onClick={toggleNavbar}
              className={cn("w-full block p-4 text-center hover:bg-slate-900 bg-slate-800", item.route === pathname && "bg-slate-900")}
            >
              {item.title}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Header;
