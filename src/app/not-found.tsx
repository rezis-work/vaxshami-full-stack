"use client";

import { useEffect, useState } from "react";
import NotFoundView from "@/features/notFound/not-found-view";
import NotFoundSkeleton from "@/features/notFound/sketelon-404";

export default function NotFoundPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <NotFoundSkeleton />;

  return (
    <>
      <NotFoundView />
    </>
  );
}
