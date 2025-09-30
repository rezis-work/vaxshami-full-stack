import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import Wrapper from "@/components/shared/wrapper";
import { blogCardsData } from "@/constants/blogCardsData";
import React from "react";

export default function SportNews() {
  return (
    <Wrapper>
      <BlogCardContainer categoryTitle="Sport News" className="bg-[#ffe1df] ">
        <BlogCard blog={blogCardsData[0]} variant="horizontal" />
      </BlogCardContainer>
      <BlogCardContainer className="md:grid-cols-3 -mt-10">
        {blogCardsData.slice(1, 4).map((blog) => (
          <BlogCard key={blog.id} blog={blog} variant="vertical" />
        ))}
      </BlogCardContainer>
    </Wrapper>
  );
}
