import DefaultPost from "../components/defaultPost";
import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "../../../../components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarArticles from "@/components/shared/sidebarArticles";
import SidebarNews from "@/components/shared/sidebarNews";

import { DefaultPostType } from "@/types/postTypes";

export default function DefaultPostView({ blog }: { blog: DefaultPostType }) {
  return (
    <SectionWrapper>
      <DefaultPost post={blog} />
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
