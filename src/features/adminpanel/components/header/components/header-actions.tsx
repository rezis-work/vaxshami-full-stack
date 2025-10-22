"use client";

import React from "react";
import { Mail, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
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

      <Button variant="ghost" size="icon" className="cursor-pointer">
        <Mail className="h-5 w-5" />
      </Button>

      <Button variant="ghost" size="icon" className="cursor-pointer">
        <Bell className="h-5 w-5" />
      </Button>

      <ProfileMenu
        userName={userName}
        userAvatar={userAvatar}
      />
    </div>
  );
}
