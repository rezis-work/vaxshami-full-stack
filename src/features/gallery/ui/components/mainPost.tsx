import MainPostCard from "@/components/shared/mainPostCard";
import { galleryItems } from "@/constants/galleryData";

const MainPost = () => {
  const mainCard = galleryItems[0];
  return (
    <div className="lg:col-span-4 xl:col-span-2 ">
      <MainPostCard
        category={mainCard.category}
        date={mainCard.date}
        image={mainCard.coverimage}
        title={mainCard.title}
        height="h-full"
        ratio="aspect-block"
        titleClassname="text-[22px] sm:text-[40px] leading-5 sm:leading-10"
      />
    </div>
  );
};

export default MainPost;
