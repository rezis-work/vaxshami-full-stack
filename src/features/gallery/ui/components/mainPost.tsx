import MainPostCard from "@/components/shared/mainPostCard";
import { galleryItems } from "@/constants/galleryData";

const MainPost = () => {
  return (
    <div className="lg:col-span-4 xl:col-span-2 ">
      <MainPostCard
        {...galleryItems[0]}
        height="h-full"
        ratio="aspect-block"
        textMin="text-[22px]"
        textMax="text-4xl"
        breakpoint={500}
      />
    </div>
  );
};

export default MainPost;
