import { blogCardsData } from "@/constants/blogCardsData";
import DefaultPost from "@/features/defaultPost/ui/views/defaultPost-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";

type ParamsProps = {
  params: {
    title: string;
  };
};

export default async function BlogPage({ params }: ParamsProps) {
  const { title } = await params;

  const blog = blogCardsData.find(
    (blog) => blog.title === title.replaceAll("-", " ")
  )!;

  return (
    <main>
      <DefaultPost blog={blog} />
      <DontMiss
        className="bg-[#FFE1DF] !text-black"
        categoryBg="bg-[#FFFFFF]"
        hoverTextColor="hover:text-[#6d62ff]"
      />
    </main>
  );
}
