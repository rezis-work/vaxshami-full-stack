import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import Tags from "../components/tags";
import NewOld from "../components/newOld";
import MayLike from "../components/mayLike";

const ShareBar = () => {
  return (
    <section className="my-8">
      <PostsPageWrapper>
        <Tags />

        <div className="border border-gray-200 p-4">
          <ShareLinks flexDirection="flex-row" theme="dark" />
        </div>

        <NewOld />

        <MayLike />
      </PostsPageWrapper>
    </section>
  );
};

export default ShareBar;
