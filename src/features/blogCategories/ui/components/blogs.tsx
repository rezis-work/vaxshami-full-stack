import BlogCard from "@/components/shared/blogCard";
import BlogCardContainer from "@/components/shared/blogContainer";
import { blogCardsData } from "@/constants/blogCardsData";

export default function Blogs() {
  return (
    <div className="mb-15  lg:flex-shrink-0 lg:flex-grow-0 lg:basis-2/3 lg:max-w-2/3 lg:relative">
      <BlogCardContainer className="mt-0 sm:grid-cols-2 lg:grid-cols-1">
        {blogCardsData.slice(0, 7).map((blog) => (
          <BlogCard key={blog.id} variant="blog" blog={blog} />
        ))}
      </BlogCardContainer>
    </div>
  );
}
