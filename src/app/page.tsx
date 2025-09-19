import Image from "next/image";
import Card from "./components/card-component/Card";
import { CardProps } from "./interfaces/CardProps";

export default function Home() {
  let card: CardProps = {
    Title: "Business",
    Text: "random text 123 hello random text helloo",
    Image: "/some.png",
    Date: "12-12-2001",
    theme: "dark",
    type: 2,
  };
  return (
    <div className="w-[400px] h-[400px]">
      <Card {...card}></Card>
    </div>
  );
}
