import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import SearchBar from "./searchBar";

import NavLinks from "./navLinks";

const MobileNavigation = () => {
  return (
    <div className="relative flex flex-col lg:hidden py-5">
      <Image src="/header-logo.png" width={125} height={20} alt="morena logo" />

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="absolute right-0 top-3.5 cursor-pointer text-3xl">
            <RxHamburgerMenu />
          </AccordionTrigger>

          <AccordionContent className="w-full">
            <NavLinks variant="mobile" />

            <SearchBar />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default MobileNavigation;
