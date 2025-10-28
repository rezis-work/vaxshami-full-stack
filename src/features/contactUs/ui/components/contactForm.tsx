"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { contactFormSchema } from "@/validations/contactFormSchema";
import { toast } from "sonner";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit", // ✅ მხოლოდ submit-ზე შეამოწმებს ვალიდაციას
    reValidateMode: "onSubmit", // ✅ თავიდანაც მხოლოდ submit-ზე გადაამოწმებს
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    toast("Message was sent successfully", {
      style: { background: "white" },
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-6 font-[400] text-[17px]"
      >
       
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[400] text-[17px] !text-[#333333]">
                Name<span className="font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="!text-[17px] font-[400] rounded-none text-gray-700
                    focus-visible:outline-none focus-visible:ring-0
                    focus-visible:border-[#80bdff] transition-colors duration-300"
                />
              </FormControl>
              <FormMessage className="text-red-500 text-[15px]" /> {/* 👈 ჩანს მხოლოდ Send-ზე */}
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[400] text-[17px] !text-[#333333]">
                Email<span className="font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="rounded-none text-gray-700 !text-[17px] font-[400]
                    focus-visible:outline-none focus-visible:ring-0
                    focus-visible:border-[#80bdff] transition-colors duration-300"
                />
              </FormControl>
              <FormMessage className="text-red-500 text-[15px]" />
            </FormItem>
          )}
        />

        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-[400] text-[17px] !text-[#333333]">
                Message<span className="font-bold">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  className="rounded-none h-[134px] text-gray-700 !text-[17px] font-[400]
                    focus-visible:outline-none focus-visible:ring-0
                    focus-visible:border-[#80bdff] transition-colors duration-300"
                />
              </FormControl>
              <FormMessage className="text-red-500 text-[15px]" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="bg-[#ff607d] w-[200px] h-[42px] text-white font-[400] text-[17px] rounded-[4px] cursor-pointer"
        >
          Send
        </Button>
      </form>
    </Form>
  );
}
