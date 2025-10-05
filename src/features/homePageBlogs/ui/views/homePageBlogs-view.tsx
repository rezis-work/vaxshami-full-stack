import Wrapper from "@/components/shared/wrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "@/components/shared/sidebarNews";
import SidebarArticles from "@/components/shared/sidebarArticles";
import HomeBlogsContainer from "../components/homeBlogsContainer";

export default function HomePageBlogs() {
  return (
    <Wrapper className="mt-[60px] xl:px-4 2xl:px-[18px]">
      <SectionWrapper>
        <HomeBlogsContainer />

        <SectionSidebar>
          <div className="md:pl-[15px]">
            <FollowUs gridCols="grid-cols-2" />
            <SidebarNews title="Daily news" />
            <SidebarArticles title="Training" />
          </div>
        </SectionSidebar>
      </SectionWrapper>
    </Wrapper>
  );
}
