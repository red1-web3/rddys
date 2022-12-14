import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";

function Slider1({ setController }: { setController: any }) {
  return (
    <>
      <Swiper
        onSwiper={setController}
        direction={"vertical"}
        className="mySwiper h-[70vh]"
        effect="creative"
        modules={[Controller, EffectCreative]}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
            shadow: true,
          },
        }}
      >
        <SwiperSlide>
          <div className="w-full h-full bg-[#D49232]"></div>
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
