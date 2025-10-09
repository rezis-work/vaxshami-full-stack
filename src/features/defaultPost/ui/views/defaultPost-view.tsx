import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "../../../../components/shared/sectionSidebar";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import SidebarArticles from "@/components/shared/sidebarArticles";
import SidebarNews from "@/components/shared/sidebarNews";

//import { DefaultPostType } from "@/types/postTypes";
import DefaultPostArticle from "../components/defaultPostArticle";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";

export default function DefaultPost({ postTitle }: { postTitle: string }) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <DefaultPostArticle postTitle={postTitle} />
      </MainSectionWrapper>
      <SectionSidebar>
        <div className="xl:pl-[15px]">
          <FollowUs gridCols="grid-cols-2 lg:grid-cols-1 xl:grid-cols-2" />
          <SidebarNews title="Daily news" />
          <SidebarArticles title="Training" />
        </div>
      </SectionSidebar>
    </SectionWrapper>
  );
}
