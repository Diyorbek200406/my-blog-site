"use client";

import { format } from "date-fns";
import { footerIcons } from "@/lib/constants";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full px-10 py-8 flex items-center justify-between bg-background z-50">
      <p>© {format(new Date(), "yyyy")} Erkinov Diyorbek. All Right Reserved.</p>

      <div className="flex items-center gap-x-4">
        {footerIcons.map((item, index) => (
          <Link key={index} href={item.href} target="_blank">
            <item.icon className="h-6 w-6" />
          </Link>
        ))}
      </div>
    </div>
  );
};
