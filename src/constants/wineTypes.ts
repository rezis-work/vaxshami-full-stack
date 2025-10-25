import { Wine, Droplets, Circle } from "lucide-react";

export const WINE_TYPES = [
  { value: "Red", label: "წითელი", icon: Wine },
  { value: "White", label: "თეთრი", icon: Droplets },
  { value: "Black", label: "შავი", icon: Circle },
] as const;

export type WineType = typeof WINE_TYPES[number]["value"];
