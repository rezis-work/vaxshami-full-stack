import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import { galleryItems } from "@/constants/galleryData";

const SecondaryPosts = () => {
  return (
    <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
      <ul className="h-full grid grid-cols-1 gap-4 rounded-sm bg-[#03071E]  px-6 py-4">
        {galleryItems.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.id}
            {...item}
            theme="dark"
            flexReverse={false}
            styles="bg-transparent text-sm xs:text-[16px]"
          />
        ))}
      </ul>
    </div>
  );
};

export default SecondaryPosts;
