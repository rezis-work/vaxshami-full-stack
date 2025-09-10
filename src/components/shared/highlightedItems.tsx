import { HighlightedProps } from "@/types/busnessTypes";
import MainPostCard from "./mainPostCard";
import SecondaryPostPard from "./secondaryPostCard";

const HighlightedItems = ({ title, items }: HighlightedProps) => {
  return (
    <div className="w-full max-w-[400px]">
      <div className="flex items-end mb-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="ml-2 mb-1 h-[3px] w-4 -skew-x-[45deg] bg-[#6D62FF]" />
      </div>

      <MainPostCard {...items[0]} />

      <ul className="flex flex-col gap-6 rounded-sm py-4">
        {items.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.id}
            {...item}
            theme="light"
            flexReverse={true}
            width="w-120px"
          />
        ))}
      </ul>
    </div>
  );
};

export default HighlightedItems;
