import React from "react";
import { Tag } from "lucide-react";
import Link from "next/link";
import HoverTitle from "@/components/shared/hoverTitle";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";

export default function DefaultPostFooter({ category }: { category: string }) {
  return (
    <>
      <div className="py-[30px] mt-[30px] relative before:absolute before:w-[50px] before:h-[3px] before:top-0 before:left-0 before:bg-[#ff607d] before:z-10">
        <div className="flex  gap-[5px] text-[#888888] items-center">
          <Tag className=" w-4 h-4" />
          <span className="text-[16px]">Tags:</span>
          <span>
            <Link
              href={`/${category}`}
              className="text-[17px] font-[700] text-black ml-1 hover:text-[#6d62ff]"
            >
              <HoverTitle text={category} />
            </Link>
          </span>
        </div>
      </div>
      <div className="px-[15px] h-[64px] w-full border border-[#eeeeee] bg-white ">
        <ShareLinks flexDirection="flex-row" theme="dark" />
      </div>
    </>
  );
}
