import SectionSidebar from "@/components/shared/sectionSidebar";
import SidebarArticles from "@/components/shared/sidebarArticles";
import SidebarNews from "@/components/shared/sidebarNews";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import React from "react";
import Blogs from "../components/blogs";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import TopCategories from "@/features/topCategories/ui/views/topCategories-view";



export default function BlogView({ blogCategory }: {blogCategory: string}) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <Blogs blogCategory={blogCategory} />
      </MainSectionWrapper>
      <SectionSidebar>
        <div className=" xl:pl-[15px]">
          <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
          <SidebarNews title="Daily news" />
          <TopCategories />
          <SidebarArticles title="Training" />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
