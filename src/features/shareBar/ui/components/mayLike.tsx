import BlogCard from "@/components/shared/blogCard";
import SectionTitle from "@/components/shared/sectionTitle";
import { galleryItems } from "@/constants/galleryData";

const MayLike = () => {
  return (
    <div className="mt-10">
      <SectionTitle title="You may like these posts" />

      <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-8">
        {galleryItems.slice(0, 3).map((item) => (
          <li key={item.id}>
            <BlogCard
              blog={{ ...item, created_at: "2025-09-11" }}
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
