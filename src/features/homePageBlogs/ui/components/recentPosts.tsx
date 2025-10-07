import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";

import { blogCardsData } from "@/constants/blogCardsData";

export default function RecentPosts() {
  return (
    <BlogCardContainer
      categoryTitle="Recent Posts"
      className="md:grid-cols-2 mb-[60px]"
    >
      {blogCardsData.slice(0, 6).map((blog) => (
        <BlogCard
          key={blog.id}
          blog={blog}
          variant="vertical"
          // imageAspect="aspect-[1.59]"
        />
      ))}
    </BlogCardContainer>
  );
}
