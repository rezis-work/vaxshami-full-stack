import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  image: string;
  date: string;
  category: string;
  height?: string;
};

const MainPostCard = ({
  title,
  image,
  date,
  category,
  height = "h-full",
}: Props) => {
  return (
    <div className="relative h-full rounded-sm overflow-hidden">
      <Image
        src={image}
        width={400}
        height={200}
        alt="post image"
        className={`w-full ${height} object-cover`}
      />

      <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black to-transparent" />

      <div className="absolute bottom-0 p-6 max-h-[94.5%] overflow-auto">
        <div className="mb-4 flex items-center gap-4">
          <Link
            href="#"
            className="rounded-full bg-[#FFE1DF] px-3 py-[2px] text-[13px] font-medium text-[#e34e36]"
          >
            {category}
          </Link>
          <span className="text-sm">{date}</span>
        </div>

        <Link href="#" className="text-2xl font-semibold underlineHover">
          {title}
        </Link>
      </div>
    </div>
  );
};

export default MainPostCard;
