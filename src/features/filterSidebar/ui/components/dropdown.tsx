import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Dropdown = ({ title, options }: { title: string; options: string[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [focus, setFocus] = useState(searchParams.get(title));

  const handleClick = (option: string) => {
    const params = new URLSearchParams(window.location.search);

    if (params.get(title) === option) {
      setFocus(null);
      params.delete(title);
    } else {
      setFocus(option);
      params.set(title, option);
    }

    const newPathname = `${window.location.pathname}?${params.toString()}`;

    router.push(newPathname);
  };

  return (
    <div className="mb-6">
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="px-4 py-3 text-sm font-semibold text-gray-800 capitalize hover:no-underline hover:text-[#6d62ff] transition-colors duration-150 border-b border-gray-200 cursor-pointer">
            {title.replace(/([A-Z])/g, " $1").trim()}
          </AccordionTrigger>
          <AccordionContent className="px-4 pb-3 mt-4">
            <div className="grid grid-cols-2 gap-2">
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => handleClick(option)}
                  className={`text-left px-3 py-2 text-sm text-gray-700 rounded-md hover:bg-blue-50 hover:text-blue-700 ${
                    focus === option
                      ? "bg-blue-50 text-blue-700 outline-none"
                      : ""
                  } transition-colors duration-150 border border-transparent hover:border-blue-200 cursor-pointer`}
                >
                  {option.charAt(0).toUpperCase() + option.slice(1)}
                </button>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default Dropdown;
