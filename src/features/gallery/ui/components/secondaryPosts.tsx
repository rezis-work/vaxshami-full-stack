import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import { galleryItems } from "@/constants/galleryData";

const SecondaryPosts = () => {
  return (
    <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
      <ul className="h-full flex flex-col gap-4 rounded-sm bg-[#03071E]  px-6 py-4">
        {galleryItems.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.id}
            date={item.date}
            image={item.coverimage}
            title={item.title}
            theme="dark"
            flexReverse={false}
            styles="bg-transparent text-sm xs:text-[16px]"
            titleClassname="hover:text-white"
          />
        ))}
      </ul>
    </div>
  );
};

export default SecondaryPosts;
