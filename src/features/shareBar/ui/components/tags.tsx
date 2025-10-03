import { tags } from "@/constants/postsDats";
import Link from "next/link";
import { BsTags } from "react-icons/bs";
const Tags = () => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="flex items-center gap-1 !text-gray-500">
        <BsTags /> <span className="text-lg">Tags: </span>
      </div>

      <div>
        {tags.map((tag) => (
          <Link
            href={tag.link}
            key={tag.id}
            className="font-semibold text-lg underlineHover hover:text-[#6B5DF7]"
          >
            {tag.tag}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Tags;
