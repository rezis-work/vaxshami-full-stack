import Wrapper from "@/components/shared/wrapper";
import React from "react";
import { FaqContainer } from "../components/faqContainer";
import SectionWrapper from "@/components/shared/sectionWrapper";
import FaqSidebar from "../components/faqSidebar";

export default function Faqs() {
  return (
    <Wrapper className="mt-7">
      <h1 className="text-left pl-4 sm:pl-0 md:pl-4 lg:text-center text-xl font-bold tracking-widest mb-5">
        FAQs
      </h1>
      <SectionWrapper>
        <FaqContainer />
        <FaqSidebar />
      </SectionWrapper>
    </Wrapper>
  );
}
