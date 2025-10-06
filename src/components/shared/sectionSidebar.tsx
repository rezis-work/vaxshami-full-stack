import React, { ReactNode } from "react";

export default function SectionSidebar({ children }: { children: ReactNode }) {
  return (
    <div className="mb-15 w-full px-[15px] lg:pr-[15px]  lg:col-span-1 ">
      {children}
    </div>
  );
}
