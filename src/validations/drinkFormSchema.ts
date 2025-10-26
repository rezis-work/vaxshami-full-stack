import { z } from "zod"

export const drinkFormSchema = z.object({
  drink: z.string().min(1, "Drink name is required"),
  release: z.string().min(1, "Release date is required"),
  description: z.string().min(1).max(300),
  price: z
    .string()
    .min(1, "Price is required")
    .max(200, "Price must be under 200 characters"),
  image: z.any().optional(),
})
