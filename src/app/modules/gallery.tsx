import MainPostCard from "@/components/shared/mainPostCard";
import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import Wrapper from "@/components/shared/wrapper";
import { galleryItems } from "@/constants/galleryData";

const Gallery = () => {
  return (
    <section className="my-8 bg-[#03071E] text-white">
      <Wrapper className="relative grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-3 gap-6 pt-30 pb-16 mx-auto ">
        <div className="absolute left-4 md:left-8 lg:left-10 2xl:left-0 top-18 flex items-end">
          <h3 className="text-xl font-semibold">Gallery</h3>
          <div className="ml-2 mb-1 h-[3px] w-4 -skew-x-[45deg] bg-[#6D62FF]" />
        </div>

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

        <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
          <ul className="h-full flex flex-col gap-4 rounded-sm bg-[#03071E]  px-6 py-4">
            {galleryItems.slice(1).map((item) => (
              <SecondaryPostPard
                key={item.id}
                {...item}
                theme="dark"
                flexReverse={false}
                textMin="text-xs"
                textMax=""
                styles="bg-transparent"
              />
            ))}
          </ul>
        </div>
      </Wrapper>
    </section>
  );
};

export default Gallery;
