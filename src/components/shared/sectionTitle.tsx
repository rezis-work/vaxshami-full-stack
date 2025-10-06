const SectionTitle = ({
  title,
  styles,
  lineStyle,
}: {
  title: string;
  styles?: string;
  lineStyle?: string;
}) => {
  return (
    <div className={`flex items-end mb-4 text-2xl  ${styles}`}>
      <h3 className="font-bold">{title}</h3>
      <div
        className={`ml-2 mb-[6px] h-[3px] w-4 -skew-x-[45deg] bg-[#6D62FF] ${lineStyle}`}
      />
    </div>
  );
};

export default SectionTitle;
