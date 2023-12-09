"use client";

import Link from "next/link";
import { AlignLeftIcon, Menu } from "lucide-react";
import { ModeToggle } from "../mode";
import { navigation } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-5 bg-background z-50">
      <Link href="/" className="flex items-center gap-2">
        <AlignLeftIcon />
        Diyorbek
      </Link>

      <div className="flex items-center gap-x-8">
        <nav className="hidden items-center gap-x-8 md:flex">
          {navigation.map((item, idx) => (
            <Link key={idx} href={item.route} className={cn("text-sm font-bold hover:underline", item.route === pathname && "underline")}>
              {item.title}
            </Link>
          ))}
        </nav>

        <ModeToggle />

        <Menu className="block md:hidden cursor-pointer" onClick={() => setToggle((prev) => !prev)} />

        <nav
          className={cn("flex flex-col gap-4 absolute top-0 right-0 w-screen h-screen bg-slate-700 transition-all duration-700", toggle && "hidden transition-all duration-700")}
        >
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              onClick={() => setToggle((prev) => !prev)}
              href={item.route}
              className={cn("text-xl font-medium hover:underline w-full", item.route === pathname && "bg-slate-500")}
            >
              <Button className="w-full">{item.title}</Button>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
