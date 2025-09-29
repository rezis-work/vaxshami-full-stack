import React from "react";

const SectionTitle = ({
  title,
  styles,
}: {
  title: string;
  styles?: string;
}) => {
  return (
    <div className={`flex items-end mb-4 ${styles}`}>
      <h3 className="text-2xl font-bold">{title}</h3>
      <div className="ml-2 mb-1 h-[3px] w-4 -skew-x-[45deg] bg-[#6D62FF]" />
    </div>
  );
};

export default SectionTitle;
