import Image from "next/image";
import CardGallery from "./components/card-gallery-component/CardGallery";
import { CardProps } from "./interfaces/CardProps";

export default function Home() {
  const cards: CardProps[] = [
    {
      Title: "Title1",
      Text: "this is some random text 1, hello.",
      Image: "/img1.jpg",
      Date: "27-06-2009",
      type: 2,
    },
    {
      Title: "Title2",
      Text: "this is some random text 2, LEBRON JAMES!.",
      Image: "/img2.jpg",
      Date: "27-06-2009",
      type: 2,
    },
    {
      Title: "Title3",
      Text: "this is some random text 3, TRUCK KUN ISEKAI!.",
      Image: "/img3.jpeg",
      Date: "27-06-2009",
      type: 2,
    },
    {
      Title: "Title4",
      Text: "this is some random text 4, I REALLY NEED SOME SLEEP.",
      Image: "/img4.jpeg",
      Date: "27-06-2009",
      type: 2,
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-full h-[200px]">asdasd</div>
      <CardGallery cards={cards} theme="light"></CardGallery>
    </div>
  );
}
