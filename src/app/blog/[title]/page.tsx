import DefaultPost from "@/features/defaultPost/ui/views/defaultPost-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";

type ParamsProps = {
  params: {
    title: string;
  };
};

export default async function BlogPage({ params }: ParamsProps) {
  const { title } = await params;

  const postTitle = title.replaceAll("-", " ");

  return (
    <main>
      <DefaultPost postTitle={postTitle} />
      <DontMiss
        className="bg-[#ffe1df] text-black"
        hoverTextColor="hover:text-[#6d62ff]"
        categoryBg="bg-[#ffffff]"
      />
    </main>
  );
}
