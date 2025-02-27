import Sidebar from "@/components/documentosPage/Sidebar";
import React from "react";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[120vh]">
      <Sidebar/>
      <main>{children}</main>
    </div>
  );
};

export default SidebarLayout;
