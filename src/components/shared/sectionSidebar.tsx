"use client";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarNews from "./sidebarNews";
import TopCategories from "@/features/topCategories/ui/views/topCategories-view";
import SidebarArticles from "./sidebarArticles";
import { useGetDailyNewsList } from "@/features/homePageBlogs/api";
import { PostType } from "@/types/postType";

export default function SectionSidebar() {
  const { data, status } = useGetDailyNewsList();

  if (status === "pending") return <div>Loading...</div>;
  if (!data) return <div>No data</div>;
  return (
    <div className="mb-15 w-full px-[15px] lg:pr-[15px]  lg:col-span-1 ">
      <div className="xl:pl-[15px]">
        <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
        {/* <SidebarNews title="Daily news" /> */}

        <SidebarNews title="Daily news" posts={data as unknown as PostType[]} />
        <TopCategories />
        <SidebarArticles title="Training" />
      </div>
    </div>
  );
}
