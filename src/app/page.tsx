import Image from "next/image";
import CardGallery from "./components/card-gallery-component/CardGallery";
import { CardProps } from "./interfaces/CardProps";

export default function Home() {
  const cards: CardProps[] = [
    {
      Title: "Title1",
      Text: "this is some random text 1, hello.",
      Image: "img.",
      Date: "27-06-2009",
      type: 1,
    },
    {
      Title: "Title2",
      Text: "this is some random text 2, LEBRON JAMES!.",
      Image: "img.",
      Date: "27-06-2009",
      type: 1,
    },
    {
      Title: "Title3",
      Text: "this is some random text 3, TRUCK KUN ISEKAI!.",
      Image: "img.",
      Date: "27-06-2009",
      type: 1,
    },
    {
      Title: "Title4",
      Text: "this is some random text 4, I REALLY NEED SOME SLEEP.",
      Image: "img.",
      Date: "27-06-2009",
      type: 1,
    },
  ];
  return (
    <div className="flex items-center justify-center h-[1000px]">
      <CardGallery cards={cards}></CardGallery>
    </div>
  );
}
