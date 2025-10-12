"use client";
import { AlertTriangle } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ErrorCard() {
  return (
    <div className="flex flex-col items-center justify-center max-h-screen bg-white px-6">
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md text-center border-2 border-[#6d62ff]">
        <div className="flex justify-center mb-4">
          <div className="bg-[#6d62ff]/10 p-4 rounded-full">
            <AlertTriangle />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-black mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-800 mb-6">
          We are sorry for the inconvenience. Please try refreshing the page.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            className="px-6 py-2 bg-[#6d62ff] hover:bg-[#6d62ff]/80 text-white rounded-full transition-all cursor-pointer"
            onClick={() => window.location.reload()}
          >
            Reload Page
          </button>
          <Link
            className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-all"
            href="/"
            data-discover="true"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
