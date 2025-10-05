import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { blogCardsData } from "@/constants/blogCardsData";
import React from "react";

export default function DefaultMayLIke() {
  return (
    <BlogCardContainer
      categoryTitle="You may like these posts"
      className="md:grid-cols-3"
    >
      {blogCardsData.slice(0, 3).map((blog) => (
        <BlogCard key={blog.id} variant="vertical" blog={blog} />
      ))}
    </BlogCardContainer>
  );
}
