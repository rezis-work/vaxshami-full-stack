"use client";

import React from "react";
import SearchComponent from "./search";
import HeaderActions from "./header-actions";

interface ToolsPanelProps {
  userName?: string;
  userAvatar?: string;
  className?: string;
}

export default function ToolsPanel({
  userName,
  userAvatar,
  className = "",
}: ToolsPanelProps) {
  return (
    <div className={`min-[700px]:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 z-50 w-[min(100vw-2rem,36rem)] ${className}`}>
      {/* Search inside panel */}
      <div className="mb-3">
        <SearchComponent className="w-full" />
      </div>
      <HeaderActions 
        userName={userName} 
        userAvatar={userAvatar} 
        className="flex items-center justify-center flex-wrap gap-2" 
      />
    </div>
  );
}
