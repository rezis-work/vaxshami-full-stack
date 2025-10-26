"use client"

import React, { useEffect } from "react"
import { useForm } from "react-hook-form"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import AdminSidebar from "@/features/dashboard/components/AdminSidebar"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { drinkFormSchema } from "../../../../validations/drinkFormSchema"

export default function EditDrinkForm() {
  const form = useForm<z.infer<typeof drinkFormSchema>>({
    resolver: zodResolver(drinkFormSchema),
    defaultValues: {
      drink: "",
      release: "",
      description: "",
      price: "",
      image: undefined,
    },
  })

  // ✅ როცა გვერდი იტვირთება, ვიღებთ drinkToEdit-ს localStorage-დან და ვწერთ ფორმაში
  useEffect(() => {
    const storedData = localStorage.getItem("drinkToEdit")
    if (storedData) {
      try {
        const parsed = JSON.parse(storedData)
        form.reset({
          drink: parsed.drink || "",
          release: parsed.release || "",
          description: parsed.description || "",
          price: parsed.price || "",
          image: undefined, // ფაილი ვერ იტვირთება პირდაპირ localStorage-დან
        })
      } catch (error) {
        console.error("Error parsing localStorage data:", error)
      }
    }
  }, [form])

  const onSubmit = (data: any) => {
    console.log("Edited drink:", data)
    // აქ შეგიძლია სერვერზე გაგზავნო axios ან fetch-ით
  }

  return (
    <div className="w-full bg-gray-100 min-h-screen flex gap-14 items-center">
      <div>
        <AdminSidebar />
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-10 w-[700px] mx-auto mt-6 bg-white h-fit p-6 rounded"
        >
          <h1 className="text-3xl font-semibold text-center">Edit Drink</h1>

          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="drink"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drink Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Diamond Fizz"
                      {...field}
                      required
                      className="outline-none w-full focus-visible:ring-0 border transition-colors duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drink Description</FormLabel>
                  <FormControl>
                    <textarea
                      {...field}
                      required
                      className="outline-none w-full rounded px-2 py-1 text-md min-h-[100px] max-h-[300px] focus-visible:ring-0 border transition-colors duration-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="release"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Release Date</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      {...field}
                      required
                      className="outline-none focus-visible:ring-0 border transition-colors duration-300"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Drink Price</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      required
                      className="outline-none focus-visible:ring-0 border transition-colors duration-300"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <label
                  htmlFor="fileInput"
                  className="border bg-white rounded-md text-sm border-indigo-600/60 p-8 flex flex-col items-center w-full gap-4 cursor-pointer hover:border-indigo-500 transition"
                >
                  <svg
                    width="44"
                    height="44"
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.665 3.667H11a3.667 3.667 0 0 0-3.667 3.666v29.334A3.667 3.667 0 0 0 11 40.333h22a3.667 3.667 0 0 0 3.666-3.666v-22m-11-11 11 11m-11-11v11h11m-7.333 9.166H14.665m14.667 7.334H14.665M18.332 16.5h-3.667"
                      stroke="#2563EB"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <p className="text-gray-500">Drag & drop your files here</p>
                  <p className="text-gray-400">
                    Or <span className="text-indigo-500 underline">click</span> to upload
                  </p>
                  <input
                    {...field}
                    id="fileInput"
                    type="file"
                    className="hidden"
                  />
                </label>
              )}
            />

            <Button
              type="submit"
              className="bg-black text-white w-full cursor-pointer"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}
