"use client"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import AdminSidebar from "@/features/dashboard/components/AdminSidebar"
import React from "react"
import { Button } from "@/components/ui/button"
import { Pencil, Trash2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function EditDrink() {
  const router = useRouter()

  return (
    <div className="w-full min-h-screen flex flex-col md:flex-row bg-[#ECF0FA]">
      {/* Sidebar */}
      <div className="w-[15rem]">
        <AdminSidebar />
      </div>

      {/* Main content */}
      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[900px] bg-white/90 backdrop-blur-lg shadow-xl rounded-2xl p-4 md:p-8 overflow-x-auto">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Manage Drinks
          </h1>

          <div className="w-full overflow-x-auto">
            <Table className="min-w-[600px] rounded-lg">
              <TableCaption className="text-gray-500 mt-3">
                Edit or remove drinks from your menu easily.
              </TableCaption>

              <TableHeader className="bg-gradient-to-r from-blue-100 to-blue-50 border-b border-blue-200">
                <TableRow>
                  <TableHead className="text-gray-700 text-sm md:text-base">
                    Name
                  </TableHead>
                  <TableHead className="text-gray-700 text-sm md:text-base">
                    Image
                  </TableHead>
                  <TableHead className="text-gray-700 text-sm md:text-base">
                    Description
                  </TableHead>
                  <TableHead className="text-right text-gray-700 text-sm md:text-base">
                    Price
                  </TableHead>
                  <TableHead className="text-center text-gray-700 text-sm md:text-base">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                <TableRow className="hover:bg-blue-50 transition-all duration-200">
                  <TableCell className="font-medium text-gray-800 text-sm md:text-base">
                    Diamond Fizz
                  </TableCell>

                  <TableCell>
                    <img
                      src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=80"
                      alt="drink"
                      className="w-12 h-12 rounded-md object-cover shadow-sm mx-auto md:mx-0"
                    />
                  </TableCell>

                  <TableCell
                    className="text-gray-600 text-sm md:text-base max-w-[150px] md:max-w-[220px] truncate"
                    title="Refreshing citrus cocktail with a bright and tangy flavor, perfect for summer days."
                  >
                    Refreshing citrus cocktail with a bright and tangy flavor, perfect for summer days.
                  </TableCell>

                  <TableCell className="text-right text-gray-700 font-medium text-sm md:text-base">
                    $250.00
                  </TableCell>

                  <TableCell className="flex flex-col md:flex-row justify-center items-center gap-2">
                    <Button
                      onClick={() => router.push("/dashboard/drinkForm/editDrink")}
                      variant="outline"
                      className="h-8 md:h-9 w-full cursor-pointer md:w-auto px-3 text-sm text-blue-600 border-blue-200 hover:bg-blue-100 rounded-md flex items-center justify-center gap-1 transition-all"
                    >
                      <Pencil className="size-4" />
                      Edit
                    </Button>

                    <Button
                      variant="outline"
                      className="h-8 md:h-9 cursor-pointer w-full md:w-auto px-3 text-sm text-red-600 border-red-200 hover:bg-red-100 rounded-md flex items-center justify-center gap-1 transition-all"
                    >
                      <Trash2 className="size-4" />
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  )
}
