import { HighlightedProps } from "@/types/busnessTypes";
import MainPostCard from "./mainPostCard";
import SecondaryPostPard from "./secondaryPostCard";

const HighlightedItems = ({ title, items }: HighlightedProps) => {
  return (
    <div className="w-full ">
      <div className="flex items-end mb-4">
        <h3 className="text-2xl font-bold">{title}</h3>
        <div className="ml-2 mb-1 h-[3px] w-4 -skew-x-[45deg] bg-[#6D62FF]" />
      </div>

      <MainPostCard
        {...items[0]}
        ratio="aspect-[3/2]"
        textMax="text-xl"
        textMin="text-[14px]"
        breakpoint={250}
      />

      <ul className="flex flex-col gap-5 rounded-sm py-4">
        {items.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.id}
            {...item}
            theme="light"
            flexReverse={true}
            width="!w-[120px]"
            textMin="text-[11px]"
            textMax="text-[15px]"
          />
        ))}
      </ul>
    </div>
  );
};

export default HighlightedItems;
