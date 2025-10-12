"use client";
import BlogCard from "@/components/shared/blogCard";
import ErrorCard from "@/components/shared/errorCard";

import { useGetPosts } from "@/hooks/useGetPosts";
import { DontMissCardsType } from "@/types/dontMissTypes";

const DontMissCards = ({ categoryBg, hoverTextColor }: DontMissCardsType) => {
  const { data: posts, isLoading } = useGetPosts({
    section: "dontmiss",
    limit: 4,

    queryKeyName: "dontmiss",
  });
  if (isLoading) return <div>Loading...</div>;
  if (!posts) return <ErrorCard />;
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
