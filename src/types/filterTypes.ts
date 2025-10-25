export type FilterCategory = "dish" | "drinks" | "product" | "restaurant";

export type FilterAttributes = {
  dish: string[];
  drinks: string[];
  product: string[];
  restaurant: string[];
};

export type FilterOption = {
  key: string;
  elements?: string[];
};
