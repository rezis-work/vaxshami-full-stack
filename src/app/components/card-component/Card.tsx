import { CardProps } from "@/app/interfaces/CardProps";

export default function Card(props: CardProps) {
  return props.type === 1 ? (
    <div className="w-full flex items-start h-full items-center">
      <img
        src={props.Image}
        className="w-[120px] rounded-md h-[90px] object-cover object-center"
      />
      <div className="h-full flex flex-col items-center justify-center gap-2 ml-3 self-center">
        <div className="group">
          <a className="font-bold pb-0.5 leading-tight text-base cursor-pointer transition-all duration-[400ms] ease-in-out hover:text-[#6366F1] bg-gradient-to-r from-[#6366F1] to-[#6366F1] bg-[length:0%_2px] bg-no-repeat bg-left-bottom hover:bg-[length:100%_2px]">
            {props.Text}
          </a>
        </div>
        <div className="flex w-full items-center justify-start">
          <p className="text-sm text-left font-normal break-words text-[13px]">
            {props.Date}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="w-full h-full">
      <img
        src={props.Image}
        className="w-full h-full rounded-md mb-5 object-cover object-center cursor-pointer"
      />
      <div className="flex w-full justify-start items-center gap-5 mb-4">
        <button className="p-2 bg-[rgb(255,240,240)] rounded-xl text-white font-bold text-sm">
          <p className="text-red-400">{props.Title}</p>
        </button>
        <p className="text-sm text-white">{props.Date}</p>
      </div>
      <a className="pb-1 text-white break-words w-auto font-bold text-lg cursor-pointer bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF] bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-[400ms] ease-in-out hover:bg-[length:100%_2px]">
        {props.Text}
      </a>
    </div>
  );
}
