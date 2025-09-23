import Business from "./modules/business";
import FollowUs from "./modules/followUs";
import Gallery from "./modules/gallery";
import ShareLinks from "./modules/shareLinks";

export default function Home() {
  return (
    <>
      <div className="w-full mx-auto h-[40000px]">
        <ShareLinks orientation="row" theme="dark" />
      </div>

      <Gallery />
      <Business />
    </>
  );
}
