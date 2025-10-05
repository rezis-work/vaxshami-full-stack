import BlogView from "@/features/blogCategories/ui/views/blog-view";
import DontMiss from "@/features/dontMiss/ui/views/dontMiss-view";
import React from "react";

export default function Blog() {
  return (
    <>
      <BlogView />
      <DontMiss className="purpleLinearBackground" />
    </>
  );
}
