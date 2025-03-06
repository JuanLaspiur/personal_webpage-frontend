import Background from "@/components/Background";
import Sidebar from "@/components/documentosPage/Sidebar";
import React from "react";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[120vh]">
      <Sidebar/>
      <Background imageSrc="/soldier_documents.gif" />
      <main>{children}</main>
    </div>
  );
};

export default SidebarLayout;
