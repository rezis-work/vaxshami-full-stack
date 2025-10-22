"use client";

import React, { useState } from "react";
import { Mail, Bell, User, Search, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import SearchComponent from "./search";

interface ToolsSelectProps {
  userName?: string;
  userAvatar?: string;
}

export default function ToolsSelect({ userName, userAvatar }: ToolsSelectProps) {
  const [showSearch, setShowSearch] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div className="min-[700px]:hidden flex items-center gap-2">
      {showSearch ? (
        <div className="flex items-center gap-2 w-full">
          <SearchComponent 
            className="flex-1" 
            onSearch={(query) => {
              console.log("ძებნა:", query);
              setShowSearch(false);
            }}
          />
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => setShowSearch(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 cursor-pointer"
          >
            ✕
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-1">
          {/* Search Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowSearch(true)}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <Search className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </Button>

          {/* Theme Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-400" />
            )}
          </Button>

          {/* Mail Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("შეტყობინებები")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <Mail className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </Button>

          {/* Notifications Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("შეტყობინებები")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <Bell className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </Button>

          {/* Profile Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => console.log("პროფილი")}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
          >
            <User className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </Button>
        </div>
      )}
    </div>
  );
}
