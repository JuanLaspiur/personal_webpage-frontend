import Background from "@/components/Background";
import React from "react";

const SidebarLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-[120vh]">
      <Background imageSrc="/soldier_aboutme.gif" gradientToTop={false}/>
      <main>{children}</main>
    </div>
  );
};

export default SidebarLayout;
