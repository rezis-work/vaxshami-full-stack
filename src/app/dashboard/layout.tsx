"use client";

import HeaderViews from "@/features/adminpanel/components/header/components/views/header-views";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeaderViews>
        {children}
      </HeaderViews>
    </div>
  );
}
