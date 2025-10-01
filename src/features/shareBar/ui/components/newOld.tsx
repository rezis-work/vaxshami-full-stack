import Link from "next/link";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const NewOld = () => {
  return (
    <div className="flex flex-col md:flex-row font-bold">
      <div className="border-b border-gray-300 mt-8 pb-10">
        <Link
          href="#"
          className="flex items-center gap-2 peer peer-hover:text-[#6B5DF7] hover:text-[#6B5DF7] duration-500"
        >
          <FaAngleLeft /> <span className="font-semibold mb-1">Newer</span>
        </Link>

        <Link
          href="#"
          className="text-[17px] underlineHover hover:text-[#6B5DF7] peer-hover:text-[#6B5DF7]"
        >
          Apple wants the same apps to run on iPhones and macs!
        </Link>
      </div>

      <div className="border-b border-gray-300 mt-8 pb-10 text-right">
        <Link
          href="#"
          className="flex items-center justify-end gap-2 peer peer-hover:text-[#6B5DF7] hover:text-[#6B5DF7] duration-500"
        >
          <span className="font-semibold mb-1">Older</span> <FaAngleRight />
        </Link>

        <Link
          href="#"
          className="text-[17px] underlineHover hover:text-[#6B5DF7] peer-hover:text-[#6B5DF7]"
        >
          Nunc accumsan ex ligula, in sapien consectetur.
        </Link>
      </div>
    </div>
  );
};

export default NewOld;
