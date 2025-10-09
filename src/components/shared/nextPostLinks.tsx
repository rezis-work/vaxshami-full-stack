import Link from "next/link";
import React from "react";
import HoverTitle from "./hoverTitle";
import { blogCardsData } from "@/constants/blogCardsData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function NextPostLinks({ id }: { id: string | number }) {
  // const index = blogCardsData.findIndex(
  //   (blog) => Number(blog.id) === Number(id)
  // );
  const index = 4;

  const newer = blogCardsData[index - 1]?.title ?? blogCardsData[0].title;
  const older =
    blogCardsData[index + 1]?.title ??
    blogCardsData[blogCardsData.length - 1].title;

  return (
    <div className="py-8 border-b md:pb-0 border-b-[#eeeeee] flex flex-wrap w-full">
      <div className="mb-8 pb-8   border-b md:pb-0  border-b-[#eeeeee] text-left w-full md:border-none md:w-1/2 shrink-0">
        <Link
          href="/"
          className="text-black flex flex-col hover:text-[#6d62ff]"
        >
          <b>
            <FaChevronLeft className="inline text-[16px] mr-2 ml-[-4px]" />
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
            <FaChevronRight className="inline text-[16px]  ml-2" />
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
