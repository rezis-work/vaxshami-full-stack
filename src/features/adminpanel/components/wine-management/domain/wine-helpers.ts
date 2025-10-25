import { Wine } from "@/types/wineTypes";

// Helper functions for wine management
export const formatWinePrice = (price: number): string => {
  return `₾${price.toFixed(2)}`;
};

export const formatWineYear = (year: number): string => {
  return year.toString();
};

export const getWineTypeColor = (type: string): string => {
  switch (type) {
    case 'Red':
      return 'text-red-600 bg-red-50';
    case 'White':
      return 'text-yellow-600 bg-yellow-50';
    case 'Rosé':
      return 'text-pink-600 bg-pink-50';
    default:
      return 'text-gray-600 bg-gray-50';
  }
};

export const sortWinesByName = (wines: Wine[]): Wine[] => {
  return [...wines].sort((a, b) => a.name.localeCompare(b.name));
};

export const sortWinesByPrice = (wines: Wine[]): Wine[] => {
  return [...wines].sort((a, b) => a.price - b.price);
};

export const sortWinesByYear = (wines: Wine[]): Wine[] => {
  return [...wines].sort((a, b) => b.year - a.year);
};
