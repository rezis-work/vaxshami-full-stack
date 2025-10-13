"use client";

import Wrapper from "@/components/shared/wrapper";
import MainPost from "../components/mainPost";
import SecondaryPosts from "../components/secondaryPosts";
import SectionTitle from "@/components/shared/sectionTitle";
import { useGetPostsList } from "../../api";
import Image from "next/image";

const Gallery = () => {
  const { data, isLoading } = useGetPostsList();

  if (isLoading) return <div>Loading...</div>;
  if (!data) return <div>No Data</div>;

  return (
    <section className="my-8 bg-[#03071E] text-white">
      <Wrapper className="relative grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-3 gap-6 pt-30 pb-16 mx-auto ">
        <SectionTitle
          title="Gallery"
          styles="absolute left-4 sm:left-0 md:left-0 top-18 items-end"
        />

        <div className="lg:col-span-4 xl:col-span-2 ">
          <img
            src={data[0].image}
            alt="drink image"
            className="object-cover h-full"
          />
        </div>

        <SecondaryPosts images={data as unknown as []} />
      </Wrapper>
    </section>
  );
};

export default Gallery;
