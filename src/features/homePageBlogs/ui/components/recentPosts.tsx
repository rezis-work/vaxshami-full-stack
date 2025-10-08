"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import { blogCardsData } from "@/constants/blogCardsData";
import { useGetPosts } from "@/hooks/useGetPosts";
import React from "react";

export default function RecentPosts() {
  const {
    data: posts,
    isLoading,
    isError,
  } = useGetPosts({
    limit: 5,
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Failed to load posts 😕</p>;

  console.log("DATAA", posts);
  return (
    <BlogCardContainer
      categoryTitle="Recent Posts"
      className="md:grid-cols-2 mb-[60px]"
    >
      {blogCardsData.slice(0, 6).map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          variant="vertical"
          imageAspect="aspect-[1.59]"
          hoverTextColor="hover:text-[#6d62ff]"
        />
      ))}
    </BlogCardContainer>
  );
}
