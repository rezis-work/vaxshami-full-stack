import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { blogCardsData } from "@/constants/blogCardsData";
import React from "react";

export default function SportNews() {
  return (
    <>
      <BlogCardContainer
        categoryTitle="Sport News"
        className="bg-[#ffe1df] mb-[20px] "
      >
        <BlogCard blog={blogCardsData[0]} variant="horizontal" />
      </BlogCardContainer>
      <BlogCardContainer className="md:grid-cols-3 mb-[60px]">
        {blogCardsData.slice(1, 4).map((blog) => (
          <BlogCard key={blog.id} blog={blog} variant="vertical" />
        ))}
      </BlogCardContainer>
    </>
  );
}
