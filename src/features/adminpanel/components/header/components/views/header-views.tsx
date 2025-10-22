"use client";

import React from "react";
import { Menu, MoreHorizontal } from "lucide-react";
import SearchComponent from "../search";
import HeaderActions from "../header-actions";
import IconButton from "../icon-button";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
}

export default function HeaderViews({
  userName = "John Doe",
  userAvatar,
}: DashboardHeaderProps) {
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
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="cursor-pointer"
                aria-label="ინსტრუმენტები"
              >
                <MoreHorizontal className="h-5 w-5" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-3" align="end" side="bottom" sideOffset={8}>
              <div className="space-y-3">
                {/* Search inside popover */}
                <div className="mb-3">
                  <SearchComponent className="w-full" />
                </div>
                {/* Header Actions inside popover */}
                <HeaderActions 
                  userName={userName} 
                  userAvatar={userAvatar} 
                  className="flex items-center justify-center flex-wrap gap-2" 
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Right side: full actions on >= 700px */}
        <HeaderActions
          userName={userName}
          userAvatar={userAvatar}
          className="hidden min-[700px]:flex items-center space-x-3 flex-shrink-0"
        />
      </div>
    </header>
  );
}
