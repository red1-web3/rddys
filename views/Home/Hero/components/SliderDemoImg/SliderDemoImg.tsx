import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCube, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import { sliderImageAndText } from "constant/home/hero";
import Image from "next/image";

function SliderDemoImg({ setController }: { setController: any }) {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35%] h-[75%]">
      <Swiper
        onSwiper={setController}
        direction={"horizontal"}
        className="mySwiper h-full"
        effect="cube"
        noSwiping={false}
        allowSlidePrev={false}
        allowSlideNext={false}
        modules={[Controller, EffectCube]}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {sliderImageAndText.map(({ image, price, title, type }, i) => (
          <SwiperSlide key={i}>
            <div className="h-full w-full">
              <Image {...image} className="object-cover rounded-xl" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderDemoImg;
