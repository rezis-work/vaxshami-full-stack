export type FilterCategory = "dish" | "drink" | "product" | "restaurant";

export type FilterAttributes = {
  dish: string[];
  drink: string[];
  product: string[];
  restaurant: string[];
};

export type FilterOption = {
  key: string;
  elements?: string[];
};
