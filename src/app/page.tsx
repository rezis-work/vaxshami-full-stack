import AdvertisementBanner from "@/components/shared/advertisementBanner";
import Business from "./modules/business";
import FollowUs from "./modules/followUs";
import Gallery from "./modules/gallery";

export default function Home() {
  return (
    <>
      <div className="w-[275px] mx-auto">
        <FollowUs />
      </div>

      <Gallery />
      <Business />

      <div className="h-[2000px]">
        <AdvertisementBanner image={null} />
      </div>
    </>
  );
}
