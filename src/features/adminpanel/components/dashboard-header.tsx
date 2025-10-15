"use client";

import React, { useState } from "react";
import { 
  Menu, 
  Search, 
  Bell, 
  Mail, 
  Maximize2, 
  Settings, 
  Moon, 
  Sun,
  MoreHorizontal,
  User,
  LogOut,
  ChevronDown
} from "lucide-react";

interface DashboardHeaderProps {
  userName?: string;
  userAvatar?: string;
}

export default function DashboardHeader({
  userName = "John Doe",
  userAvatar,
}: DashboardHeaderProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('ძებნა:', searchQuery);
  };

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
    console.log('თემის შეცვლა:', !isDarkMode ? 'dark' : 'light');
  };

  const handleMenuToggle = () => {
    console.log('მენიუს გახსნა');
  };

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left Side */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Menu */}
          <button
            onClick={handleMenuToggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="მენიუს გახსნა"
          >
            <Menu className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="ძებნა..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-80 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </form>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={handleThemeToggle}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="თემის შეცვლა"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
            )}
          </button>

          {/* Messages */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Notifications */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={() => {
              if (document.fullscreenElement) {
                document.exitFullscreen();
              } else {
                document.documentElement.requestFullscreen();
              }
            }}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="სრული ეკრანი"
          >
            <Maximize2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* More Options */}
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <MoreHorizontal className="h-5 w-5 text-gray-600 dark:text-gray-400" />
          </button>

          {/* Profile Section */}
          <div className="relative">
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
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

            {/* Profile Dropdown */}
            {showProfileMenu && (
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
        </div>
      </div>
    </header>
  );
}
