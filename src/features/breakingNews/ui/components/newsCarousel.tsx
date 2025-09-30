"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselData } from "@/constants/newsCarouselData";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

const NewsCarousel = () => {
  return (
    <Carousel
      opts={{ loop: true }}
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="flex-1 flex justify-between items-center"
    >
      <CarouselContent>
        {carouselData.map((carousel) => (
          <CarouselItem key={carousel.id}>
            <Link href="#" className="hover:text-[#007bff] underlineHover">
              {carousel.title}
            </Link>
          </CarouselItem>
        ))}
      </CarouselContent>

      <div className="flex gap-2">
        <CarouselPrevious className=" relative top-0 left-0 right-0 bottom-0 translate-0 cursor-pointer" />
        <CarouselNext className="relative top-0 left-0 right-0 bottom-0 translate-0 cursor-pointer" />
      </div>
    </Carousel>
  );
};

export default NewsCarousel;
