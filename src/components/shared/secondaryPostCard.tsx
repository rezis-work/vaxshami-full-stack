"use client";

import { SecondaryCardProps } from "@/types/secondaryCardTypes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const SecondaryPostPard = ({
  image,
  title,
  date,
  theme,
  flexReverse,
  width = "sm:w-[130px]",
}: SecondaryCardProps) => {
  const ref = useRef<HTMLLIElement>(null);
  const [smallTxt, setSmalTxt] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setSmalTxt(width <= 260);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={` flex items-center ${
        flexReverse ? "flex-row-reverse justify-end" : "justify-between"
      }  gap-4`}
    >
      <div
        className={`leading-4 ${
          theme === "dark" ? "text-white bg-black" : "text-black bg-white"
        }`}
      >
        <Link
          href="#"
          className={`block ${
            smallTxt
              ? "text-[11px] max-h-[65px] overflow-y-auto leading-3.5"
              : "text-[16px] mb-3"
          }  text-wrap font-bold underlineHover `}
        >
          {title}
        </Link>

        <span
          className={`block mt-[6px] ${
            smallTxt ? "text-[10px]" : "text-[13px]"
          }`}
        >
          {date}
        </span>
      </div>

      <Link href="#" className={`flex-shrink-0 w-[120px] ${width}`}>
        <Image
          src={image}
          width={140}
          height={90}
          alt="post image"
          className={`object-cover ${width} rounded-sm`}
        />
      </Link>
    </li>
  );
};

export default SecondaryPostPard;
