import DefaultPost from "@/features/defaultPost/ui/views/defaultPost-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";

export default function page({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <main>
      <DefaultPost id={id} />
      <DontMiss
        className="bg-[#FFE1DF] !text-black"
        categoryBg="bg-white"
        hoverTextColor="hover:text-[#6d62ff]"
      />
    </main>
  );
}
