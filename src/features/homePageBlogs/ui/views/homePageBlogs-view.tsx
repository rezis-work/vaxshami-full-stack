import HomeBlogsContainer from "../components/homeBlogsContainer";
import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import { useGetDailyNewsList } from "../../api";
import SectionSidebarWrapper from "../components/sectionSidebarWrapper";

export default function HomePageBlogs() {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <HomeBlogsContainer />
      </MainSectionWrapper>
      <SectionSidebarWrapper />
    </SectionWrapper>
  );
}
