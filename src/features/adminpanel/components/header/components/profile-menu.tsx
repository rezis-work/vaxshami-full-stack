"use client";

import React, { useState } from "react";
import { ChevronDown, LogOut, Settings, User } from "lucide-react";

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
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
          {userAvatar ? (
            <img
              src={userAvatar}
              alt={userName}
              className="w-8 h-8 rounded-full object-cover"
            />
          ) : (
            <User className="h-4 w-4 text-white" />
          )}
        </div>
        <ChevronDown className="h-4 w-4 text-gray-600 dark:text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50">
          <div className="py-2">
            <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
              <p className="text-sm font-medium text-gray-900 dark:text-white">{userName}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">john.doe@example.com</p>
            </div>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <User className="h-4 w-4 mr-3" />
              პროფილი
            </button>
            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
              <Settings className="h-4 w-4 mr-3" />
              პარამეტრები
            </button>
            <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
              <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700">
                <LogOut className="h-4 w-4 mr-3" />
                გასვლა
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}


