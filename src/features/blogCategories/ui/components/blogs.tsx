"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { useGetPosts } from "@/hooks/useGetPosts";

export default function Blogs() {
  const { data: posts } = useGetPosts({ limit: 9 });
  console.log(posts);
  return (
    <div className="mb-15 ">
      <BlogCardContainer className="mt-0 sm:grid-cols-2 lg:grid-cols-1">
        {posts?.map((blog) => (
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
