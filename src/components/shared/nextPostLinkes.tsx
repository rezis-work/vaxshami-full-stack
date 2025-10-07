import Link from "next/link";
import React from "react";
import HoverTitle from "./hoverTitle";
import { blogCardsData } from "@/constants/blogCardsDats";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function NextPostLinks({ id }: { id: number }) {
  const index = blogCardsData.findIndex((blog) => blog.id === id);
  const newer = blogCardsData[index - 1].title;
  const older = blogCardsData[index + 1].title;

  return (
    <div className="py-8 border-b border-b-[#eeeeee] grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
      <div className="wmb-8 pb-8 md:pb-0 border-b border-b-[#eeeeee] md:border-none text-left w-full shrink-0">
        <Link
          href="/"
          className="text-black flex flex-col hover:text-[#6d62ff]"
        >
          <div className="flex items-center gap-2">
            <FaAngleLeft />
            <span className="text-[16px] mr-1 ml-[-4px] ">Newer</span>
          </div>

          <HoverTitle
            text={newer}
            titleClassname="mt-[10px] text-[18px] font-[700] "
          />
        </Link>
      </div>

      <div className="text-right w-full shrink-0 ">
        <Link
          href="/"
          className="text-black flex flex-col items-end hover:text-[#6d62ff]"
        >
          <div className="flex items-center gap-2">
            <span className="text-[16px] mr-1 ml-[-4px]">Older</span>
            <FaAngleRight />
          </div>

          <HoverTitle
            text={older}
            titleClassname="mt-[10px] text-[18px] font-[700] "
          />
        </Link>
      </div>
    </div>
  );
}
