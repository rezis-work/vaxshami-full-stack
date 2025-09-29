import React from "react";
import { FaRegShareSquare } from "react-icons/fa";
import ShareLinksCards from "../components/shareLinks";
import { Props } from "@/types/shareLinksTypes";

const ShareLinks = ({ flexDirection, theme }: Props) => {
  return (
    <div className={`flex ${flexDirection} items-center justify-between gap-4`}>
      <div
        className={`w-max flex ${flexDirection} items-center gap-2 text-[#333333]`}
      >
        <FaRegShareSquare className="w-[22px] h-[22px]" />
        <span className="text-xs font-bold">SHARE</span>
      </div>

      <ShareLinksCards flexDirection={flexDirection} theme={theme} />
    </div>
  );
};

export default ShareLinks;
