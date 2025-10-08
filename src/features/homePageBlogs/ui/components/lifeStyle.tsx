import MainPostCard from "@/components/shared/mainPostCard";
import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import SectionTitle from "@/components/shared/sectionTitle";
import { blogCardsData } from "@/constants/blogCardsDats";
import React from "react";

const LifeStyle = () => {
  return (
    <div className="2xl:w-[840px] xl:w-[730px] lg:w-[610px] md:w-[690px] sm:w-[510px] mx-auto md:px-0 2xl:pl-[15px] mb-12">
      <SectionTitle title="Life Style" />

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-8 mb-4">
        <MainPostCard
          date={"6, January 2020"}
          titleClassname={"text-2xl"}
          {...blogCardsData[0]}
          height="md:h-[420px]"
        />

        <ul className="h-full grid grid-cols-1 gap-4 py-4 md:py-0">
          {blogCardsData.slice(1, 5).map((item) => (
            <SecondaryPostPard
              date={"6, January 2020"}
              key={item.id}
              {...item}
              theme="light"
              flexReverse={false}
              styles="bg-transparent text-sm xs:text-[16px] lg:text-[16px]"
              titleClassname="hover:text-[#6610f2]"
              height="h-[80px]"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LifeStyle;
