"use client";

import { socialMediaData } from "@/constants/followUsData";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const LinkCards = ({ breakpoint }: { breakpoint: number }) => {
  const ref = useRef<HTMLUListElement>(null);
  const [twoCols, setTwoCols] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      setTwoCols(width >= breakpoint);
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <ul
      ref={ref}
      className={`grid gap-4 ${twoCols ? "grid-cols-2" : "grid-cols-1"}`}
    >
      {socialMediaData.map((link) => (
        <li
          key={link.id}
          className="border border-gray-200 rounded-sm group hover:border-transparent hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)]  hover:-translate-y-[2px] hover:scale-[1.005] transition-all ease-in-out duration-300"
        >
          <Link href={link.link} className="w-full flex items-center gap-2 p-2">
            <div
              style={{ background: link.color }}
              className={`w-max p-[6px] rounded-full ${
                link.id === "instagram" && "instagramBg"
              }`}
            >
              <link.icon className=" text-white w-[17px] h-[17px]" />
            </div>

            <p className="text-sm group-hover:text-[#6D62FF] transition duration-300 flex-wrap">
              {link.followers} {link.type}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default LinkCards;
