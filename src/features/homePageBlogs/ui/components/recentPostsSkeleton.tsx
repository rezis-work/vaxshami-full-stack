"use client";
import React from "react";

export default function RecentPostsSkeleton() {
  const skeletons = Array.from({ length: 6 });

  return (
    <section className="mb-[30px]">
      <h2 className="text-xl font-semibold mb-6">Recent Posts</h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skeletons.map((_, i) => (
          <div key={i} className="flex gap-5 lg:gap-[30px] animate-pulse">
            <div className="relative flex-shrink-0 w-[150px] lg:w-[250px] aspect-[1.59] bg-gray-200 rounded-2xl overflow-hidden" />

            <div className="flex flex-col flex-1 justify-center">
              <div className="flex items-center gap-4 mb-3">
                <div className="h-5 w-20 bg-gray-200 rounded-full" />
                <div className="h-4 w-16 bg-gray-200 rounded-full" />
              </div>

              <div className="h-6 w-3/4 bg-gray-200 rounded-md mb-3" />

              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-200 rounded-md" />
                <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
