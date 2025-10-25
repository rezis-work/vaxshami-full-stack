"use client";

import React from "react";
import { FileText, LucideIcon } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

export default function EmptyState({ 
  title, 
  description, 
  icon: Icon = FileText,
  className = "" 
}: EmptyStateProps) {
  return (
    <div className={`bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 p-8 text-center shadow-sm ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full">
          <Icon className="h-8 w-8 text-white" />
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400 text-sm">
        {description}
      </p>
    </div>
  );
}
