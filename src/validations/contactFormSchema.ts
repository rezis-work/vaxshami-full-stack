import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.email("Please enter a valid email address").min(1, "Email is required"),
  message: z.string().min(1, "Message is required").max(200, "Message must be 200 characters or less"),
});