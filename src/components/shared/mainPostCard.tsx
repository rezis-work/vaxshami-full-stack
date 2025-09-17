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
  height = "h-full",
}: MainCardProps) => {
  const ref = useRef<HTMLImageElement>(null);
  const [smallTxt, setSmalTxt] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setSmalTxt(width <= 250);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative h-full rounded-sm overflow-hidden">
      <Image
        src={image}
        ref={ref}
        width={400}
        height={200}
        alt="post image"
        className={`w-full ${height} object-cover`}
      />

      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-0 p-6 max-h-[94.5%] overflow-auto text-white">
        <div
          className={`${smallTxt ? "mb-1" : "mb-4"} flex items-center gap-4`}
        >
          <Link
            href="#"
            className="rounded-full bg-[#FFE1DF] px-3 py-[2px] text-[13px] font-medium text-[#e34e36]"
          >
            {category}
          </Link>

          <span className={`${smallTxt ? "text-xs" : "text-sm"}`}>{date}</span>
        </div>

        <Link
          href="#"
          className={`font-semibold underlineHover ${
            smallTxt ? " text-[14px]" : "text-xl"
          }`}
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default MainPostCard;
