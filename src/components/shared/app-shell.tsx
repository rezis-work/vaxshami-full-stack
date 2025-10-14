"use client";

import { usePathname } from "next/navigation";
import Header from "@/features/header/ui/views/header-view";
import Footer from "@/features/footer/ui/views/footer-view";


type AppShellProps = {
  children: React.ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  return (
    <>
      {!isDashboard && <Header />}
      {children}
      {!isDashboard && <Footer />}
    </>
  );
}


