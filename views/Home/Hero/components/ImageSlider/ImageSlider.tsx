import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Image from "next/image";

function ImageSlider() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <Image src="/home/hero_image_1.jpg" alt="Image" fill={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/home/hero_image_1.jpg" alt="Image" fill={true} />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/home/hero_image_1.jpg" alt="Image" fill={true} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
export default ImageSlider;
