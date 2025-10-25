"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormField,
} from "@/components/ui/form";
import { FormFieldWrapper, FormSelectWrapper } from "@/components/ui/form-field-wrapper";
import { WineFormData, WineFormProps } from "@/types/wineTypes";
import { wineFormSchema } from "@/validations/wineFormSchema";
import { WINE_TYPES } from "@/constants/wineTypes";
import { Wine as WineIcon } from "lucide-react";

export default function WineForm({
  onSubmit,
  onCancel,
  initialData,
  isEditing = false,
}: WineFormProps) {
  const form = useForm<WineFormData>({
    resolver: zodResolver(wineFormSchema),
    defaultValues: initialData || {
      name: "",
      year: new Date().getFullYear(),
      price: 0,
      type: "Red",
    },
  });

  const handleSubmit = (data: WineFormData) => {
    onSubmit(data);
    form.reset();
  };

  return (
    <div className="space-y-6">
      <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              <WineIcon className="h-6 w-6 text-purple-600" />
              {isEditing ? "ღვინის შესწორება" : "ახალი ღვინო"}
            </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {isEditing ? "შეცვალეთ ღვინის მონაცემები" : "შეიყვანეთ ახალი ღვინის მონაცემები"}
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormFieldWrapper 
                  label="სახელი" 
                  placeholder="ღვინის სახელი"
                  id="wine-name"
                  name="name"
                  autoComplete="off"
                >
                  <Input {...field} placeholder="ღვინის სახელი" />
                </FormFieldWrapper>
              )}
            />

            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormFieldWrapper 
                  label="წელი" 
                  type="number" 
                  placeholder="წელი"
                  id="wine-year"
                  name="year"
                  autoComplete="off"
                >
                  <Input
                    {...field}
                    type="number"
                    placeholder="წელი"
                    onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                  />
                </FormFieldWrapper>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormFieldWrapper 
                  label="ფასი (₾)" 
                  type="number" 
                  placeholder="ფასი"
                  id="wine-price"
                  name="price"
                  autoComplete="off"
                >
                  <Input
                    {...field}
                    type="number"
                    placeholder="ფასი"
                    onChange={(e) => field.onChange(parseFloat(e.target.value) || 0)}
                  />
                </FormFieldWrapper>
              )}
            />

            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormSelectWrapper
                  label="ტიპი"
                  placeholder="აირჩიეთ ღვინის ტიპი"
                  options={WINE_TYPES as any}
                  field={field}
                  id="wine-type"
                  name="type"
                  autoComplete="off"
                />
              )}
            />
          </div>

          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
            >
              {isEditing ? "შესწორება" : "დამატება"}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={onCancel}
              className="flex-1 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02]"
            >
              გაუქმება
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
