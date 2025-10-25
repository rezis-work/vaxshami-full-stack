"use client";

import React from "react";
import { Wine as WineIcon } from "lucide-react";

export default function DashboardHome() {
  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="text-center py-12">
          <div className="mb-6">
            <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <WineIcon className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
              მოგესალმებით Vaxshami-ში
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              ღვინოების მართვის სისტემა
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
