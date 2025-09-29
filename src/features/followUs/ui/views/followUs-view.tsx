import SectionTitle from "@/components/shared/sectionTitle";
import LinkCards from "../components/linkCards";

const FollowUs = ({ breakpoint }: { breakpoint: number }) => {
  return (
    <aside className="w-full">
      <SectionTitle title="Follow Us" />

      <LinkCards breakpoint={breakpoint} />
    </aside>
  );
};

export default FollowUs;
