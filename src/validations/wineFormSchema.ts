import { z } from "zod";

export const wineFormSchema = z.object({
  name: z.string().min(1, "სახელი სავალდებულოა"),
  year: z.number().min(1900, "წელი უნდა იყოს 1900-ზე მეტი").max(new Date().getFullYear(), "წელი ვერ იქნება მომავალი"),
  price: z.number().min(0, "ფასი ვერ იქნება უარყოფითი"),
  type: z.enum(["Red", "White", "Rosé"], {
    message: "ტიპი სავალდებულოა",
  }),
});

export type WineFormSchema = z.infer<typeof wineFormSchema>;
