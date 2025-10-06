import SectionSidebar from "@/components/shared/sectionSidebar";
import SidebarArticles from "@/components/shared/sidebarArticles";
import SidebarNews from "@/components/shared/sidebarNews";
import Wrapper from "@/components/shared/wrapper";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import BlogSectionWrapper from "@/features/homePageBlogs/ui/components/blogsSectionWrapper";
import React from "react";
import Blogs from "../components/blogs";

export default function BlogView() {
  return (
    <Wrapper>
      <BlogSectionWrapper>
        <Blogs />

        <SectionSidebar>
          <div className="md:pl-[15px] 2xl:pl-[15px]">
            <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
            <SidebarNews title="Daily news" />
            <SidebarArticles title="Training" />
          </div>
        </SectionSidebar>
      </BlogSectionWrapper>
    </Wrapper>
  );
}
