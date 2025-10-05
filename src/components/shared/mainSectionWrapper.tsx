import React, { ReactNode } from "react";

export default function MainSectionWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="mb-15 px-[15px] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-2/3 lg:max-w-2/3 lg:relative">
      {children}
    </div>
  );
}
