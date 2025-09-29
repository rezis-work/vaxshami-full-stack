"use client";

import { MainCardProps } from "@/types/mainCardTypes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const MainPostCard = ({
  title,
  image,
  date,
  category,
  height = "h-auto",
  ratio,
  textMin,
  textMax,
  breakpoint,
}: MainCardProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setIsSmall(width <= breakpoint);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full rounded-md overflow-hidden">
      <Image
        src={image}
        width={400}
        height={200}
        alt="post image"
        className={`w-full object-cover ${ratio} ${height}`}
      />

      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-0 p-6 max-h-[94.5%] overflow-auto text-white">
        <div
          className={`${
            isSmall ? "mb-[10px]" : "mb-4"
          } flex items-center gap-4`}
        >
          <Link
            href="#"
            className="rounded-full bg-[#FFE1DF] px-3 py-[2px] text-[13px] font-medium text-[#e34e36]"
          >
            {category}
          </Link>

          <span className={`${isSmall ? "text-xs" : "text-sm"}`}>{date}</span>
        </div>

        <Link
          href="#"
          className={`font-semibold underlineHover ${
            isSmall ? textMin : textMax
          }`}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default MainPostCard;
