import Link from "next/link";
import React from "react";
import HoverTitle from "./hoverTitle";
import { blogCardsData } from "@/constants/blogCardsData";

export default function NextPostLinks({ id }: { id: number }) {
  const index = blogCardsData.findIndex((blog) => blog.id === id);
  const newer = blogCardsData[index - 1].title;
  const older = blogCardsData[index + 1].title;
  return (
    <div className="py-8 border-b border-b-[#eeeeee] flex flex-wrap w-full">
      <div className="mb-8 pb-8 border-b  border-b-[#eeeeee] text-left w-full md:w-1/2 shrink-0">
        <Link
          href="/"
          className="text-black flex flex-col hover:text-[#6d62ff]"
        >
          <b>
            <i className="fa-solid fa-angle-left text-[16px] mr-1 ml-[-4px] "></i>
            Newer
          </b>
          <HoverTitle
            text={newer}
            titleClassname="mt-[10px] text-[18px] font-[700] "
          ></HoverTitle>
        </Link>
      </div>
      <div className="text-right w-full shrink-0 md:w-1/2">
        <Link
          href="/"
          className="text-black flex flex-col hover:text-[#6d62ff]"
        >
          <b>
            Older
            <i className="fa-solid fa-angle-right text-[16px]  ml-1 "></i>
          </b>
          <HoverTitle
            text={older}
            titleClassname="mt-[10px] text-[18px] font-[700] "
          ></HoverTitle>
        </Link>
      </div>
    </div>
  );
}
