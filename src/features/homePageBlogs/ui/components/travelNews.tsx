"use client";
import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { useGetTravelNews } from "../../api";
import ErrorCard from "@/components/shared/errorCard";
import TravelNewsSkeleton from "./travelNewsSkeleton";

export default function TravelNews() {
  const { data: posts, isLoading, isError } = useGetTravelNews();

  if (isLoading) return <TravelNewsSkeleton />;
  if (isError || !posts) return <ErrorCard />;
  return (
    <BlogCardContainer
      categoryTitle="Best for Vaxshami"
      className="md:grid-cols-3 mb-[60px]"
    >
      {posts.slice(0, 3).map((blog) => (
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
