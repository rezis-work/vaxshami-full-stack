"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import React from "react";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function RecentPosts() {
  const { data: posts, isLoading } = useGetPosts({
    sortBy: "$createdAt",
    sortOrder: "desc",
    limit: 6,
  });

  if (isLoading) return null;

  return (
    <BlogCardContainer
      categoryTitle="Recent Posts"
      className="md:grid-cols-2 mb-[60px]"
    >
      {posts?.map((blog) => (
        <BlogCard
          key={blog.$id}
          blog={blog}
          variant="vertical"
          imageAspect="aspect-[1.59]"
          hoverTextColor="hover:text-[#6d62ff]"
        />
      ))}
    </BlogCardContainer>
  );
}
