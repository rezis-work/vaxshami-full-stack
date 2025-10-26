"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  const handleToggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
  };

  return (
    <Button
      onClick={handleToggle}
      variant="ghost"
      size="icon"
      className={`cursor-pointer ${className}`}
      aria-label="თემის შეცვლა"
    >
      {theme === "dark" ? (
        <Sun className="lucide lucide-sun h-5 w-5" />
      ) : (
        <Moon className=" lucide lucide-moon h-5 w-5" />
      )}
    </Button>
  );
}


