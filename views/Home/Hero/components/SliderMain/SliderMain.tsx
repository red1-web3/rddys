import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Controller, EffectFade, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css/effect-fade";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { slide2 } from "constant/home/hero";

function Slider2({
  controller,
  controller2,
}: {
  controller: any;
  controller2: any;
}) {
  const hasC = controller && controller2;
  return (
    <div className="relative">
      <div>
        <Swiper
          navigation={{
            nextEl: "#next",
            prevEl: "#prev",
          }}
          noSwiping={false}
          controller={
            hasC
              ? {
                  control: [controller, controller2],
                  by: "container",
                }
              : undefined
          }
          modules={[Navigation, EffectFade, Controller]}
          effect={"fade"}
          className="mySwiper h-[70vh] w-full !pointer-events-none"
        >
          {slide2.map(({ image }, i) => (
            <SwiperSlide key={i}>
              <div className="h-full relative w-full">
                <Image className="object-cover select-none" {...image} />
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

function NextButton() {
  return (
    <button
      className="bg-white p-2 text-2xl rounded duration-200 disabled:opacity-40 disabled:pointer-events-none active:bg-primary-black/40 mx-5"
      id="next"
    >
      <HiOutlineChevronDoubleRight />
    </button>
  );
}

function PrevButton() {
  return (
    <button
      className="bg-white p-2 text-2xl rounded duration-200 disabled:opacity-40 disabled:pointer-events-none active:bg-primary-black/40 mx-5"
      id="prev"
    >
      <HiOutlineChevronDoubleLeft />
    </button>
  );
}
