import { Swiper, SwiperSlide } from "swiper/react";

import { sliderImageAndText } from "constant/home/hero";
import { SliderImageAndText } from "models/home/Hero";
import { Controller, EffectFade } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";

function SliderText({ setController }: { setController: any }) {
  return (
    <div className="absolute bottom-0 left-0 w-full !pointer-events-none textSlider">
      <Swiper
        grabCursor={true}
        effect="fade"
        noSwiping={false}
        allowSlidePrev={false}
        allowSlideNext={false}
        modules={[Controller, EffectFade]}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        direction="vertical"
        className="mySwiper relative w-full"
        onSwiper={setController}
        autoHeight={true}
      >
        {sliderImageAndText.map((data, i) => (
          <SwiperSlide key={i}>
            <Slide {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderText;

function Slide({ price, title, type, category, desc }: SliderImageAndText) {
  return (
    <div className="px-10 py-5 w-full space-y-1 h-full flex items-end">
      <div className="w-full space-y-1.5">
        <p className="uppercase font-bold text-white text-sm px-2 py-1 rounded bg-secondary inline">
          {type}
        </p>
        <p className="text-black font-semibold text-base">{category}</p>

        <div className="w-full flex items-center justify-between">
          <h3 className="font-bold text-black text-3xl max-w-[80%] lg:w-auto">
            {title}
          </h3>
          <strong className="font-bold text-black text-3xl">${price}</strong>
        </div>
      </div>
    </div>
  );
}
