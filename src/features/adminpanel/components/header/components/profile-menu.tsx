"use client";

import React from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface ProfileMenuProps {
  userName?: string;
  userAvatar?: string;
  className?: string;
}

export default function ProfileMenu({
  userName = "John Doe",
  userAvatar,
  className = "",
}: ProfileMenuProps) {
  const handleProfile = () => {
    console.log("პროფილი");
  };

  const handleSettings = () => {
    console.log("პარამეტრები");
  };

  const handleLogout = () => {
    console.log("გასვლა");
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center space-x-2 p-2 cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
            {userAvatar ? (
              <Image
                src={userAvatar}
                alt={userName}
                width={32}
                height={32}
                className="w-8 h-8 rounded-full object-cover"
              />
            ) : (
              <User className="h-4 w-4 text-white" />
            )}
          </div>
          <ChevronDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-56 p-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border border-gray-200/50 dark:border-gray-700/50 shadow-xl rounded-lg"
        align="end"
      >
        <div className="py-3">
          {/* User Info Section */}
          <div className="px-4 py-3 mx-3 mb-2 bg-gray-50/80 dark:bg-gray-800/80 rounded-xl border border-gray-200/60 dark:border-gray-700/60 backdrop-blur-sm">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {userName}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              john.doe@example.com
            </p>
          </div>

          {/* Menu Items */}
          <div className="px-2">
            <Button
              variant="ghost"
              className="flex items-center w-full px-3 py-2.5 text-sm justify-start cursor-pointer hover:bg-gray-100/80 dark:hover:bg-gray-700/80 rounded-lg mx-1 transition-colors duration-200"
              onClick={handleProfile}
            >
              <User className="h-4 w-4 mr-3 text-gray-600 dark:text-gray-400" />
              პროფილი
            </Button>
            <Button
              variant="ghost"
              className="flex items-center w-full px-3 py-2.5 text-sm justify-start cursor-pointer hover:bg-gray-100/80 dark:hover:bg-gray-700/80 rounded-lg mx-1 transition-colors duration-200"
              onClick={handleSettings}
            >
              <Settings className="h-4 w-4 mr-3 text-gray-600 dark:text-gray-400" />
              პარამეტრები
            </Button>

            {/* Logout Section */}
            <div className="mt-2 pt-2 border-t border-gray-200/60 dark:border-gray-700/60">
              <Button
                variant="ghost"
                className="flex items-center w-full px-3 py-2.5 text-sm text-red-600 dark:text-red-400 justify-start cursor-pointer hover:bg-red-50/80 dark:hover:bg-red-900/20 rounded-lg mx-1 transition-colors duration-200"
                onClick={handleLogout}
              >
                <LogOut className="h-4 w-4 mr-3" />
                გასვლა
              </Button>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
