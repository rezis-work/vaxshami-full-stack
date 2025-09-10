import { CardProps } from "@/app/interfaces/CardProps";

export default function Card(props: CardProps) {
  return props.type === 1 ? (
    <div className="w-[290px] flex items-center justify-center gap-5 h-[101px]">
      <img src={props.Image} className="w-[120px] rounded-md h-[90px]" />
      <div className="flex flex-col items-center justify-center gap-2 text-md h-full mt-6">
        <p className="font-bold">{props.Text}</p>
        <div className="flex w-[153px]">
          <p className="text-sm">{props.Date}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="max-[1199px]:w-[554px] min-[1200px]:w-3xs">
      <img src={props.Image} className="w-full rounded-md mb-5" />
      <div className="flex w-full justify-start items-center gap-5 mb-4">
        <button className="p-2 bg-[rgb(255,240,240)] rounded-xl text-white font-bold text-sm">
          <p className="text-red-400">{props.Title}</p>
        </button>
        <p className="text-sm text-white">{props.Date}</p>
      </div>
      <p className="text-white break-words w-full font-bold text-lg">
        {props.Text}
      </p>
    </div>
  );
}
