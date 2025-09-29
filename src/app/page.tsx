import Business from "@/features/business/ui/views/business-view";
import FollowUs from "@/features/followUs/ui/views/followUs-view";
import Gallery from "@/features/gallery/ui/views/gallery-view";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";

export default function Home() {
  return (
    <>
      <div className="w-[500px] flex mx-auto gap-10">
        <ShareLinks theme="dark" flexDirection="flex-col" />

        <FollowUs breakpoint={300} />
      </div>
      <Gallery />
      <Business />
    </>
  );
}
