import { CardGalleryProps } from "@/app/interfaces/CardGalleryProps";

export default function CardGallery({ cards }: CardGalleryProps) {
  return (
    <div className="w-full max-w-[1280px] h-[500px] flex flex-col justify-center items-center bg-[radial-gradient(circle_at_top_right,theme(colors.purple.600),theme(colors.purple.900))] rounded-[90px]">
      <div>
        <h4>Don't Miss</h4>
      </div>
      <div>
        {cards.map((card, index) => (
          <h1>{card.Text}</h1>
        ))}
      </div>
    </div>
  );
}
