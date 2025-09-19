import { CardGalleryProps } from "@/app/interfaces/CardGalleryProps";
import Card from "../card-component/Card";

export default function CardGallery({ cards, theme }: CardGalleryProps) {
  return (
    <div
      className={`p-15 w-full max-w-[1280px] max-[1200px]:rounded-none flex flex-col justify-start items-start gap-5 rounded-[60px] ${
        theme === "dark"
          ? "bg-[radial-gradient(circle_at_top_right,#6d62ff,#521d91_100%)]"
          : "bg-[#ffe1df]"
      }`}
    >
      <div className="flex gap-1">
        <h4
          className={`leading-tight text-2xl font-bold ${
            theme === "light" ? "text-black" : "text-white"
          }`}
        >
          Don't Miss
        </h4>
        <span className="inline-flex w-[1em] h-[0.20em] align-baseline ml-[3px] -skew-x-12 bg-[#6d62ff] mt-[18px]"></span>
      </div>
      <div className=" flex items-center justify-center gap-7 max-[1200px]:grid grid-cols-2 max-[1200px]:justify-start max-[1200px]:items-start max-[575px]:grid-cols-1">
        {cards.map((card, index) => (
          <div key={card.Title} className="w-full min-[1200px]:max-h-[388px]">
            <Card {...card} theme={theme} />
          </div>
        ))}
      </div>
    </div>
  );
}
