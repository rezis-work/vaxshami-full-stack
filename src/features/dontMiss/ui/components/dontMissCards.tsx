import BlogCard from "@/components/shared/blogCard";
import { galleryItems } from "@/constants/galleryData";
import { DontMissCardsType } from "@/types/dontMissTypes";

const DontMissCards = ({ categoryBg, hoverTextColor }: DontMissCardsType) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {galleryItems.slice(0, 4).map((item) => (
        <li key={item.id}>
          <BlogCard
            blog={{ ...item, $createdAt: "Oct 10, 2025, 16:41" }}
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
