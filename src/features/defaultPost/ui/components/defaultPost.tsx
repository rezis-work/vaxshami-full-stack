import React from "react";
import BreadCrumbs from "../../../../components/shared/breadCrumbs";

import Image from "next/image";

import { DefaultPostType } from "@/types/postTypes";

import NextPostLinks from "../../../../components/shared/nextPostLinks";

import DefaultPostIntro from "./defaultPostIntro";
import DefaultPostBody from "./defaultPostBody";
import DefaultPostFooter from "./defaultPostFooter";
import Wrapper from "@/components/shared/wrapper";

export default function DefaultPost({ post }: { post: DefaultPostType }) {
  const { category, title, description, created_at, image, id } = post;

  return (
    <Wrapper className="mt-[30px]">
      <div className="mb-[30px] justify-center 2xl:w-[824px] xl:w-[730px] lg:w-[610px] md:w-[690px] sm:w-[510px] max-sm:max-w-[530px] max-sm:w-full [&>*]:h-auto ">
        <BreadCrumbs category={category} title={title} />
        <DefaultPostIntro
          title={title}
          description={description}
          created_at={created_at}
        />
        {/* Hero Image */}
        <div className="relative  aspect-[1.43] ] xl:aspect-[1.78]  xl:-ml-[180px] mb-[30px]  ">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-sm  "
          />
        </div>
        <div className="flex font-[400] text-[17px] md:gap-[30px]">
          {/* Social links */}
          <div className="hidden md:block sticky top-5 flex-shrink-0  w-[50px] bg-blue-200 h-[327px] "></div>
          <DefaultPostBody image={image} />
        </div>
        {/* post footer */}
        <DefaultPostFooter category="" />
        {/* prev/next post links */}
        <NextPostLinks id={id} />
      </div>
    </Wrapper>
  );
}
