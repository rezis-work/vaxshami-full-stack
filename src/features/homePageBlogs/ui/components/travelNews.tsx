import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import { blogCardsData } from "@/constants/blogCardsData";
import React from "react";

export default function TravelNews() {
  return (
    <BlogCardContainer
      categoryTitle="Travel News"
      className="md:grid-cols-3 mb-[60px]"
    >
      {blogCardsData.slice(6, 9).map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          variant="vertical"
          hoverTextColor="hover:text-[#6d62ff]"
        />
      ))}
    </BlogCardContainer>
  );
}
