import { SecondaryCardProps } from "@/types/secondaryCardTypes";
import Image from "next/image";
import Link from "next/link";

const SecondaryPostPard = ({
  image,
  title,
  date,
  theme,
  flexReverse,
  width = "sm:w-[130px]",
  styles,
  titleClassname,
}: SecondaryCardProps) => {
  return (
    <li
      className={` flex items-center ${
        flexReverse ? "flex-row-reverse justify-end" : "justify-between "
      } items-start xs:items-center gap-4`}
    >
      <div
        className={`leading-5 ${
          theme === "dark" ? "text-white bg-black" : "text-black bg-white"
        } ${styles}`}
      >
        <Link
          href="#"
          className={`inline max-h-[65px] overflow-y-auto leading-3.5 font-bold underlineHover break-all xs:break-normal ${titleClassname}`}
        >
          {title}
        </Link>

        <span className="block mt-[6px] text-[13px]">{date}</span>
      </div>

      <Link href="#" className={`flex-shrink-0 w-[120px] ${width}`}>
        <Image
          src={image}
          width={140}
          height={90}
          alt="post image"
          className={`object-cover ${width} h-[80px] rounded-sm`}
        />
      </Link>
    </li>
  );
};

export default SecondaryPostPard;
