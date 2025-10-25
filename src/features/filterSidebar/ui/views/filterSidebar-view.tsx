"use client";

import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useGetFilterOptions } from "../../api";
import ErrorComponent from "@/components/shared/errorComponent";
import Dropdown from "../components/dropdown";
import Checkbox from "../components/checkbox";
import Popularity from "../components/popularity";

const FilterSidebar = ({ category }: { category: string }) => {
  const { data, isLoading, isError } = useGetFilterOptions(category);

  if (isLoading) return null;

  return (
    <SheetContent className="bg-white" side="left">
      <SheetHeader>
        <SheetTitle>Filter Options</SheetTitle>
      </SheetHeader>
      <div className="flex flex-col mt-6 px-1 overflow-y-auto">
        {!data || isError ? (
          <ErrorComponent />
        ) : (
          <>
            {data.map((field) => {
              if (
                "elements" in field &&
                Array.isArray(field.elements) &&
                field.elements.length > 0
              ) {
                return (
                  <Dropdown
                    key={field.key}
                    title={field.key}
                    options={field.elements}
                  />
                );
              }

              return <Checkbox key={field.key} title={field.key} />;
            })}
            <Popularity order="likescount" title="Popularity" />
          </>
        )}
      </div>
    </SheetContent>
  );
};

export default FilterSidebar;
