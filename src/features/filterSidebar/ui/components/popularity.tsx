"use client";

import React, { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Popularity = ({ title, order }: { title: string; order: string }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [popularitySort, setPopularitySort] = useState(
    searchParams.get("sortOrder") || ""
  );

  const handleClick = (key: string, option: string) => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("sortOrder") === option) {
      setPopularitySort("");
      params.delete("sortOrder");
      params.delete("sortBy");
    } else {
      setPopularitySort(option);
      params.set("sortOrder", option);
      params.set("sortBy", key);
    }

    const newPathname = `${window.location.pathname}?${params.toString()}`;
    router.push(newPathname);
  };

  return (
    <div className="mb-6">
      <h3 className="px-4 py-3 text-sm font-semibold text-gray-800 border-b border-gray-200">
        {title}
      </h3>

      <div className="px-4 pb-3 mt-4">
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => handleClick(order, "asc")}
            className={`text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-700 ${
              popularitySort === "asc"
                ? "bg-blue-50 text-blue-700 outline-none"
                : ""
            } transition-colors duration-150 border border-transparent hover:border-blue-200`}
          >
            ↑ Ascending
          </button>

          <button
            onClick={() => handleClick(order, "desc")}
            className={`text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-700 ${
              popularitySort === "desc"
                ? "bg-blue-50 text-blue-700 outline-none"
                : ""
            } transition-colors duration-150 border border-transparent hover:border-blue-200`}
          >
            ↓ Descending
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popularity;
