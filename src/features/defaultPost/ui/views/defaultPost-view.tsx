import { blogCardsData } from "@/constants/blogCardsData";
import DefaultPost from "../components/defaultPost";

import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "../../../../components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";

import SidebarArticles from "@/components/shared/sidebarArticles";

export default function DefaultPostView() {
  return (
    <SectionWrapper>
      <DefaultPost post={blogCardsData[5]} />
      <SectionSidebar>
        <div className="md:pl-[15px]">
          <FollowUs gridCols="grid-cols-2" />
          <SidebarArticles title="Training" />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
