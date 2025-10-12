"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import LoadMoreButton from "@/components/shared/loadMoreButton";
import ErrorCard from "@/components/shared/errorCard";
import { useGetPosts } from "@/hooks/useGetPosts";
import { useState } from "react";

export default function Blogs({ blogCategory }: { blogCategory: string }) {
  const [currentLimit, setCurrentLimit] = useState(6);
  const { data: posts, isLoading } = useGetPosts({
    category: blogCategory,
    limit: 9,
    queryKeyName: blogCategory,
  });
  if (isLoading) return null;
  if (!posts) return <ErrorCard />;
  return (
    <div className="mb-15 ">
      <BlogCardContainer className="mt-0 sm:grid-cols-2 lg:grid-cols-1">
        {posts.map((blog) => (
          <BlogCard
            key={blog.$id}
            variant="blog"
            blog={blog}
            hoverTextColor="hover:text-[#6d62ff]"
          />
        ))}
      </BlogCardContainer>
      <LoadMoreButton
        setCurrentLimit={setCurrentLimit}
        currentLimit={currentLimit}
        increment={3}
      />
    </div>
  );
}
