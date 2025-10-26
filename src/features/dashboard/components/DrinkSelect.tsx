"use client"

import * as React from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { BiSolidDrink } from "react-icons/bi"
import { useRouter } from "next/navigation"

export default function DrinkSelect() {
  const router = useRouter()

  const handleSelect = (value: string) => {
    if (value === "create") router.push("/dashboard/drinkForm/addDrink")
    if (value === "edit") router.push("/dashboard/drinkForm/editDrinkTable")
  }

  return (
    <Select value="" onValueChange={handleSelect}>
      <SelectTrigger className="group w-[180px] flex items-center justify-between cursor-pointer border-none outline-none bg-transparent text-[#5B6E88] text-md transition duration-300 hover:text-blue-500 shadow-none focus:ring-0 focus:outline-none">
        <div className="flex items-center gap-2">
          <BiSolidDrink className="text-[#5B6E88] size-6 group-hover:text-blue-500 transition duration-300" />
          <SelectValue placeholder="Drinks" />
        </div>
      </SelectTrigger>

      <SelectContent
        className="border z-100 border-gray-200 bg-white/90 backdrop-blur-md shadow-lg rounded-xl text-left animate-slideDown"
        position="popper"
        align="start"
      >
        <SelectGroup>
          <SelectItem
            value="create"
            className="cursor-pointer rounded-md py-2 px-4 text-sm text-[#4A5568] hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
          >
            ➕ Create
          </SelectItem>
          <SelectItem
            value="edit"
            className="cursor-pointer rounded-md py-2 px-4 text-sm text-[#4A5568] hover:bg-blue-50 hover:text-blue-600 transition-colors duration-150"
          >
            ✏️ Edit
          </SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
