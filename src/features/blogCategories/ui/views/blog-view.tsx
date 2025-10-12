import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";
import SectionWrapper from "@/components/shared/sectionWrapper";
import Blogs from "../components/blogs";

export default function BlogView({ blogCategory }: { blogCategory: string }) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <Blogs blogCategory={blogCategory} />
      </MainSectionWrapper>
      <SectionSidebar />
    </SectionWrapper>
  );
}
