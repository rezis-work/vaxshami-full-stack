import React from "react";
import SportNews from "../components/sportNews";
import RecentPosts from "../components/recentPosts";
import TravelNews from "../components/travelNews";
import Wrapper from "@/components/shared/wrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";

export default function HomePageBlogs() {
  return (
    <Wrapper className="mt-[60px] xl:px-4 2xl:px-[18px]">
      <SectionWrapper>
        <TravelNews />
        <RecentPosts />
        <SportNews />
        <SectionSidebar />
      </SectionWrapper>
    </Wrapper>
  );
}
