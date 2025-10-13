"use client";
import React from "react";

export default function DefaultSkeleton() {
  return (
    <div className="sm:px-[15px] md:px-0 animate-pulse">
      {/* Breadcrumbs */}
      <div className="flex mb-4 text-[14px] font-[500]">
        <div className="h-4 w-16 bg-gray-200 rounded-md mr-2" />
        <div className="h-4 w-20 bg-gray-200 rounded-md mr-2" />
        <div className="h-4 w-40 bg-gray-200 rounded-md" />
      </div>

      {/* Title */}
      <div className="h-10 w-3/4 bg-gray-200 rounded-md mb-4" />

      {/* Description / summary (2–3 lines) */}
      <div className="space-y-3 mb-6">
        <div className="h-4 w-full bg-gray-200 rounded-md" />
        <div className="h-4 w-5/6 bg-gray-200 rounded-md" />
        <div className="h-4 w-4/6 bg-gray-200 rounded-md" />
      </div>

      {/* Author / date / read time row */}
      <div className="flex justify-between mb-[30px]">
        <div className="flex items-center gap-3">
          <div className="h-6 w-6 rounded-full bg-gray-200" />
          <div className="h-4 w-20 bg-gray-200 rounded-md" />
          <div className="h-4 w-4 bg-gray-200 rounded-md" />
          <div className="h-4 w-24 bg-gray-200 rounded-md" />
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <div className="h-4 w-4 bg-gray-200 rounded-full" />
          <div className="h-4 w-12 bg-gray-200 rounded-md" />
        </div>
      </div>

      {/* Cover image */}
      <div className="relative w-full aspect-[1.43] xl:aspect-[1.78] bg-gray-200 rounded-sm mb-[30px]" />
    </div>
  );
}
