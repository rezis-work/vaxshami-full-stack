import SectionTitle from "./sectionTitle";
import MainPostCard from "./mainPostCard";
import SecondaryPostPard from "./secondaryPostCard";
import { businessNews, petFriends } from "@/constants/bussinessData";

const SidebarArticles = ({ title }: { title: string }) => {
  return (
    <section>
      <div className=" flex flex-col lg:flex-row items-center  gap-16 md:gap-4 lg:gap-8 xl:gap-8 2xl:gap-20 my-16 px-0">
        <div className="w-full ">
          <SectionTitle title={title} />

          <MainPostCard
            {...businessNews[0]}
            ratio="aspect-[3/2]"
            titleClassname="text-xl "
          />

          <ul className="flex flex-col gap-5 rounded-sm py-4">
            {petFriends.map((item) => (
              <SecondaryPostPard
                key={item.id}
                {...item}
                theme="light"
                flexReverse={true}
                width="!w-[120px]"
                titleClassname="text-[15px] "
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SidebarArticles;
