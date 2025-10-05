import BlogCard from "@/components/shared/blogCard";
import { blogCardsData } from "@/constants/blogCardsData";
import BreakingNews from "@/features/breakingNews/ui/views/breakingNews-view";
import Business from "@/features/business/ui/views/business-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import Gallery from "@/features/gallery/ui/views/gallery-view";
import HeroSection from "@/features/heroSection/ui/views/heroSection-view";

export default function Home() {
  return (
    <main>
      <BlogCard blog={blogCardsData[5]} variant="blog" />
      <BreakingNews />
      <HeroSection />
      <Gallery />
      <Business />
      <DontMiss className="purpleLinearBackground" />
    </main>
  );
}
