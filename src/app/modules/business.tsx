import HighlightedItems from "@/components/shared/highlightedItems";
import { businessNews, petFriends } from "@/constants/bussinessData";
import Image from "next/image";
import Link from "next/link";

const Business = () => {
  return (
    <section className="w-full sm:w-[510px] md:w-[690px] lg:w-[960px] xl:w-[1280px] flex flex-col lg:flex-row items-center mx-auto gap-16 lg:gap-8 my-16 px-4">
      <HighlightedItems title="Business News" items={businessNews} />

      <div className="w-[300px] self-stretch mx-auto flex-shrink-0 py-4">
        <h4 className="w-min text-[10px] tracking-widest mb-1 mx-auto uppercase">
          sponsored
        </h4>

        <Link
          href="#"
          className=" h-full flex flex-col items-center gap-16 bg-[#FFE1DF] px-10 py-6 rounded-4xl border border-gray-700"
        >
          <Image
            src="/logo-morena-dark.png"
            width={200}
            height={80}
            alt="morena logo"
            className="mt-18"
          />

          <p className="text-center text-[#A38F8E] text-lg leading-6">
            Fresh &amp; Lighweight Theme for News &amp; Magazine sites on
            Blogges.com
          </p>

          <button className=" uppercase bg-[#6D62FF] text-white font-medium text-[16px] rounded-full py-[10px] px-10 cursor-pointer">
            buy now
          </button>

          <span className="uppercase text-[#A38F8E] text-[16px] ">
            ads place 300x500
          </span>
        </Link>
      </div>

      <HighlightedItems title="Pet Friends" items={petFriends} />
    </section>
  );
};

export default Business;
