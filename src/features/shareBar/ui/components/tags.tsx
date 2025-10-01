import { tags } from "@/constants/postsDats";
import { BsTags } from "react-icons/bs";
const Tags = () => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="flex items-center gap-1 !text-gray-500">
        <BsTags /> <span className="text-lg">Tags: </span>
      </div>

      <ul>
        {tags.map((tag) => (
          <li key={tag.id} className="font-semibold text-lg">
            {tag.tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tags;
