import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Controller } from "swiper";

function Slider1({ setController }: { setController: any }) {
  return (
    <>
      <Swiper
        onSwiper={setController}
        direction={"vertical"}
        className="mySwiper h-[600px]"
        modules={[Controller]}
      >
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
