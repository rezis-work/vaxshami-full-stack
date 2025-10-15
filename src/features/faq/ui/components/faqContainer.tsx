import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import QuestionsAndAnswers from "./questionsAndAnswers";
import { firstFaqSection, secondFaqSection } from "@/constants/faq";
import SectionTitle from "@/components/shared/sectionTitle";

export function FaqContainer() {
  return (
    <MainSectionWrapper>
      <SectionTitle title={"General Questions"} />
      <QuestionsAndAnswers list={firstFaqSection} />
      <SectionTitle title={"Get to Know Us"} styles="mt-15" />
      <QuestionsAndAnswers list={secondFaqSection} />
    </MainSectionWrapper>
  );
}
