import MainSectionWrapper from "@/components/shared/mainSectionWrapper";
import SectionWrapper from "@/components/shared/sectionWrapper";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import BlogView from "@/features/blogCategories/ui/views/blog-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import FilterSidebar from "@/features/filterSidebar/ui/views/filterSidebar-view";
import { IoFilterSharp } from "react-icons/io5";
type ParamsType = {
  params: Promise<{
    category: string;
  }>;
};

export default async function page({ params }: ParamsType) {
  const { category } = await params;

  return (
    <>
      <Sheet>
        <div className="px-[15px] sm:px-0 mt-6 mx-auto sm:max-w-[510px] md:max-w-[690px] lg:max-w-[920px] xl:max-w-[1100px] 2xl:max-w-[1250px]">
          <SheetTrigger className="flex items-center gap-2 border rounded-sm py-1 px-3 cursor-pointer font-medium hover:text-[#6d62ff] hover:border-[#6d62ff] transition">
            <IoFilterSharp className="text-xl" /> <span>Filter</span>
          </SheetTrigger>
        </div>
        <FilterSidebar />
      </Sheet>
      <BlogView blogCategory={category} />
      <DontMiss className="purpleLinearBackground text-white" />
    </>
  );
}
