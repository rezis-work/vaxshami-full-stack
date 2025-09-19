import AdvertisementBanner from "@/components/shared/advertisementBanner";
import Business from "./modules/business";
import FollowUs from "./modules/followUs";
import Gallery from "./modules/gallery";

export default function Home() {
  return (
    <>
      <div className="w-full mx-auto">
        <FollowUs breakpoint={300} />
      </div>

      <Gallery />
      <Business />
    </>
  );
}
