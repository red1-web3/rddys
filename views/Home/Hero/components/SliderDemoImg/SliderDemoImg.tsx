import { sliderImageAndText } from "constant/home/hero";
import Image from "next/image";
import { Controller, EffectCube, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-cube";
import { Swiper, SwiperSlide } from "swiper/react";

function SliderDemoImg({
  controller,
  controller2,
}: {
  controller: any;
  controller2: any;
}) {
  const hasC = controller && controller2;

  return (
    <div className="absolute top-6 lg:top-1/2 left-1/2 -translate-x-1/2 lg:-translate-y-1/2 w-[80%] lg:w-[35%] h-[70%] lg:h-[75%]">
      <Swiper
        controller={
          hasC
            ? {
                control: [controller, controller2],
                by: "container",
              }
            : undefined
        }
        navigation={{
          nextEl: "#nextHeroSlide",
          prevEl: "#prevHeroSlide",
        }}
        direction={"horizontal"}
        className="mySwiper h-[65vh] lg:h-full !pointer-events-none"
        effect="cube"
        modules={[Navigation, EffectCube, Controller]}
        cubeEffect={{
          shadow: false,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
      >
        {sliderImageAndText.map(({ image }, i) => (
          <SwiperSlide key={i}>
            <div className="h-full w-full">
              <Image
                {...image}
                className="object-cover rounded-xl overflow-hidden"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderDemoImg;
