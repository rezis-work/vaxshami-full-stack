import BlogCard from "@/components/shared/blogCard";
import SectionTitle from "@/components/shared/sectionTitle";
import { galleryItems } from "@/constants/galleryData";
import React from "react";

const MayLike = () => {
  return (
    <div className="mt-10">
      <SectionTitle title="You may like these posts" />

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.slice(0, 3).map((item) => (
          <li key={item.id}>
            <BlogCard
              blog={{ ...item, created_at: "2025-09-11" }}
              variant={"vertical"}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MayLike;
