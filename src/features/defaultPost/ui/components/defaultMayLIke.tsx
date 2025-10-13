import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import ErrorCard from "@/components/shared/errorCard";
import { useGetPosts } from "@/hooks/useGetPosts";
import React from "react";

export default function DefaultMayLIke() {
  const { data: posts, isLoading, isError } = useGetPosts({
    section: "sidebar",
    limit: 3,
    queryKeyName: "mayLike",
  });

  if (isLoading) return null;
  if (isError || !posts) return <ErrorCard />;
  return (
    <BlogCardContainer
      categoryTitle="You may like these posts"
      className="md:grid-cols-3 mb-15"
    >
      {posts.map((blog) => (
        <BlogCard
          key={blog.$id}
          variant="vertical"
          blog={blog}
          hoverTextColor="hover:text-[#6d62ff]"
        />
      ))}
    </BlogCardContainer>
  );
}
