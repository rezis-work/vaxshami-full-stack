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
import { FaPaperPlane } from "react-icons/fa";

export default function ContactForm() {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
    toast("Message was sent successfully", { style: { background: "white" } });
    form.reset();
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
                  placeholder=""
                  {...field}
                  className={`!text-[17px] font-[400] rounded-none text-gray-700 focus-visible:outline-none focus-visible:ring-0 transition-colors duration-300 ${
                    form.formState.errors.name 
                      ? "border-red-500 focus-visible:border-red-500" 
                      : "focus-visible:border-[#80bdff]"
                  }`}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
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
                  placeholder=""
                  {...field}
                  className={`rounded-none text-gray-700 !text-[17px] font-[400] focus-visible:outline-none focus-visible:ring-0 transition-colors duration-300 ${
                    form.formState.errors.email 
                      ? "border-red-500 focus-visible:border-red-500" 
                      : "focus-visible:border-[#80bdff]"
                  }`}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
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
                  className={`rounded-none h-[134px] text-gray-700 !text-[17px] font-[400] focus-visible:outline-none focus-visible:ring-0 transition-colors duration-300 ${
                    form.formState.errors.message 
                      ? "border-red-500 focus-visible:border-red-500" 
                      : "focus-visible:border-[#80bdff]"
                  }`}
                />
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />
        <Button type="submit" className="inline-flex items-center gap-3 px-8 py-6 text-lg font-bold rounded-full bg-gradient-to-br from-[#6d62ff] via-[#4095f3] to-[#521d91] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
          <FaPaperPlane className="text-xl" />
          Send Message
        </Button>
      </form>
    </Form>
  );
}
