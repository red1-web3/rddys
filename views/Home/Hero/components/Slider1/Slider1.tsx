import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Controller, EffectCreative } from "swiper";
import "swiper/css";
import "swiper/css/effect-creative";
import { slide1 } from "constant/home/hero";
import Image from "next/image";

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
        {slide1.map(({ image, price, title, type }, i) => (
          <SwiperSlide>
            <div className="w-full h-full bg-[url(/home/hero_image_bg_2.jpg)] bg-no-repeat bg-cover">
              <div className="flex justify-center items-center h-full w-full">
                <div className="w-2/5 h-[85%] bg-[#90562C] rounded-xl overflow-hidden relative">
                  <Image {...image} className="object-cover" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Slider1;
