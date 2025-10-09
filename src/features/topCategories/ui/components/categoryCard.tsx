import Link from "next/link";
import React from "react";

type TopCategoriesType = {
  categoryName: string;
  count: number;
};

export default function CategoryCard({
  categoryName,
  count,
}: TopCategoriesType) {
  return (
    <Link
      href={`/blog/${categoryName}`}
      className="flex items-center justify-between 
             bg-gray-100 px-4 py-4 
             rounded-lg font-medium text-black 
             "
    >
      <span>{categoryName}</span>
      <span
        className="bg-gray-200 text-pink-500 
                       rounded-md px-2 py-0.5 
                       text-sm font-semibold"
      >
        {count}
      </span>
    </Link>
  );
}
