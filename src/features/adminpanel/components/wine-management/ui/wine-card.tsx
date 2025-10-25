"use client";

import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Wine } from "@/types/wineTypes";

interface WineCardProps {
  wine: Wine;
  onEdit: (wine: Wine) => void;
  onDelete: (id: string) => void;
}

export default function WineCard({ wine, onEdit, onDelete }: WineCardProps) {
  return (
    <div className="p-4 sm:p-5 bg-gray-50/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
       <div className="flex items-start justify-between mb-4">
         <div className="flex items-center gap-3 min-w-0 flex-1">
           <h4 className="font-semibold text-gray-900 dark:text-white truncate text-base sm:text-lg">
             {wine.name}
           </h4>
         </div>
         <div className="flex gap-1 flex-shrink-0 ml-2">
           <Button
             variant="ghost"
             size="icon"
             onClick={() => onEdit(wine)}
             className="h-8 w-8 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-200"
             aria-label="შესწორება"
           >
             <Edit className="h-4 w-4 text-blue-600 dark:text-blue-400" />
           </Button>
           <Button
             variant="ghost"
             size="icon"
             onClick={() => onDelete(wine.id)}
             className="h-8 w-8 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors duration-200"
             aria-label="წაშლა"
           >
             <Trash2 className="h-4 w-4 text-red-600 dark:text-red-400" />
           </Button>
         </div>
       </div>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">წელი:</span>
          <span className="font-semibold text-gray-900 dark:text-white text-base">{wine.year}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 dark:text-gray-400">ფასი:</span>
          <span className="font-semibold text-gray-900 dark:text-white text-base">{wine.price}₾</span>
        </div>
         <div className="flex justify-between items-center">
           <span className="text-gray-600 dark:text-gray-400">ტიპი:</span>
           <span className="text-gray-900 dark:text-white text-base">
             {wine.type}
           </span>
         </div>
      </div>
    </div>
  );
}
