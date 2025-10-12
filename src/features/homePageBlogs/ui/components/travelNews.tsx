"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { useGetTravelNews } from "../../api";

export default function TravelNews() {
  const { data: posts, isLoading } = useGetTravelNews();

  if (isLoading) return null;
  return (
    <BlogCardContainer
      categoryTitle="Best for Vaxshami"
      className="md:grid-cols-3 mb-[60px]"
    >
      {posts?.slice(0, 3).map((blog) => (
        <BlogCard
          key={blog.$id}
          blog={blog}
          variant="vertical"
          hoverTextColor="hover:text-[#6d62ff]"
        />
      ))}
    </BlogCardContainer>
  );
}
