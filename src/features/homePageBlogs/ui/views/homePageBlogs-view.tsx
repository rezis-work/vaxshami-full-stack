import SectionSidebar from "@/components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "@/components/shared/sidebarNews";
import SidebarArticles from "@/components/shared/sidebarArticles";
import HomeBlogsContainer from "../components/homeBlogsContainer";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import TopCategories from "@/features/topCategories/ui/views/topCategories-view";

export default function HomePageBlogs() {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <HomeBlogsContainer />
      </MainSectionWrapper>
      <SectionSidebar>
        <div className="xl:pl-[15px]">
          <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
          <SidebarNews title="Daily news" />
          <TopCategories />
          <SidebarArticles title="Training" />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
