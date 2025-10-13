import SecondaryPostPard from "@/components/shared/secondaryPostCard";
import { galleryItems } from "@/constants/galleryData";
import Image from "next/image";

const SecondaryPosts = ({
  images,
}: {
  images: { image: string; id: string }[];
}) => {
  return (
    <div className="rounded-sm borderGradient p-1 lg:col-span-3 xl:col-span-1">
      <ul className="h-full flex flex-col gap-4 rounded-sm bg-[#03071E]  px-6 py-4">
        {images.slice(1).map((item) => (
          <Image
            key={item.id}
            src={item.image}
            width={140}
            height={90}
            alt="restaurant image"
            className="object-cover rounded-sm"
          />
        ))}
      </ul>
    </div>
  );
};

export default SecondaryPosts;
