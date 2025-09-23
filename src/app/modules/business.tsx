import AdvertisementBanner from "@/components/shared/advertisementBanner";
import HighlightedItems from "@/components/shared/highlightedItems";
import Wrapper from "@/components/shared/wrapper";
import { businessNews, petFriends } from "@/constants/bussinessData";

const Business = () => {
  return (
    <section>
      <Wrapper className=" flex flex-col lg:flex-row items-center mx-auto gap-16 md:gap-4 lg:gap-8 xl:gap-8 2xl:gap-20 my-16 px-0">
        <HighlightedItems title="Business News" items={businessNews} />

        <div className="w-[300px] self-stretch mx-auto flex-shrink-0 py-4">
          <AdvertisementBanner image={null} position="auto" />
        </div>

        <HighlightedItems title="Pet Friends" items={petFriends} />
      </Wrapper>
    </section>
  );
};

export default Business;
