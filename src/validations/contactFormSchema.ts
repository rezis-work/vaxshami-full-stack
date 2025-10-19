import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1),
  email: z.email(),
  message: z.string().min(1).max(200),
});

export const searchSchema = z.object({
  query: z.string().min(1, "გთხოვ შეიყვანე საძიებო სიტყვა."),
});
