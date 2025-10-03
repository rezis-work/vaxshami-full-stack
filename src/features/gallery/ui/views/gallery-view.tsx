import Wrapper from "@/components/shared/wrapper";
import MainPost from "../components/mainPost";
import SecondaryPosts from "../components/secondaryPosts";
import SectionTitle from "@/components/shared/sectionTitle";

const Gallery = () => {
  return (
    <section className="my-8 bg-[#03071E] text-white">
      <Wrapper className="relative grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-3 gap-6 pt-30 pb-16 mx-auto ">
        <SectionTitle
          title="Gallery"
          styles="absolute left-4 md:left-8 lg:left-10 2xl:left-0 top-18 items-end"
        />

        <MainPost />

        <SecondaryPosts />
      </Wrapper>
    </section>
  );
};

export default Gallery;
