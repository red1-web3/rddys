import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Slider1() {
  return (
    <>
      <Swiper direction={"vertical"} className="mySwiper h-[600px]">
        <SwiperSlide>
          <div className="w-full h-full bg-red-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-green-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-blue-400"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full bg-yellow-400"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider1;
