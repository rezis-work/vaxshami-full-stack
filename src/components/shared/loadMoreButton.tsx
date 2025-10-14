"use client";

import Link from "next/link";
import { useSearchParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

export default function LoadMoreButton({
  increment = 3,
  defaultLimit = 6,
  isFetching,
}: {
  increment?: number;
  defaultLimit?: number;
  isFetching: boolean;
}) {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentLimit = Number(searchParams.get("limit")) || defaultLimit;
  const newLimit = currentLimit + increment;

  const params = new URLSearchParams(searchParams);
  params.set("limit", newLimit.toString());

  return (
    <div className="text-center mt-8 mb-[30px]">
      <Link href={`${pathname}?${params.toString()}`} scroll={false}>
        <Button
          disabled={isFetching}
          className={`flex justify-center items-center ${
            !isFetching ? "bg-[#ffe1df]" : "bg-[#6d62ff]"
          } text-[#e34e36] text-[13px] mx-auto px-[30px] py-3 transition-colors duration-200 ease-in-out hover:bg-[#6d62ff] hover:text-white rounded-sm cursor-pointer w-[171px] h-11`}
        >
          {!isFetching ? (
            <>
              <p className="font-[1000] uppercase">More Posts</p>
              <span>
                <FaArrowRightLong className="ml-2" />
              </span>
            </>
          ) : (
            <span className="relative flex h-3 w-3">
              <span className="absolute  inline-flex h-full w-full rounded-full bg-white animate-pulse"></span>
            </span>
          )}
        </Button>
      </Link>
    </div>
  );
}
