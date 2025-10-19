"use client";

import React from "react";
import { Mail, Bell } from "lucide-react";
import ThemeToggle from "./theme-toggle";
import ProfileMenu from "./profile-menu";

interface HeaderActionsProps {
  userName?: string;
  userAvatar?: string;
  className?: string;
}

export default function HeaderActions({
  userName = "John Doe",
  userAvatar,
  className = "",
}: HeaderActionsProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <ThemeToggle />

      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      </button>

      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Bell className="h-5 w-5 text-gray-600 dark:text-gray-400" />
      </button>

      <ProfileMenu userName={userName} userAvatar={userAvatar} />
    </div>
  );
}


