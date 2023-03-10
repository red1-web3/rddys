import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Controller, EffectFade, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css/effect-fade";
import { slide2 } from "constant/home/hero";
import NextButton from "../Buttons/NextButton";
import PrevButton from "../Buttons/PrevButton";

function Slider2({
  controller,
  controller2,
  setController,
}: {
  controller: any;
  controller2: any;
  setController: any;
}) {
  return (
    <div className="lg:relative">
      <div className="hidden lg:block">
        <Swiper
          onSwiper={setController}
          modules={[Navigation, EffectFade, Controller]}
          effect={"fade"}
          className="mySwiper h-[80vh] w-full"
        >
          {slide2.map(({ image }, i) => (
            <SwiperSlide key={i}>
              <div className="h-full relative w-full">
                <Image
                  className="object-cover select-none"
                  {...image}
                  sizes="auto"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-1/2 z-[60] -translate-y-1/2 w-full flex justify-between">
        <PrevButton />
        <NextButton />
      </div>
    </div>
  );
}
export default Slider2;
