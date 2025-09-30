import DefaultPost from "@/features/defaultPost/ui/components/defaultPost";
import { blogCardsData } from "@/constants/blogCardsData";

export default function Home() {
  return <DefaultPost post={blogCardsData[9]} />;
}
