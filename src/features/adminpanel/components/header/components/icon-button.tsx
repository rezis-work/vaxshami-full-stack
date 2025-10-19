"use client";

import React from "react";
import { LucideIcon } from "lucide-react";

interface IconButtonProps {
  icon: LucideIcon;
  onClick?: () => void;
  ariaLabel: string;
  className?: string;
}

export default function IconButton({
  icon: Icon,
  onClick,
  ariaLabel,
  className = "",
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${className}`}
      aria-label={ariaLabel}
    >
      <Icon className="h-5 w-5 text-gray-600 dark:text-gray-400" />
    </button>
  );
}
