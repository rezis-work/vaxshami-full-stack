import Link from "next/link";
import React from "react";
import HoverTitle from "./hoverTitle";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function NextPostLinks({ id }: { id: string | number }) {
  const { data: posts } = useGetPosts();
  if (!posts) return null;
  const index = posts.findIndex((post) => post.$id === id);
  const newer = posts[index - 1]?.title ?? posts[0].title;
  const older = posts[index + 1]?.title ?? posts[posts.length - 1].title;

  return (
    <div className="py-8 border-b md:pb-0 border-b-[#eeeeee] flex flex-wrap w-full mb-12">
      <div className="mb-8 pb-8   border-b md:pb-0  border-b-[#eeeeee] text-left w-full md:border-none md:w-1/2 shrink-0">
        <Link
          href={`/blog/${newer.replaceAll(" ", "-")}`}
          className="text-black flex flex-col hover:text-[#6d62ff]"
        >
          <div className="font-[700] mb-2 ">
            <FaChevronLeft className="inline text-[16px] mr-2 ml-[-4px]" />
            Newer
          </div>
          <HoverTitle
            text={newer}
            titleClassname="mt-[10px] text-[18px] font-[700] "
          ></HoverTitle>
        </Link>
      </div>
      <div className="text-right w-full shrink-0 md:w-1/2">
        <Link
          href={`/blog/${older.replaceAll(" ", "-")}`}
          className="text-black flex flex-col hover:text-[#6d62ff]"
        >
          <div className="font-[700] mb-[6px] ">
            Older
            <FaChevronRight className="inline text-[16px]  ml-2" />
          </div>
          <HoverTitle
            text={older}
            titleClassname="mt-[10px] text-[18px] font-[700] "
          ></HoverTitle>
        </Link>
      </div>
    </div>
  );
}
