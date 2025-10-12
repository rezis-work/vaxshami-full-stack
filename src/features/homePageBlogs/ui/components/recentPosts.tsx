"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import React, { useState } from "react";
import { useGetPosts } from "@/hooks/useGetPosts";
import LoadMoreButton from "@/components/shared/loadMoreButton";
import ErrorCard from "@/components/shared/errorCard";

export default function RecentPosts() {
  const [currentLimit, setCurrentLimit] = useState(6);
  const { data: posts, isLoading } = useGetPosts({
    sortBy: "$createdAt",
    sortOrder: "desc",
    limit: currentLimit,
  });

  if (isLoading) return null;
  if (!posts) return <ErrorCard />;
  return (
    <>
      <BlogCardContainer
        categoryTitle="Recent Posts"
        className="md:grid-cols-2 mb-[30px]"
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
      <LoadMoreButton
        setCurrentLimit={setCurrentLimit}
        currentLimit={currentLimit}
        increment={6}
      />
    </>
  );
}
