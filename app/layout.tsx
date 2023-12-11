import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { HydrationProvider, Client } from "react-hydration-provider";
import "react-international-phone/style.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = { title: "Diyorbek Blog", description: "Generated by create next app" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HydrationProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
            <Client>{children}</Client>
            <ToastContainer />
          </ThemeProvider>
        </HydrationProvider>
      </body>
    </html>
  );
}
