"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { AlignLeftIcon, Menu, X } from "lucide-react";
import { navigation } from "@/lib/constants";
import { ModeToggle } from "../mode";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const pathname = usePathname();
  const toggleNavbar = () => setIsNavbarOpen(!isNavbarOpen);

  const renderNavLinks = () => (
    <nav className={cn("hidden z-[9] md:flex items-center gap-x-8 transition-opacity", isNavbarOpen ? "opacity-0" : "opacity-100")}>
      {navigation.map((item, idx) => (
        <Link key={idx} href={item.route} className={cn("text-sm font-bold py-2 dark:border-b-slate-700 border-slate-500 hover:border-b-2", item.route === pathname && "border-b-2")}>
          {item.title}
        </Link>
      ))}
    </nav>
  );

  const renderMobileNavLinks = () => (
    <nav className={cn("md:hidden z-[9] w-screen h-screen fixed top-0 bg-background transition-transform duration-700 delay-75", isNavbarOpen ? "translate-x-0" : "translate-x-full")}>
      <div className="flex items-center justify-end p-4 bg-transparent">{closeIcon()}</div>

      {navigation.map((item, idx) => (
        <Link
          key={idx}
          href={item.route}
          onClick={toggleNavbar}
          className={cn("w-full block text-xl font-bold p-4 text-center dark:hover:bg-slate-900 hover:bg-slate-400", item.route === pathname && "dark:bg-slate-900 bg-slate-300")}
        >
          {item.title}
        </Link>
      ))}
    </nav>
  );

  const closeIcon = () => <X className="md:hidden cursor-pointer" onClick={toggleNavbar} />;
  const openIcon = () => <Menu className="md:hidden cursor-pointer" onClick={toggleNavbar} />;
  const logo = () => (
    <Link href="/" className="flex items-center gap-2">
      <AlignLeftIcon /> Diyorbek
    </Link>
  );

  return (
    <>
      <div className="h-[10vh] fixed top-0 left-0 right-0 flex items-center justify-between px-10 py-5 bg-background z-[9]">
        {logo()}
        <div className="flex items-center gap-8">
          {renderNavLinks()}
          <ModeToggle />
          {!isNavbarOpen && openIcon()}
        </div>
      </div>

      {renderMobileNavLinks()}
    </>
  );
};

export default Header;
