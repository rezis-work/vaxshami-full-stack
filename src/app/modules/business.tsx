import AdvertisementBanner from "@/components/shared/advertisementBanner";
import HighlightedItems from "@/components/shared/highlightedItems";
import { businessNews, petFriends } from "@/constants/bussinessData";

const Business = () => {
  return (
    <section className="w-full sm:w-[510px] md:w-[690px] lg:w-[960px] xl:w-[1280px] flex flex-col lg:flex-row items-center mx-auto gap-16 lg:gap-8 my-16 px-4">
      <HighlightedItems title="Business News" items={businessNews} />

      <div className="w-[300px] self-stretch mx-auto flex-shrink-0 py-4">
        <AdvertisementBanner image={null} />
      </div>

      <HighlightedItems title="Pet Friends" items={petFriends} />
    </section>
  );
};

export default Business;
