import z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(1, "სახელი სავალდებულოა"),
  email: z.email("გთხოვთ შეიყვანოთ სწორი ელ. ფოსტა").min(1, "ელ. ფოსტა სავალდებულოა"),
  message: z.string().min(1, "შეტყობინება სავალდებულოა").max(200, "შეტყობინება უნდა იყოს 200 სიმბოლომდე"),
});