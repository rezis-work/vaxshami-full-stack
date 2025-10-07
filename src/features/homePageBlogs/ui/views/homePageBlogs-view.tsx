import SectionSidebar from "@/components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "@/components/shared/sidebarNews";
import SidebarArticles from "@/components/shared/sidebarArticles";
import HomeBlogsContainer from "../components/homeBlogsContainer";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import TopCategories from "@/components/shared/topCategories";
import { topCategories } from "@/constants/topCategoriesData";
import AdvertisementBanner from "@/components/shared/advertisementBanner";

export default function HomePageBlogs() {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <HomeBlogsContainer />
      </MainSectionWrapper>

      <SectionSidebar>
        <div className="relative h-full xl:pl-[15px]">
          <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
          <SidebarNews title="Daily news" />
          <TopCategories categories={topCategories} />
          <SidebarArticles title="Training" />
          <AdvertisementBanner position="sticky" image={null} />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
