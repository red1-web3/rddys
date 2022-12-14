import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { EffectFade, Navigation } from "swiper";
import Image from "next/image";
import "swiper/css/effect-fade";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";
import { slide2 } from "constant/home/hero";

function Slider2() {
  return (
    <div className="relative">
      <Swiper
        navigation={{
          nextEl: "#next",
          prevEl: "#prev",
        }}
        modules={[Navigation, EffectFade]}
        effect={"fade"}
        className="mySwiper"
      >
        {slide2.map(({ image }, i) => (
          <SwiperSlide key={i}>
            <div className="h-[600px] relative w-full">
              <Image className="object-cover select-none" {...image} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute top-1/2 z-[60] -translate-y-1/2 w-full flex justify-between">
        <button
          className="bg-white p-2 text-2xl rounded duration-200 disabled:opacity-40 disabled:pointer-events-none active:bg-primary-black/40 mx-5"
          id="prev"
        >
          <HiOutlineChevronDoubleLeft />
        </button>
        <button
          className="bg-white p-2 text-2xl rounded duration-200 disabled:opacity-40 disabled:pointer-events-none active:bg-primary-black/40 mx-5"
          id="next"
        >
          <HiOutlineChevronDoubleRight />
        </button>
      </div>
    </div>
  );
}
export default Slider2;
