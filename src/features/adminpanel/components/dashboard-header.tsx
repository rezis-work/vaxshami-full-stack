"use client";

import React, { useState } from "react";
import {Menu, MoreHorizontal} from "lucide-react";
import SearchComponent from "./search";
import HeaderActions from "./header/components/header-actions";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
}

export default function DashboardHeader({
  userName = "John Doe",
  userAvatar,
}: DashboardHeaderProps) {
  const [showTools, setShowTools] = useState(false);

  const handleMenuToggle = () => {
    console.log('მენიუს გახსნა');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 min-[700px]:px-6 py-3 min-[700px]:py-4 relative">
      <div className="flex items-center justify-between gap-2">
        {/* Left Side */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="მენიუს გახსნა"
          >
            <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
          {/* Inline search on >= 700px */}
          <div className="hidden min-[700px]:block flex-1 min-w-0">
            <SearchComponent className="w-full" />
          </div>
        </div>

        {/* Right side: Tools toggle (only < 700px) */}
        <div className="flex items-center gap-2 flex-shrink-0 min-[700px]:hidden">
          <button
            onClick={() => setShowTools(!showTools)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="ინსტრუმენტები"
          >
            <MoreHorizontal className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>
        </div>

        {/* Right side: full actions on >= 700px */}
        <HeaderActions userName={userName} userAvatar={userAvatar} className="hidden min-[700px]:flex items-center space-x-3 flex-shrink-0" />

        {/* Tools Panel - toggled by Tools button */}
        {showTools && (
          <div className="min-[700px]:hidden absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-3 z-50 w-[min(100vw-2rem,36rem)]">
            {/* Search inside panel */}
            <div className="mb-3">
              <SearchComponent className="w-full" />
            </div>
            <HeaderActions userName={userName} userAvatar={userAvatar} className="flex items-center justify-center flex-wrap gap-2" />
          </div>
        )}
      </div>
    </header>
  );
}

