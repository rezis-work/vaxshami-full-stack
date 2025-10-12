import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "../../../../components/shared/sectionSidebar";
import DefaultPostArticle from "../components/defaultPostArticle";

export default function DefaultPost({ postTitle }: { postTitle: string }) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <DefaultPostArticle postTitle={postTitle} />
      </MainSectionWrapper>
      <SectionSidebar />
    </SectionWrapper>
  );
}
