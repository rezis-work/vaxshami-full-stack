"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import ErrorCard from "@/components/shared/errorCard";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function Blogs({ blogCategory }: { blogCategory: string }) {
  const { data: posts } = useGetPosts({
    category: blogCategory,
    limit: 9,
    queryKeyName: blogCategory,
  });

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
    </div>
  );
}
