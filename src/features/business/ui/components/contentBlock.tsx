import { HighlightedProps } from "@/types/busnessTypes";
import MainPostCard from "../../../../components/shared/mainPostCard";
import SecondaryPostPard from "../../../../components/shared/secondaryPostCard";
import SectionTitle from "@/components/shared/sectionTitle";

const ContentBlock = ({ title, items }: HighlightedProps) => {
  return (
    <div className="w-full">
      <SectionTitle title={title} />

      <MainPostCard
        {...items[0]}
        ratio="aspect-[3/2]"
        titleClassname="text-xl"
      />

      <ul className="grid grid-cols-1 gap-5 rounded-sm py-4">
        {items.slice(1).map((item) => (
          <SecondaryPostPard
            key={item.id}
            {...item}
            theme="light"
            flexReverse={true}
            width="!w-[120px]"
            titleClassname="text-[15px] hover:text-[#6610f2]"
          />
        ))}
      </ul>
    </div>
  );
};

export default ContentBlock;
