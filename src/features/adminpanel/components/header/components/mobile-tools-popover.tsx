"use client";

import React from "react";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import SearchComponent from "./search";
import HeaderActions from "./header-actions";

interface MobileToolsPopoverProps {
  userName?: string;
  userAvatar?: string;
}

export default function MobileToolsPopover({
  userName = "John Doe",
  userAvatar,
}: MobileToolsPopoverProps) {
  return (
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
      <PopoverContent
        className="w-screen max-w-none p-4 mx-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-xl rounded-lg"
        align="center"
        side="bottom"
        sideOffset={8}
      >
        <div className="space-y-4">
          {/* Search inside popover */}
          <div className="flex justify-center">
            <div className="w-full max-w-sm p-3 bg-gray-50/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm">
              <SearchComponent className="w-full" />
            </div>
          </div>
          {/* Header Actions inside popover */}
          <div className="p-3 bg-gray-50/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm">
            <HeaderActions
              userName={userName}
              userAvatar={userAvatar}
              className="flex items-center justify-center flex-wrap gap-3"
            />
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
