"use client";

import SectionSidebar from "@/components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "@/components/shared/sidebarNews";
import SidebarArticles from "@/components/shared/sidebarArticles";
import HomeBlogsContainer from "../components/homeBlogsContainer";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import { useGetDailyNewsList } from "../../api";
import { PostType } from "@/types/postType";

export default function HomePageBlogs() {
  const { data, status } = useGetDailyNewsList();

  if (status === "pending") return <div>Loading...</div>;
  if (!data) return <div>No data</div>;

  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <HomeBlogsContainer />
      </MainSectionWrapper>
      <SectionSidebar>
        <div className="xl:pl-[15px]">
          <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
          <SidebarNews
            title="Daily news"
            posts={data as unknown as PostType[]}
          />
          <SidebarArticles title="Training" />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
