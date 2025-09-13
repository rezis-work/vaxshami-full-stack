import Image from "next/image";
import Card from "./components/card-component/Card";
import { CardProps } from "./interfaces/CardProps";

export default function Home() {
  let responseObject: CardProps = {
    Title: "adasd",
    Image: "/some.png",
    Text: "new study reveals surprising benefits of meditation on brain health.",
    Date: "June 05, 2019",
    type: 2,
  };
  return (
    <div className="flex items-center justify-center h-full bg-purple-800">
      <Card {...responseObject}></Card>
    </div>
  );
}
