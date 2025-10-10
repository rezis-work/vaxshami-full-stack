"use client";
import React from "react";
import BreadCrumbs from "@/components/shared/breadCrumbs";
import Image from "next/image";

import DefaultPostIntro from "./defaultPostIntro";
import DefaultPostBody from "./defaultPostBody";
import DefaultPostFooter from "./defaultPostFooter";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import NextPostLinks from "@/components/shared/nextPostLinks";
import DefaultMayLIke from "./defaultMayLIke";
import { useGetPostByTitle } from "../../api/useGetDefaultArticle";

export default function DefaultPostArticle({
  postTitle,
}: {
  postTitle: string;
}) {
  const { data: posts } = useGetPostByTitle(postTitle);
  if (!posts) return null;

  const { summary, title, createdDate, coverimage, $id, category, readtime } =
    posts[0];

  return (
    <div className="sm:px-[15px] md:px-0">
      <BreadCrumbs category={category} title={title} />
      <DefaultPostIntro
        title={title}
        description={summary}
        created_at={createdDate}
        readTime={readtime}
      />

      <div className="relative  aspect-[1.43] ] xl:aspect-[1.78]  xl:-ml-[180px] mb-[30px]  ">
        <Image
          src={coverimage}
          alt={title}
          fill
          className="object-cover rounded-sm  "
        />
      </div>
      <div className="flex font-[400] text-[17px] md:gap-[30px]">
        <div className="hidden md:block sticky top-5 flex-shrink-0  w-[50px]  h-[327px] ">
          <ShareLinks flexDirection="flex-col" theme="light" />
        </div>
        <DefaultPostBody image={coverimage} />
      </div>

      <DefaultPostFooter category={category} />

      <NextPostLinks id={$id} />
      <DefaultMayLIke />
    </div>
  );
}
