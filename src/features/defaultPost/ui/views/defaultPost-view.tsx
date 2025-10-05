import { blogCardsData } from "@/constants/blogCardsData";
import DefaultPost from "../components/defaultPost";
import DefaultSidebar from "../../../../components/shared/sectionSidebar";
import SectionWrapper from "@/components/shared/sectionWrapper";

export default function DefaultPostView() {
  return (
    <SectionWrapper>
      <DefaultPost post={blogCardsData[5]} />
      <DefaultSidebar />
    </SectionWrapper>
  );
}
