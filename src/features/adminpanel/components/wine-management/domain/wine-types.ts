// Wine-specific types for the domain layer
export interface WineType {
  value: string;
  label: string;
  icon: string;
}

export interface WineTypeInfo {
  value: string;
  label: string;
  icon: string;
}

// Domain-specific wine validation
export const validateWineData = (data: any): boolean => {
  return data && 
         typeof data.name === 'string' && 
         data.name.trim().length > 0 &&
         typeof data.year === 'number' && 
         data.year >= 1900 &&
         typeof data.price === 'number' && 
         data.price >= 0 &&
         ['Red', 'White', 'Rosé'].includes(data.type);
};

// Domain-specific wine business rules
export const calculateWineAge = (year: number): number => {
  return new Date().getFullYear() - year;
};

export const isVintageWine = (year: number): boolean => {
  return calculateWineAge(year) >= 10;
};

export const getWineCategory = (price: number): string => {
  if (price < 20) return 'Budget';
  if (price < 50) return 'Mid-range';
  if (price < 100) return 'Premium';
  return 'Luxury';
};
