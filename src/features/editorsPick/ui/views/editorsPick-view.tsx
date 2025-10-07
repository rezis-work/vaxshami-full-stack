import Wrapper from "@/components/shared/wrapper";
import TopCards from "../components/topCards";
import BottomCards from "../components/bottomCards";
import { blogCardsData } from "@/constants/blogCardsData";
import SectionTitle from "@/components/shared/sectionTitle";
import Advert from "../components/advert";

const EditorsPick = () => {
  return (
    <section className="overflow-x-hidden mb-14">
      <Wrapper className="my-12 mb-18">
        <SectionTitle title="Editor's Pick" />
        <TopCards cardsData={blogCardsData.slice(0, 2)} />
        <Advert classname="" link="" text="" image="/linedev.png" />
      </Wrapper>

      <BottomCards cardsData={blogCardsData.slice(2, 5)} />
    </section>
  );
};

export default EditorsPick;
