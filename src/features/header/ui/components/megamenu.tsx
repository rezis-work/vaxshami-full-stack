import BlogCard from "@/components/shared/blogCard";
import Wrapper from "@/components/shared/wrapper";
import { HoverCardContent } from "@/components/ui/hover-card";
import { MegamenuProps } from "@/types/navbarTypes";
import React from "react";

const Megamenu = ({ items }: MegamenuProps) => {
  return (
    <HoverCardContent
      align="center"
      sideOffset={0}
      className=" bg-white border-none rounded-md px-2 py-4 w-max"
    >
      <Wrapper>
        <ul className="grid grid-cols-4 xl:grid-cols-5 justify-between">
          {items.map((item, index) => (
            <li
              key={item.id}
              className={`${index >= 4 ? "hidden xl:block" : ""} px-3 py-[2px]`}
            >
              <BlogCard
                blog={item}
                variant="vertical"
                className="!gap-4 font-bold leading-5"
              />
            </li>
          ))}
        </ul>
      </Wrapper>
    </HoverCardContent>
  );
};

export default Megamenu;
