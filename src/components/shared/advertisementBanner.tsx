import Image from "next/image";
import React from "react";

const AdvertisementBanner = ({
  image,
  position,
}: {
  image: string | null;
  position: "sticky" | "auto";
}) => {
  return (
    <div className={`${position} top-0 w-max mx-auto`}>
      <h4 className="w-min text-[10px] tracking-widest mb-1 mx-auto uppercase">
        sponsored
      </h4>

      <Image
        src={image || "/ad_placeholder.png"}
        width={290}
        height={500}
        alt="ad image"
        className="w-[300px] h-[500px]"
      />
    </div>
  );
};

export default AdvertisementBanner;
