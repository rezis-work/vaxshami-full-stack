interface props {
  children: React.ReactNode;
  className?: string;
}

export default function Wrapper({ children, className }: props) {
  return (
    <div
      className={`px-4 sm:max-w-xl sm:px-4 md:max-w-3xl md:px-8 lg:px-7 lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl 2xl:px-0  mx-auto ${className}`}
    >
      {children}
    </div>
  );
}
