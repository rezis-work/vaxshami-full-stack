import { CardGalleryProps } from "@/app/interfaces/CardGalleryProps";
import Card from "../card-component/Card";

export default function CardGallery({ cards }: CardGalleryProps) {
  return (
    <div className="p-15 w-full max-w-[1280px] max-[1200px]:rounded-none flex flex-col justify-start items-start gap-5 bg-[radial-gradient(circle_at_top_right,#6d62ff,#521d91_100%)] rounded-[90px]">
      <div>
        <h4 className="leading-tight text-2xl font-bold">Don't Miss</h4>
      </div>
      <div className=" flex items-center justify-center gap-7 max-[1200px]:grid grid-cols-2 max-[1200px]:justify-start max-[1200px]:items-start  max-[575px]:grid-cols-1">
        {cards.map((card, index) => (
          <div
            key={card.Title}
            className="w-full h-auto min-[1200px]:max-h-[388px]"
          >
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
