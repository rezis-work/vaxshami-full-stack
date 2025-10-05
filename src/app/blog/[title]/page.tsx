import { blogCardsData } from "@/constants/blogCardsData";
import DefaultPostView from "@/features/defaultPost/ui/views/defaultPost-view";

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

  return <DefaultPostView blog={blog} />;
}
