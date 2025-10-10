import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

type LoadMoreButton = {
  setCurrentLimit: (value: number) => void;
  increment: number;
  currentLimit: number;
};

export default function LoadMoreButton({
  setCurrentLimit,
  increment,
  currentLimit,
}: LoadMoreButton) {
  return (
    <Button
      className="flex justify-center items-center bg-[#ffe1df] text-[#e34e36] text-[13px] mx-auto px-[30px] py-3 transition-colors duration-200 ease-in-out hover:bg-[#6d62ff] hover:text-white rounded-sm cursor-pointer w-[171px] h-11 mb-[30px]"
      onClick={() => setCurrentLimit(currentLimit + increment)}
    >
      <p className="font-[1000] uppercase">More Posts</p>
      <span>
        <FaArrowRightLong className="ml-2"></FaArrowRightLong>
      </span>
    </Button>
  );
}
