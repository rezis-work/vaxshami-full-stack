import Image from "next/image";
import AdvertComponent from "./advertComponent";

const AdvertisementBanner = ({
  image,
  position,
}: {
  image: string | null;
  position: "sticky" | "auto";
}) => {
  return (
    <div className={`${position} top-0 w-max mx-auto`}>
      <p className="text-center text-sm mb-2 tracking-widest uppercase">
        Sponsored
      </p>

      {image ? (
        <Image
          src={image}
          width={290}
          height={500}
          alt="ad image"
          className="w-[300px] h-[500px]"
        />
      ) : (
        <AdvertComponent
          classname=""
          image="/linedev.png"
          link="https://www.linkedin.com/company/linedevltd/posts/?feedView=all"
          text="We are software development company. we build amazing human made websites"
        />
      )}
    </div>
  );
};

export default AdvertisementBanner;
