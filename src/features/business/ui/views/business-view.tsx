import ContentBlock from "@/features/business/ui/components/contentBlock";
import Wrapper from "@/components/shared/wrapper";
import { businessNews, petFriends } from "@/constants/bussinessData";
import AdvertComponent from "@/components/shared/advertComponent";

const Business = () => {
  return (
    <section>
      <Wrapper className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-start gap-8 2xl:gap-14 my-16 px-0">
        <ContentBlock title="Business News" items={businessNews} />

        <div className="w-full max-w-[300px] mx-auto ">
          <AdvertComponent
            classname=""
            image="/linedev.png"
            link="https://www.linkedin.com/company/linedevltd/posts/?feedView=all"
            text="We are software development company. we build amazing human made websites"
          />
        </div>

        <ContentBlock title="Pet Friends" items={petFriends} />
      </Wrapper>
    </section>
  );
};

export default Business;
