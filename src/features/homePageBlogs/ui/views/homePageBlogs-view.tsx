import Wrapper from "@/components/shared/wrapper";

import SectionSidebar from "@/components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "@/components/shared/sidebarNews";
import SidebarArticles from "@/components/shared/sidebarArticles";
import HomeBlogsContainer from "../components/homeBlogsContainer";
import BlogSectionWrapper from "../components/blogsSectionWrapper";

export default function HomePageBlogs() {
  return (
    <Wrapper className="mt-[60px] ">
      <BlogSectionWrapper>
        <HomeBlogsContainer />
        <SectionSidebar>
          <div className="md:pl-[15px] 2xl:pl-[15px]">
            <FollowUs gridCols="grid-cols-2" />
            <SidebarNews title="Daily news" />
            <SidebarArticles title="Training" />
          </div>
        </SectionSidebar>
      </BlogSectionWrapper>
    </Wrapper>
  );
}
