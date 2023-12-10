"use client";

import { format } from "date-fns";
import { footerIcons } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="w-full p-8 flex flex-col md:flex-row gap-6 items-center justify-between bg-background z-50">
      <p className="line-clamp-1">© {format(new Date(), "yyyy")} Erkinov Diyorbek. All Right Reserved.</p>

      <div className="flex items-center gap-x-4">
        {footerIcons.map((item, index) => (
          <Link key={index} href={item.href} target="_blank">
            <Button variant={"outline"} size={"icon"}>
              <item.icon className="h-6 w-6" />
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
