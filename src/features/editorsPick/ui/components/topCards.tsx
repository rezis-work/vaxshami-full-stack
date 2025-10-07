import BlogCard from "@/components/shared/blogCard";
import { BlogType } from "@/types/blogCardTypes";

const bgColors = ["bg-[#FFE1DF]", "bg-[#F1F4F9]"];

const TopCards = ({ cardsData }: { cardsData: BlogType[] }) => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 my-8">
      {cardsData.map((card, index) => (
        <BlogCard
          key={card.id}
          blog={{ ...card, description: undefined }}
          variant={"blog"}
          className={`${bgColors[index]} p-5 rounded-md`}
          hoverTextColor="hover:text-[#6610f2] lg:text-[20px]"
          imageAspect="lg:aspect-[7/5] lg:max-w-[240px]"
          tagBg="#ffffff"
        />
      ))}
    </div>
  );
};

export default TopCards;
