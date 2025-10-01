import React from "react";
import HeroContent from "../components/heroContent";
import Wrapper from "@/components/shared/wrapper";
import HeroCards from "../components/heroCards";

const TopStory = () => {
  return (
    <section className="relative w-full flex flex-col justify-between py-9 rounded-sm bg-[url('/slider-3.png')] bg-cover bg-center aspect-[4/2.8] lg:aspect-[4/2] xl:aspect-[4/1.5] transition-all duration-300">
      <div className="absolute inset-0 bg-black/30 rounded-sm" />

      <Wrapper className="w-full z-10 flex flex-col justify-between h-full lg:pt-10">
        <HeroContent />

        <HeroCards />
      </Wrapper>
    </section>
  );
};

export default TopStory;
