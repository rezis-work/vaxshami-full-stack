"use client";

import DashboardHeader from "@/features/adminpanel/components/dashboard-header";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DashboardHeader 
        userName="ადმინისტრატორი"
      />
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}
