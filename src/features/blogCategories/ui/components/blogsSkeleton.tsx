"use client";
import React from "react";

export default function BlogsSkeleton() {
  const skeletons = Array.from({ length: 6 });

  return (
    <div className="space-y-10 mb-15">
      {skeletons.map((_, i) => (
        <div key={i} className="flex flex-col lg:flex-row gap-6 animate-pulse">
          <div className="w-full lg:w-[45%] aspect-[1.7] bg-gray-200 rounded-2xl" />

          <div className="flex flex-col justify-center w-full lg:w-[55%] space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-5 w-24 bg-gray-200 rounded-full" />
              <div className="h-4 w-16 bg-gray-200 rounded-full" />
            </div>

            <div className="h-7 w-3/4 bg-gray-200 rounded-md" />

            <div className="space-y-2 mt-2">
              <div className="h-4 w-full bg-gray-200 rounded-md" />
              <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
              <div className="h-4 w-2/3 bg-gray-200 rounded-md" />
            </div>
          </div>
        </div>
      ))}

      {/* Load more button placeholder */}
      <div className="flex justify-center mt-12">
        <div className="h-10 w-36 bg-gray-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
}
