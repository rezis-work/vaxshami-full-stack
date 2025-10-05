import React, { ReactNode } from "react";

export default function SectionSidebar({ children }: { children: ReactNode }) {
  return (
    <div className="mb-15 w-full lg:px-[15px] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-1/3 lg:max-w-1/3 lg:relative  ">
      {children}
    </div>
  );
}
