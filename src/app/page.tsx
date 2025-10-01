import BreakingNews from "@/features/breakingNews/ui/views/breakingNews-view";
import Business from "@/features/business/ui/views/business-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import Gallery from "@/features/gallery/ui/views/gallery-view";
import TopStory from "@/features/topStory/ui/views/topStory-view";

export default function Home() {
  return (
    <>
      <BreakingNews />
      <TopStory />
      <Gallery />
      <Business />
      <DontMiss className="purpleLinearBackground" />
    </>
  );
}
