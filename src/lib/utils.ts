import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  if (!date) return "";
  const parsedDate = new Date(date);

  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format");
  }

  const formattedDate = parsedDate.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  return formattedDate;
}
