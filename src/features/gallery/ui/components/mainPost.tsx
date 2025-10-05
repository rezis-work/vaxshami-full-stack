import MainPostCard from "@/components/shared/mainPostCard";
import { galleryItems } from "@/constants/galleryData";

const MainPost = () => {
  return (
    <div className="lg:col-span-4 xl:col-span-2 ">
      <MainPostCard
        {...galleryItems[0]}
        height="h-full"
        ratio="aspect-block"
        titleClassname="text-[22px] sm:text-[40px] leading-5 sm:leading-10"
      />
    </div>
  );
};

export default MainPost;
