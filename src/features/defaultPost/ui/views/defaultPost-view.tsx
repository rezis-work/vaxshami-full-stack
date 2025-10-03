import Wrapper from "@/components/shared/wrapper";

import { blogCardsData } from "@/constants/blogCardsData";
import DefaultPost from "../components/defaultPost";

export default function DefaultPostView() {
  return (
    <Wrapper className="mt-[30px]">
      <DefaultPost post={blogCardsData[9]} />
    </Wrapper>
  );
}
