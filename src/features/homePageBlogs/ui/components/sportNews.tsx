"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import React from "react";
import { useGetSportNews } from "../../api";

export default function SportNews() {
  const { data: posts, isLoading } = useGetSportNews();

  if (isLoading) return null;
  return (
    <>
      <BlogCardContainer
        categoryTitle="New Vacancies"
        className="bg-[#ffe1df] mb-[20px] "
      >
        {posts && (
          <BlogCard
            blog={posts?.[0]}
            variant="horizontal"
            hoverTextColor="hover:text-[#6d62ff]"
          />
        )}
      </BlogCardContainer>
      <BlogCardContainer className="md:grid-cols-3 mb-[60px]">
        {posts?.slice(1, 4).map((blog) => (
          <BlogCard
            key={blog.$id}
            blog={blog}
            variant="vertical"
            hoverTextColor="hover:text-[#6d62ff]"
          />
        ))}
      </BlogCardContainer>
    </>
  );
}
