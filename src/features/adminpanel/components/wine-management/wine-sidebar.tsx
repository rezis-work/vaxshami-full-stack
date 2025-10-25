"use client";

import React from "react";
import { X, Home, Wine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface WineSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  onDrinksToggle: () => void;
  onHomeClick: () => void;
  isDrinksOpen: boolean;
}

export default function WineSidebar({
  isOpen,
  onClose,
  isDrinksOpen,
}: WineSidebarProps) {
  const router = useRouter();

  const handleDrinksClick = () => {
    router.push('/dashboard/drinks');
    onClose(); // Close sidebar on mobile after navigation
  };

  const handleHomeClick = () => {
    router.push('/dashboard');
    onClose(); // Close sidebar on mobile after navigation
  };
  return (
    <>

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } min-[700px]:translate-x-0`}
        style={{ zIndex: 9999 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Vaxshami Admin
          </h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="min-[700px]:hidden"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          <Button
            variant={!isDrinksOpen ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={handleHomeClick}
          >
            <Home className="mr-2 h-4 w-4" />
            მთავარი
          </Button>
          
          <Button
            variant={isDrinksOpen ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={handleDrinksClick}
          >
            <Wine className="mr-2 h-4 w-4" />
            სასმელები
          </Button>
        </nav>
      </div>
    </>
  );
}
