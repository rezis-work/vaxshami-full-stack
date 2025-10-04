import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import { galleryItems } from "@/constants/galleryData";

const SecondaryPosts = () => {
  return (
    <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
      <ul className="h-full flex flex-col gap-4 rounded-sm bg-[#03071E]  px-6 py-4">
        {galleryItems.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.id}
            {...item}
            theme="dark"
            flexReverse={false}
            styles="bg-transparent"
          />
        ))}
      </ul>
    </div>
  );
};

export default SecondaryPosts;
