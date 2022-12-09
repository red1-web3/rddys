import Footer from "components/Footer";
import Header from "components/Header";
import React, { ReactNode } from "react";

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Header />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
