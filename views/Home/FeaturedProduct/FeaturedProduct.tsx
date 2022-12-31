import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import {
  RxCornerBottomLeft,
  RxCornerBottomRight,
  RxCornerTopLeft,
  RxCornerTopRight,
} from "react-icons/rx";

function FeaturedProject() {
  return (
    <section className="bg-[url('/featured_project_bg.jpg')] bg-no-repeat bg-cover relative pt-24 pb-32 my-10">
      <div className="relative z-[2] container flex items-center justify-center">
        <div className="w-[80%] grid grid-cols-2 items-center">
          <TextSide />
          <ImageSide />
        </div>
      </div>
      <div className="absolute top-0 left-0 bg-gradient-to-r from-secondary/90 to-secondary/80 w-full h-full"></div>
    </section>
  );
}

export default FeaturedProject;

function TextSide() {
  return (
    <div className="flex flex-col gap-1.5 text-primary-black">
      <strong className="bg-black w-fit text-white font-extrabold text-xs px-1.5 py-0.5 uppercase">
        Featured Product
      </strong>
      <span className="text-sm">Shoes</span>
      <h5 className="uppercase font-black text-5xl">vans</h5>
      <p className="text-3xl">Skate Half Cab 92 GORE-TEX</p>
      <span className="font-medium">30 Years of the Half Cab</span>
      <p>In 1992, skaters created the world’s greatest skate shoe with...</p>
      <button className="bg-white rounded py-1 px-2 w-fit text-sm">
        Learn more
      </button>
    </div>
  );
}

function ImageSide() {
  const images = ["/home/featured_image_1.jpg", "/home/featured_image_2.jpg"];
  const [rotateImg, setRotateImg] = useState<number>(0);

  return (
    <div className="h-[390px] w-full relative p-4">
      <CornerShapes />
      <div className="w-full h-full relative">
        {images.map((url, i) => (
          <Image
            key={i}
            src={url}
            alt="image"
            fill
            className={classNames(
              "rounded-xl object-cover absolute top-0 left-0 origin-top-left duration-[400ms] ease-in-out",
              rotateImg === i ? "rotate-12 z-[-1]" : "rotate-0 z-[2]"
            )}
          />
        ))}
      </div>
      <button
        onClick={() => setRotateImg((prev) => (prev === 0 ? 1 : 0))}
        className="absolute top-0 left-0 m-8 h-6 z-[3] aspect-square rounded-full bg-primary-black"
      ></button>
    </div>
  );
}

function CornerShapes() {
  return (
    <>
      <span className="absolute top-0 left-0 text-3xl text-primary-black">
        <RxCornerTopLeft />
      </span>
      <span className="absolute top-0 right-0 text-3xl text-primary-black">
        <RxCornerTopRight />
      </span>
      <span className="absolute bottom-0 left-0 text-3xl text-primary-black">
        <RxCornerBottomLeft />
      </span>
      <span className="absolute bottom-0 right-0 text-3xl text-primary-black">
        <RxCornerBottomRight />
      </span>
    </>
  );
}
