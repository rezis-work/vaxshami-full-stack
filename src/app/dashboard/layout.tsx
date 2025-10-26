
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  // აქ ნავბარი არ დაემატება
  return (
    <main>
      {children}
    </main>
  );
}
