import { HighlightedProps } from "@/types/busnessTypes";
import MainPostCard from "../../../../components/shared/mainPostCard";
import SecondaryPostPard from "../../../../components/shared/secondaryPostCard";
import SectionTitle from "@/components/shared/sectionTitle";

const ContentBlock = ({ title, items }: HighlightedProps) => {
  return (
    <div className="w-full ">
      <SectionTitle title={title} />

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

export default ContentBlock;
