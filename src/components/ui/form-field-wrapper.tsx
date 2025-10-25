"use client";

import React from "react";
import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { LucideIcon } from "lucide-react";

interface FormFieldWrapperProps {
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "email" | "password";
  error?: string;
  children?: React.ReactNode;
  className?: string;
  id?: string;
  name?: string;
  autoComplete?: string;
}

export function FormFieldWrapper({ 
  label, 
  placeholder, 
  type = "text", 
  error, 
  children, 
  className = "",
  id,
  name,
  autoComplete
}: FormFieldWrapperProps) {
  const fieldId = id || `field-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <FormItem>
      <FormLabel htmlFor={fieldId} className="text-gray-700 dark:text-gray-300">{label}</FormLabel>
      <FormControl>
        {children ? (
          React.cloneElement(children as React.ReactElement<any>, {
            id: fieldId,
            name: name || fieldId,
            autoComplete: autoComplete,
          })
        ) : (
          <Input
            id={fieldId}
            name={name || fieldId}
            type={type}
            placeholder={placeholder}
            autoComplete={autoComplete}
            className={`bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus-visible:ring-blue-300 dark:focus-visible:ring-blue-600 focus-visible:border-blue-300 dark:focus-visible:border-blue-600 transition-all duration-200 ${className}`}
          />
        )}
      </FormControl>
      <FormMessage className="text-red-500 text-sm" />
    </FormItem>
  );
}

// Select-ისთვის ცალკე wrapper
interface FormSelectWrapperProps {
  label: string;
  placeholder?: string;
  options: Array<{ value: string; label: string; icon?: LucideIcon }>;
  error?: string;
  className?: string;
  field?: any; // React Hook Form field
  id?: string;
  name?: string;
  autoComplete?: string;
}

export function FormSelectWrapper({ 
  label, 
  placeholder, 
  options, 
  error, 
  className = "",
  field,
  id,
  name,
  autoComplete
}: FormSelectWrapperProps) {
  const fieldId = id || `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
  
  return (
    <FormItem>
      <FormLabel htmlFor={fieldId} className="text-gray-700 dark:text-gray-300">{label}</FormLabel>
      <FormControl>
        <Select onValueChange={field?.onChange} defaultValue={field?.value}>
          <SelectTrigger 
            id={fieldId}
            name={name || fieldId}
            className={`bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 focus:ring-blue-300 dark:focus:ring-blue-600 focus:border-blue-300 dark:focus:border-blue-600 transition-all duration-200 ${className}`}
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
            {options.map((option) => (
              <SelectItem 
                key={option.value} 
                value={option.value}
                className="hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {option.icon && React.createElement(option.icon, { 
                  className: "mr-2 h-4 w-4 inline" 
                })}
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage className="text-red-500 text-sm" />
    </FormItem>
  );
}
