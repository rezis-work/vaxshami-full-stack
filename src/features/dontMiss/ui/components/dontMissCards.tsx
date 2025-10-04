import BlogCard from "@/components/shared/blogCard";
import { galleryItems } from "@/constants/galleryData";
import { DontMissCardsType } from "@/types/dontMissTypes";

const DontMissCards = ({ categoryBg, hoverTextColor }: DontMissCardsType) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {galleryItems.slice(0, 4).map((item) => (
        <li key={item.id}>
          <BlogCard
            blog={{ ...item, created_at: "2025-09-11" }}
            variant={"vertical"}
            tagBg={categoryBg}
            hoverTextColor={hoverTextColor}
          />
        </li>
      ))}
    </ul>
  );
};

export default DontMissCards;
