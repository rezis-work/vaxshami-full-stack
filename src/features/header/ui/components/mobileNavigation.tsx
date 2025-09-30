import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navItems } from "@/constants/navbarData";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./searchBar";
import Link from "next/link";
import SubmenuItem from "./submenuItem";

const MobileNavigation = () => {
  return (
    <nav className="relative flex flex-col lg:hidden py-5">
      <Image src="/header-logo.png" width={125} height={20} alt="morena logo" />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="absolute right-0 top-3.5 cursor-pointer text-3xl">
            <RxHamburgerMenu />
          </AccordionTrigger>

          <AccordionContent className="w-full">
            <ul className="flex flex-col gap-3  my-4">
              {navItems.map((item) =>
                item.children ? (
                  <SubmenuItem {...item} key={item.id} />
                ) : (
                  <li
                    key={item.id}
                    className="text-lg font-bold tracking-tight"
                  >
                    <Link href={item.href}>
                      <span>{item.title}</span>
                    </Link>
                  </li>
                )
              )}
            </ul>

            <SearchBar />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </nav>
  );
};

export default MobileNavigation;
