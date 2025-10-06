import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "../../../../components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarArticles from "@/components/shared/sidebarArticles";
import SidebarNews from "@/components/shared/sidebarNews";

import { DefaultPostType } from "@/types/postTypes";
import DefaultPostArticle from "../components/defaultPostArticle";

export default function DefaultPost({ blog }: { blog: DefaultPostType }) {
  return (
    <SectionWrapper>
      <DefaultPostArticle post={blog} />
      <SectionSidebar>
        <div className="md:pl-[15px]">
          <FollowUs gridCols="grid-cols-2" />
          <SidebarNews title="Daily news" />
          <SidebarArticles title="Training" />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
