import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import Wrapper from "@/components/shared/wrapper";
import { blogCardsData } from "@/constants/blogCardsData";
import React from "react";

export default function TravelNews() {
  return (
    <Wrapper className="mt-16">
      <BlogCardContainer categoryTitle="Travel News" className="md:grid-cols-3">
        {blogCardsData.slice(6, 9).map((blog) => (
          <BlogCard key={blog.id} blog={blog} variant="vertical" />
        ))}
      </BlogCardContainer>
    </Wrapper>
  );
}
