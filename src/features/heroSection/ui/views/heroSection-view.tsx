"use client";

import HeroContent from "../components/heroContent";
import Wrapper from "@/components/shared/wrapper";
import HeroCards from "../components/heroCards";
import HeroSkeleton from "./heroSkeleton-view";
import { useGetPostsList } from "../../api";
import { PostType } from "@/types/postType";
import ErrorCard from "@/components/shared/errorCard";

const HeroSection = () => {
  const { data, isLoading, isError } = useGetPostsList();

  if (isLoading) return <HeroSkeleton />;
  if (isError || !data) return <ErrorCard />;

  const mainCard = data[0];

  return (
    <section
      className={`relative w-full flex flex-col justify-between py-9 rounded-sm bg-cover bg-center aspect-[4/2.8] lg:aspect-[4/2] xl:aspect-[4/1.5] transition-all duration-300`}
      style={{ backgroundImage: `url('${mainCard.coverimage}')` }}
    >
      <div className="absolute inset-0 bg-black/25 rounded-sm" />

      <Wrapper className="w-full z-10 flex flex-col justify-between h-full lg:pt-10">
        <HeroContent
          category={mainCard.category}
          date={mainCard.$createdAt}
          summary={mainCard.summary}
          title={mainCard.title}
        />

        <HeroCards cards={data.slice(1, 5) as unknown as PostType[]} />
      </Wrapper>
    </section>
  );
};

export default HeroSection;
