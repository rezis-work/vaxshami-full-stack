import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionSidebar from "@/components/shared/sectionSidebar";
import SectionWrapper from "@/components/shared/sectionWrapper";
import Blogs from "../components/blogs";
import { Suspense } from "react";
import { SheetTrigger } from "@/components/ui/sheet";
import FilterSidebar from "@/features/filterSidebar/ui/views/filterSidebar-view";
import { Sheet } from "lucide-react";

export default function BlogView({ blogCategory }: { blogCategory: string }) {
  return (
    <SectionWrapper>
      <MainSectionWrapper>
        <Suspense fallback={null}>
          <Blogs blogCategory={blogCategory} />
        </Suspense>
      </MainSectionWrapper>

      <SectionSidebar />
    </SectionWrapper>
  );
}
