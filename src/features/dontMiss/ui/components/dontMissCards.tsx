"use client";

import BlogCard from "@/components/shared/blogCard";
import { useGetPosts } from "@/hooks/useGetPosts";
import { DontMissCardsType } from "@/types/dontMissTypes";
import DontMissSkeleton from "./dontMissSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const DontMissCards = ({ categoryBg, hoverTextColor }: DontMissCardsType) => {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPosts({
    section: "top drinks",
    limit: 4,
    queryKeyName: "topdrinks",
  });

  if (isLoading) return <DontMissSkeleton />;
  if (isError || !posts) return <ErrorComponent />;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {posts.map((item) => (
        <li key={item.$id}>
          <BlogCard
            blog={item}
            variant={"vertical"}
            tagBg={categoryBg}
            hoverTextColor={hoverTextColor}
          />
        </li>
      ))}
    </ul>
  );
};

export default DontMissCards;
