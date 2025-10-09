import React from "react";
import CategoryCard from "./categoryCard";
export const categories = [
  { name: "Business", count: 5, link: "#" },
  { name: "Lifestyle", count: 5, link: "#" },
  { name: "Travel", count: 5, link: "#" },
];
export default function CategoryContainer() {
  return (
    <div className="w-full  space-y-3">
      {categories.map((c) => (
        <CategoryCard key={c.name} categoryName={c.name} count={c.count} />
      ))}
    </div>
  );
}
