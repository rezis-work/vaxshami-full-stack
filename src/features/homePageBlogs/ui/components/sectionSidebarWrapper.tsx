"use client";

import SectionSidebar from "@/components/shared/sectionSidebar";
import SidebarArticles from "@/components/shared/sidebarArticles";
import SidebarNews from "@/components/shared/sidebarNews";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import { PostType } from "@/types/postType";
import { useGetDailyNewsList } from "../../api";
import SectionSideSkeleton from "./sectionSideSkeleton";
import ErrorComponent from "@/components/shared/errorComponent";

const SectionSidebarWrapper = () => {
  const { data, isLoading, isError } = useGetDailyNewsList();

  if (isLoading) return <SectionSideSkeleton />;
  if (isError || !data) return <ErrorComponent />;

  return (
    <SectionSidebar>
      <div className="xl:pl-[15px]">
        <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
        <SidebarNews title="Daily news" posts={data as unknown as PostType[]} />
        <SidebarArticles title="Training" />
      </div>
    </SectionSidebar>
  );
};

export default SectionSidebarWrapper;
