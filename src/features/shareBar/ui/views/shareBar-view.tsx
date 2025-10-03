import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import Tags from "../components/tags";
import MayLike from "../components/mayLike";
import NextPostLinks from "@/components/shared/nextPostLinkes";

const ShareBar = () => {
  return (
    <section className="my-8">
      <PostsPageWrapper>
        <Tags />

        <div className="border border-gray-200 p-4">
          <ShareLinks flexDirection="flex-row" theme="dark" />
        </div>

        <div className="flex flex-col md:flex-row font-bold">
          <NextPostLinks id={5} />
        </div>

        <MayLike />
      </PostsPageWrapper>
    </section>
  );
};

export default ShareBar;
