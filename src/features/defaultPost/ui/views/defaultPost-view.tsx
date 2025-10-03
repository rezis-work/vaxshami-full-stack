import { blogCardsData } from "@/constants/blogCardsData";
import DefaultPost from "../components/defaultPost";
import DefaultSidebar from "../components/defaultSidebar";

export default function DefaultPostView() {
  return (
    // container
    <div className="m-auto sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] 2xl:max-w-[1280px] px-[15px]">
      {/* row */}
      <div className="flex flex-wrap justify-center mx-[-15px]">
        <DefaultPost post={blogCardsData[5]} />
        <DefaultSidebar />
      </div>
    </div>
  );
}
