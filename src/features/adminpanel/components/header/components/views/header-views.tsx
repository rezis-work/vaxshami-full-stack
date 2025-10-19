"use client";

import React, { useState } from "react";
import { Menu, MoreHorizontal } from "lucide-react";
import SearchComponent from "../search";
import HeaderActions from "../header-actions";
import IconButton from "../icon-button";
import ToolsPanel from "../tools-panel";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
}

export default function HeaderViews({
  userName = "John Doe",
  userAvatar,
}: DashboardHeaderProps) {
  const [showTools, setShowTools] = useState(false);
  const handleMenuToggle = () => {
    console.log("მენიუს გახსნა");
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 min-[700px]:px-6 py-3 min-[700px]:py-4 relative">
      <div className="flex items-center justify-between gap-2">
        {/* Left Side */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          {/* Hamburger Menu */}
          <IconButton
            icon={Menu}
            onClick={handleMenuToggle}
            ariaLabel="მენიუს გახსნა"
          />
          {/* Inline search on >= 700px */}
          <div className="hidden min-[700px]:block flex-1 min-w-0">
            <SearchComponent className="w-full" />
          </div>
        </div>

        {/* Right side: Tools toggle (only < 700px) */}
        <div className="flex items-center gap-2 flex-shrink-0 min-[700px]:hidden">
          <IconButton
            icon={MoreHorizontal}
            onClick={() => setShowTools(!showTools)}
            ariaLabel="ინსტრუმენტები"
          />
        </div>

        {/* Right side: full actions on >= 700px */}
        <HeaderActions
          userName={userName}
          userAvatar={userAvatar}
          className="hidden min-[700px]:flex items-center space-x-3 flex-shrink-0"
        />

        {/* Tools Panel - toggled by Tools button */}
        {showTools && (
          <ToolsPanel
            userName={userName}
            userAvatar={userAvatar}
          />
        )}
      </div>
    </header>
  );
}
