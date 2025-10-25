"use client";

import React, { useState } from "react";
import { Menu } from "lucide-react";
import SearchComponent from "../search";
import HeaderActions from "../header-actions";
import IconButton from "../icon-button";
import MobileToolsPopover from "../mobile-tools-popover";
import WineSidebar from "../../../wine-management/wine-sidebar";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
  children?: React.ReactNode;
}

export default function HeaderViews({
  userName = "John Doe",
  userAvatar,
  children,
}: DashboardHeaderProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleHomeClick = () => {
    // This will be handled by the sidebar component
  };

  const handleDrinksToggle = () => {
    // This will be handled by the sidebar component
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Wine Sidebar */}
      <WineSidebar 
        onDrinksToggle={handleDrinksToggle}
        onHomeClick={handleHomeClick}
        isDrinksOpen={false}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      
      {/* Main Content */}
      <div className="transition-all duration-300 min-[700px]:ml-64">
        {/* Header */}
        <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-4 min-[700px]:px-6 py-1">
          <div className="flex items-center justify-between gap-2">
            {/* Left Side */}
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Hamburger Menu - Only visible on mobile */}
              <IconButton
                icon={Menu}
                onClick={handleMenuToggle}
                ariaLabel="საიდბარის გახსნა"
                className="flex-shrink-0 min-[700px]:hidden"
              />
              {/* Inline search on >= 700px */}
              <div className="hidden min-[700px]:block flex-1 min-w-0">
                <SearchComponent className="w-full" />
              </div>
            </div>
            {/* Right side: Tools toggle (only < 700px) */}
            <div className="flex items-center gap-2 flex-shrink-0 min-[700px]:hidden">
              <MobileToolsPopover
                userName={userName}
                userAvatar={userAvatar}
              />
            </div>
            {/* Right side: full actions on >= 700px */}
            <HeaderActions
              userName={userName}
              userAvatar={userAvatar}
              className="hidden min-[700px]:flex items-center space-x-3 flex-shrink-0"
            />
          </div>
        </header>

        {/* Page Content */}
        <div className="p-3">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
