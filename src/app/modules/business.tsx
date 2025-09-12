import AdvertisementBanner from "@/components/shared/advertisementBanner";
import HighlightedItems from "@/components/shared/highlightedItems";
import { businessNews, petFriends } from "@/constants/bussinessData";

const Business = () => {
  return (
    <section className="w-full sm:w-[600px] md:w-full lg:w-[960px] xl:w-[1280px] flex flex-col md:flex-row items-center mx-auto gap-16 md:gap-4 lg:gap-8 xl:gap-18 my-16 px-4">
      <HighlightedItems title="Business News" items={businessNews} />

      <div className="w-[290px] self-stretch mx-auto flex-shrink-0 py-4">
        <AdvertisementBanner image={null} />
      </div>

      <HighlightedItems title="Pet Friends" items={petFriends} />
    </section>
  );
};

export default Business;
