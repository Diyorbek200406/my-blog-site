"use client";

import Link from "next/link";
import { AlignLeftIcon } from "lucide-react";
import { ModeToggle } from "../mode";
import { navigation } from "@/lib/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const Header = () => {
  const pathname = usePathname();

  return (
    <div className="w-full fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-5 bg-background z-50">
      <Link href="/" className="flex items-center gap-2">
        <AlignLeftIcon />
        D/&gt;
      </Link>

      <nav className="flex items-center gap-x-8">
        {navigation.map((item, idx) => (
          <Link key={idx} href={item.route} className={cn("text-sm font-bold hover:underline", item.route === pathname && "underline")}>
            {item.title}
          </Link>
        ))}

        <ModeToggle />
      </nav>
    </div>
  );
};

export default Header;
