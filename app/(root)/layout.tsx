import { Footer } from "@/components/shared/footer";
import Header from "@/components/shared/header";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <main className="px-10 mt-[10vh] min-h-[90vh]">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
