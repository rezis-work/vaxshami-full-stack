import React from "react";

import { petFriends } from "@/constants/bussinessData";
import SecondaryPostPard from "./secondaryPostCard";
import SectionTitle from "./sectionTitle";

export default function SidebarNews({ title }: { title: string }) {
  return (
    <div>
      <section>
        <div className=" flex flex-col lg:flex-row items-center gap-16 md:gap-4 lg:gap-8 xl:gap-8 2xl:gap-20 my-12 px-0">
          <div className="w-full ">
            <SectionTitle title={title} />

            <ul className="flex flex-col gap-5 rounded-sm py-3">
              {petFriends.map((item) => (
                <SecondaryPostPard
                  key={item.id}
                  {...item}
                  theme="light"
                  flexReverse={true}
                  width="!w-[120px]"
                  titleClassname="text-[15px] hover:text-[#6d62ff] "
                />
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
