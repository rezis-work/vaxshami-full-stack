import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Image from "next/image";
import React from "react";
import SearchBar from "./searchBar";
import { IoIosSearch } from "react-icons/io";
import { TfiClose } from "react-icons/tfi";
import { navItems } from "@/constants/navbarData";
import SubmenuItem from "./submenuItem";
import Link from "next/link";
import DropDownItem from "./dropDownItem";

const DesktopNavigation = () => {
  return (
    <nav className="hidden h-[60px] lg:flex items-center justify-between">
      <div className="h-full flex items-center gap-8">
        <Link href="/">
          <Image
            src="/header-logo.png"
            width={125}
            height={20}
            alt="morena logo"
            className="w-[125px] h-[20px]"
          />
        </Link>

        <ul className="flex items-center gap-6 h-full">
          {navItems.map((item) =>
            item.children ? (
              <li key={item.id} className="h-full mr-2">
                <DropDownItem {...item} />
              </li>
            ) : (
              <li key={item.id} className="text-lg font-bold tracking-tight">
                <Link href={item.href}>
                  <span className="underlineHover">{item.title}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>

      <Popover>
        <PopoverTrigger className="p-1.5  bg-[#4095f3] rounded-full cursor-pointer group text-2xl">
          <IoIosSearch className="group-data-[state=open]:hidden group-data-[state=closed]:block" />
          <TfiClose className="p-1 group-data-[state=open]:block group-data-[state=closed]:hidden" />
        </PopoverTrigger>
        <PopoverContent
          sideOffset={22}
          align="end"
          className="bg-white border-none w-[300px] px-5 py-3 shadow"
        >
          <div className="border border-gray-200 rounded-md">
            <SearchBar />
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
};

export default DesktopNavigation;
