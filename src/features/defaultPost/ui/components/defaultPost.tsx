import React from "react";
import BreadCrumbs from "@/components/shared/breadCrumbs";
import Image from "next/image";
import { DefaultPostType } from "@/types/postTypes";
import NextPostLinks from "@/components/shared/nextPostLinks";
import DefaultPostIntro from "./defaultPostIntro";
import DefaultPostBody from "./defaultPostBody";
import DefaultPostFooter from "./defaultPostFooter";

import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";

export default function DefaultPost({ post }: { post: DefaultPostType }) {
  const { category, title, description, created_at, image, id } = post;

  return (
    <MainSectionWrapper>
      <BreadCrumbs category={category} title={title} />
      <DefaultPostIntro
        title={title}
        description={description}
        created_at={created_at}
      />

      <div className="relative  aspect-[1.43] ] xl:aspect-[1.78]  xl:-ml-[180px] mb-[30px]  ">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-sm  "
        />
      </div>
      <div className="flex font-[400] text-[17px] md:gap-[30px]">
        <div className="hidden md:block sticky top-5 flex-shrink-0  w-[50px]  h-[327px] ">
          <ShareLinks flexDirection="flex-col" theme="light" />
        </div>
        <DefaultPostBody image={image} />
      </div>

      <DefaultPostFooter category={category} />

      <NextPostLinks id={id} />
    </MainSectionWrapper>
  );
}
