import Link from "next/link";
import SectionTitle from "./sectionTitle";
import { TopCategoryType } from "@/types/topCategoriesTypes";

const TopCategories = ({ categories }: { categories: TopCategoryType[] }) => {
  return (
    <>
      <SectionTitle title="Top Categories" />

      <ul className="w-full grid grid-cols-1 gap-3 mt-6">
        {categories.map((category) => (
          <li key={category.id} className="bg-[#F1F4F9] rounded-sm">
            <Link
              href={category.link}
              className="flex justify-between  py-[15px] px-5"
            >
              <h4 className="font-bold">{category.title}</h4>
              <span className="text-[#FF607D] bg-[#DEE1E5] rounded-sm px-[10px] py-[1px] font-medium text-lg">
                {category.number}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TopCategories;
