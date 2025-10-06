import PostsPageWrapper from "@/components/shared/postsPageWrapper";

import ShareLinks from "@/features/shareLinks/ui/views/shareLinks-view";
import Article from "../components/article";

const HeroArticle = () => {
  return (
    <PostsPageWrapper>
      <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] my-6 gap-8">
        <div className="hidden md:block relative max-w-[50px] border-b-3 px-2 pb-4 border-[#FF607D]">
          <div className="sticky top-5">
            <ShareLinks flexDirection="flex-col" theme="light" />
          </div>
        </div>

        <Article />
      </section>
    </PostsPageWrapper>
  );
};

export default HeroArticle;
