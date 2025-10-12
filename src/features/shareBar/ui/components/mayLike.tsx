"use client";
import BlogCard from "@/components/shared/blogCard";
import ErrorCard from "@/components/shared/errorCard";
import SectionTitle from "@/components/shared/sectionTitle";

import { useGetPosts } from "@/hooks/useGetPosts";

const MayLike = () => {
  const { data: posts } = useGetPosts({ limit: 3 });
  if (!posts) return <ErrorCard />;
  return (
    <div className="mt-10">
      <SectionTitle title="You may like these posts" />

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((item) => (
          <li key={item.$id}>
            <BlogCard
              blog={item}
              variant={"vertical"}
              hoverTextColor="hover:text-[#6d62ff]"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MayLike;
