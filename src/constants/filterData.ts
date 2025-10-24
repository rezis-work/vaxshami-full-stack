import { FilterAttributes, FilterCategory } from "@/types/filterTypes";

export const filterAttributes: FilterAttributes = {
  dish: [
    "coursetype",
    "mainingredient",
    "region",
    "temperature",
    "vegan",
    "streetfood",
    "glutenfree",
    "dairyfree",
  ],
  drink: ["type", "alcohol", "temperature", "occasion", "flavor", "origin"],
  product: ["category", "brand", "price", "rating", "availability", "features"],
  restaurant: [
    "cuisine",
    "price",
    "location",
    "rating",
    "atmosphere",
    "dietary",
  ],
};

export const getFilterKeys = (category: FilterCategory): string[] => {
  return filterAttributes[category];
};
