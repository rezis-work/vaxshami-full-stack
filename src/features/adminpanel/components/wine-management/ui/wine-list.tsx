"use client";

import React from "react";
import { Wine, WineListProps } from "@/types/wineTypes";
import WineCard from "./wine-card";
import EmptyState from "./empty-state";
import { Wine as WineIcon } from "lucide-react";

export default function WineList({
  wines,
  onEditWine,
  onDeleteWine,
}: WineListProps) {
  if (wines.length === 0) {
    return (
      <EmptyState 
        title="ღვინოები ჯერ არ არის დამატებული"
        description="დაიწყეთ ახალი ღვინოს დამატებით"
        icon={WineIcon}
      />
    );
  }

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 p-4 sm:p-5 lg:p-6 shadow-lg">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-5 lg:mb-6">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="p-1.5 sm:p-2 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg">
            <WineIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
            ღვინოების სია
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-medium">
            {wines.length} ღვინო
          </span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-4">
        {wines.map((wine) => (
          <WineCard
            key={wine.id}
            wine={wine}
            onEdit={onEditWine}
            onDelete={onDeleteWine}
          />
        ))}
      </div>
    </div>
  );
}
