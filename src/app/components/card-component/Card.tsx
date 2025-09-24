import { CardComponentProps } from "@/app/interfaces/CardComponentProps";
import { CardProps } from "@/app/interfaces/CardProps";

export default function Card({
  Image,
  Title,
  Text,
  Date,
  type,
  theme,
}: CardComponentProps) {
  return type === 1 ? (
    <div className="w-full flex items-start h-full items-center">
      <img
        src={Image}
        className="w-[120px] rounded-md h-[90px] object-cover object-center"
      />
      <div className="h-full flex flex-col items-center justify-center gap-2 ml-3 self-center">
        <div className="group">
          <a className="font-bold pb-0.5 leading-tight text-base cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1] bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px]">
            {Text}
          </a>
        </div>
        <div className="flex w-full items-center justify-start">
          <p className="text-sm text-left font-normal break-words text-[13px]">
            {Date}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full">
      <img
        src={Image}
        className="w-full h-full rounded-md mb-5 object-cover object-center cursor-pointer"
      />
      <div className="flex w-full justify-start items-center gap-5 mb-4">
        <button
          className={`p-2 ${
            theme === "dark" ? "bg-[#ffe1df]" : "bg-white"
          } rounded-xl font-bold text-sm`}
        >
          <p className="text-[#e34e36]">{Title}</p>
        </button>
        <p className="text-sm text-white">{Date}</p>
      </div>
      <a
        className={`pb-1 break-words w-auto font-bold text-lg cursor-pointer transition-[background-size] duration-[400ms] ease-in-out hover:bg-[length:100%_2px] ${
          theme === "dark"
            ? "text-white bg-gradient-to-r from-[#FFFF] to-[#FFFF] bg-[length:0%_2px] bg-no-repeat bg-left-bottom"
            : "text-black hover:text-[#6d62ff] bg-gradient-to-r from-[#6d62ff] to-[#6d62ff] bg-[length:0%_2px] bg-no-repeat bg-left-bottom"
        }`}
      >
        {Text}
      </a>
    </div>
  );
}
