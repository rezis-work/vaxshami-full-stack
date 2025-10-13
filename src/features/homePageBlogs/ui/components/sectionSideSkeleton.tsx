import SecondaryPostCardSkeleton from "@/components/shared/secondaryCardSkeleton";
import SectionSidebar from "@/components/shared/sectionSidebar";
import SectionTitle from "@/components/shared/sectionTitle";
import FollowUs from "@/features/followUs/ui/views/followUs-view";

const SectionSideSkeleton = () => {
  const newsSkeletons = Array.from({ length: 3 });
  return (
    <SectionSidebar>
      <div className="xl:pl-[15px]">
        <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />

        <div className="mt-10">
          <SectionTitle title="Daily News" />

          <div className="flex flex-col gap-2 rounded-sm py-4">
            {newsSkeletons.map((_, index) => (
              <div key={index} className="flex items-center gap-4">
                <SecondaryPostCardSkeleton flexReverse={true} />
              </div>
            ))}
          </div>
        </div>
        {/* <SidebarArticles title="Training" /> */}
      </div>
    </SectionSidebar>
  );
};

export default SectionSideSkeleton;
