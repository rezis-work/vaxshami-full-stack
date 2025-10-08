import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import HeroArticle from "@/features/heroArticle/ui/views/heroArticle-view";
import HeroBanner from "@/features/heroBanner/ui/views/heroBanner-view";
import ShareBar from "@/features/shareBar/ui/views/shareBar-view";

export default function page() {
  return (
    <main>
      <HeroBanner />
      <HeroArticle />
      <ShareBar />
      <DontMiss
        className="bg-[#FFE1DF] !text-black"
        categoryBg="bg-white"
        hoverTextColor="hover:text-[#6d62ff]"
      />
    </main>
  );
}
