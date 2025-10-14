"use client";
import React from "react";
import CategoryCard from "./categoryCard";
import { useGetPosts } from "@/hooks/useGetPosts";
import { getMostCategories } from "@/lib/utils";
import ErrorCard from "@/components/shared/errorCard";

export default function CategoryContainer() {
  const { data: posts, isLoading } = useGetPosts({
    queryKeyName: "allPosts",
    limit: 1000,
  });
  if (isLoading) return null;
  if (!posts) return <ErrorCard />;
  const categories = getMostCategories(posts, "category");

  return (
    <ul className="w-full  space-y-[10px]">
      {categories.map((c) => (
        <li key={c.name}>
          {" "}
          <CategoryCard categoryName={c.name} count={c.count} />
        </li>
      ))}
    </ul>
  );
}
