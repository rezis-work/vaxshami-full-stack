import Image from "next/image";
import PostsPageWrapper from "@/components/shared/postsPageWrapper";
import { MdAccessTime } from "react-icons/md";

const BannerContent = () => {
  return (
    <div className="lg:absolute inset-0 flex items-center justify-center bg-transparent my-8 z-20">
      <PostsPageWrapper>
        <div className="mb-6 text-black lg:text-white lg:text-center">
          <h1 className="text-4xl font-bold  mb-4 leading-tight">
            Congressional leaders reach budget, debt ceiling deal
          </h1>

          <p className="text-lg  mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            facilisis leo et bibendum pretium. Suspendisse ligula neque,
            ultrices nec interdum faucibus, pharetra et libero. Sed euismod,
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <div className=" flex items-center lg:mx-auto gap-2 lg:text-white">
            <Image
              src="/hero-card.png"
              width={32}
              height={32}
              alt="avtar image"
              className="object-cover rounded-full w-8 h-8"
            />

            <span className="font-medium text-[16px] ">John Doe</span>

            <div className="w-3 h-[1px] bg-black lg:bg-white mx-2" />

            <span className="text-[16px] ">April 02, 2017</span>
          </div>

          <div className="hidden sm:flex lg:hidden items-center ">
            <MdAccessTime />
            <p>1 min ago</p>
          </div>
        </div>
      </PostsPageWrapper>
    </div>
  );
};

export default BannerContent;
