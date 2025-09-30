import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import Wrapper from "@/components/shared/wrapper";
import { blogCardsData } from "@/constants/blogCardsData";
import React from "react";

export default function RecentPosts() {
  return (
    <Wrapper>
      <BlogCardContainer
        categoryTitle="Recent Posts"
        className="md:grid-cols-2"
      >
        {blogCardsData.slice(0, 6).map((blog) => (
          <BlogCard key={blog.id} blog={blog} variant="vertical" />
        ))}
      </BlogCardContainer>
    </Wrapper>
  );
}
