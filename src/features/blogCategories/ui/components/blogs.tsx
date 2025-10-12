"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import LoadMoreButton from "@/components/shared/loadMoreButton";
import ErrorCard from "@/components/shared/errorCard";
import { useGetPosts } from "@/hooks/useGetPosts";
import { useSearchParams } from "next/navigation";
import BlogsSkeleton from "./blogsSkeleton";

export default function Blogs({ blogCategory }: { blogCategory: string }) {
  const searchParams = useSearchParams();
  const currentLimit = Number(searchParams.get("limit")) || 6;

  const {
    data: posts,
    isLoading,
    isFetching,
  } = useGetPosts({
    category: blogCategory,
    limit: currentLimit,
    queryKeyName: blogCategory,
  });

  if (isLoading) return <BlogsSkeleton />;
  if (!posts) return <ErrorCard />;

  return (
    <div className="mb-15">
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
      <LoadMoreButton increment={3} defaultLimit={6} isFetching={isFetching} />
    </div>
  );
}
