import SectionTitle from "@/components/shared/sectionTitle";
import DontMissCards from "../components/dontMissCards";

const DontMiss = ({
  className,
  categoryBg,
}: {
  className: string;
  categoryBg?: string;
}) => {
  return (
    <section
      className={`w-full max-w-[1200px] 2xl:max-w-[1400px] mx-auto ${className} mb-18 pt-14 pb-10 lg:pb-16 px-5 lg:px-14 text-white lg:rounded-[50px]`}
    >
      <SectionTitle title="Don't Miss" />

      <DontMissCards categoryBg={categoryBg} />
    </section>
  );
};

export default DontMiss;
