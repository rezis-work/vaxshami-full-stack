"use client";

import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <Button
      onClick={onClick}
      variant="ghost"
      size="icon"
      className={`cursor-pointer ${className}`}
      aria-label={ariaLabel}
    >
      <Icon className="h-5 w-5" />
    </Button>
  );
}
