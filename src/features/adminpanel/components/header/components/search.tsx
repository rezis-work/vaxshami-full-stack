"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { searchSchema } from "@/validations/contactFormSchema";
import { z } from "zod";

type SearchFormValues = z.infer<typeof searchSchema>;

interface SearchComponentProps {
  onSearch?: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export default function SearchComponent({
  onSearch,
  placeholder = "ძებნა...",
  className = "",
}: SearchComponentProps) {
  const form = useForm<SearchFormValues>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSubmit = (data: SearchFormValues) => {
    if (onSearch) {
      onSearch(data.query);
    } else {
      console.log("ძებნა:", data.query);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className={`flex flex-col sm:flex-row sm:items-center gap-2 ${className}`}
      >
        <FormField
          control={form.control}
          name="query"
          render={({ field }) => (
            <FormItem className="relative w-full sm:w-80">
              <FormLabel className="sr-only">ძებნა</FormLabel>
              <FormControl>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    {...field}
                    type="text"
                    placeholder={placeholder}
                    className="pl-10 pr-3 py-2 w-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:border-transparent text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 transition-colors duration-300"
                  />
                </div>
              </FormControl>
              <FormMessage className="text-red-500 text-sm mt-1" />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
