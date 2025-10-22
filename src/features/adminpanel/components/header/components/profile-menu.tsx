"use client";

import React, { useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  const [open, setOpen] = useState(false);

  return (
    <div className={`relative ${className}`}>
      <Button
        onClick={() => setOpen(!open)}
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

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-2">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{userName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
            </div>
            <Button variant="ghost" className="flex items-center w-full px-4 py-2 text-sm justify-start cursor-pointer">
              <User className="h-4 w-4 mr-3" />
              პროფილი
            </Button>
            <Button variant="ghost" className="flex items-center w-full px-4 py-2 text-sm justify-start cursor-pointer">
              <Settings className="h-4 w-4 mr-3" />
              პარამეტრები
            </Button>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
              <Button variant="ghost" className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 justify-start cursor-pointer">
                <LogOut className="h-4 w-4 mr-3" />
                გასვლა
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


