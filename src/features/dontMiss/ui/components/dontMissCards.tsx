"use client";

import BlogCard from "@/components/shared/blogCard";
import { galleryItems } from "@/constants/galleryData";
import { DontMissCardsType } from "@/types/dontMissTypes";
import { useGetPostsList } from "../../api";
import { BlogType } from "@/types/blogCardTypes";
import DontMissSkeleton from "./dontMissSkeleton";

const DontMissCards = ({ categoryBg, hoverTextColor }: DontMissCardsType) => {
  const { data, isLoading } = useGetPostsList();

  if (isLoading) return <DontMissSkeleton />;
  if (!data) return <div>No data</div>;

  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {data.slice(0, 4).map((item) => (
        <li key={item.$id}>
          <BlogCard
            blog={{
              ...(item as unknown as BlogType),
              $createdAt: "Oct 10, 2025, 16:41",
            }}
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
