import Image from "next/image";
import Link from "next/link";

type Props = {
  image: string;
  title: string;
  date: string;
  theme: "light" | "dark";
  flexReverse: boolean;
};

const SecondaryPostPard = ({
  image,
  title,
  date,
  theme,
  flexReverse,
}: Props) => {
  return (
    <li
      className={`flex items-center ${
        flexReverse ? "flex-row-reverse justify-end" : "justify-between"
      }  gap-4`}
    >
      <div
        className={` leading-4 ${
          theme === "dark" ? "text-white" : "text-black"
        }`}
      >
        <Link href="#" className="text-wrap font-bold underlineHover ">
          {title}
        </Link>

        <span className="block mt-[6px] text-sm">{date}</span>
      </div>

      <Link href="#" className="flex-shrink-0 w-[120px] sm:w-[140px]">
        <Image
          src={image}
          width={200}
          height={80}
          alt="post image"
          className="object-cover w-full rounded-sm"
        />
      </Link>
    </li>
  );
};

export default SecondaryPostPard;
