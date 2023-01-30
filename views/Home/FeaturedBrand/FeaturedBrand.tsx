import classNames from "classnames";
import { sectionData } from "constant/home/featuredBrands";
import { useActiveBrandTab } from "context";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { CardData } from "models/home/FeautredBrands";

function FeaturedBrand() {
  return (
    <section className="my-24">
      <div className="container">
        <div className="flex items-center justify-between mb-4 lg:mb-10">
          <h2 className="text-2xl lg:text-4xl font-black text-primary-black uppercase">
            Featured Brands
          </h2>
          <button className="px-3 text-sm font-medium py-1 rounded-md bg-black text-white">
            See all
          </button>
        </div>
        <div className="grid lg:grid-cols-[485px,auto] gap-y-2 lg:gap-y-0 lg:gap-x-10">
          <Grid1 />
          <div>
            <Grid2 />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBrand;

function Grid1() {
  const [activeTab, setActiveTab] = useActiveBrandTab();
  const refz = useRef<any>();

  const scrollX = (scrollOffset: number) => {
    refz.current.scrollLeft += scrollOffset;
  };

  function clickHandle(i: number, e: any) {
    const targetWidth = e.target.clientWidth;

    console.log(e);
    setActiveTab((prev: number) => {
      if (prev < i) {
        scrollX(targetWidth);
      } else {
        scrollX(-targetWidth);
      }
      return i;
    });
  }

  return (
    <div ref={refz} className="overflow-x-auto scrollbar-none scroll-smooth">
      <ul className="lg:space-y-2 flex items-center gap-x-4 lg:block">
        {sectionData.map(({ label }, i) => (
          <li
            key={i}
            className={classNames(
              "group cursor-pointer whitespace-nowrap lg:whitespace-normal"
            )}
          >
            <button
              onClick={(e) => clickHandle(i, e)}
              className={classNames(
                "relative pt-1.5 block w-full text-left text-lg lg:text-4xl lg:scale-75 font-black origin-left text-primary-black uppercase opacity-60 group-hover:opacity-100 group-hover:scale-100 _featuredBrandLabelTransition",
                i === activeTab && "!opacity-100 !scale-100"
              )}
            >
              {label}
            </button>
            <span
              className={classNames(
                "hidden lg:block border-b border-primary-black/60 relative _featuredBrandBorderTransition",
                i === activeTab && "before:!h-0.5 before:!w-full"
              )}
            ></span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Grid2() {
  const [activeTab, setActiveTab] = useActiveBrandTab();

  const activeData = sectionData[activeTab].cardData;

  function ActiveSideData() {
    return (
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 5, opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <div className={classNames("space-y-3")}>
          <Image {...activeData?.logoImage} />
          <p className="text-primary-black text-base font-meduim">
            {activeData.desc}
          </p>

          <button className="bg-white rounded-md px-3 py-1 mt-7">
            See products
          </button>
        </div>
      </motion.div>
    );
  }

  function DemoImage() {
    return (
      <motion.div
        initial={{ scale: 1.2, opacity: 0, rotate: -2 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        exit={{ scale: 1.2, opacity: 0, rotate: -2 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <Image {...activeData.demoImage} className="rounded-lg" />
      </motion.div>
    );
  }

  return (
    <div className="w-full h-fit min-h-[350px] bg-[url(/home/brand_bg.jpg)] px-10 pt-6 pb-12 lg:py-6 bg-cover relative bg-no-repeat rounded-lg lg:rounded-xl overflow-hidden">
      <div className="relative z-[2] w-full h-full grid gap-y-8 lg:gap-y-0 lg:grid-cols-2 gap-x-8 items-center">
        <ActiveSideData />
        <div className="flex items-center gap-y-2 lg:gap-y-0 relative">
          <div className="-rotate-6 rounded-lg overflow-hidden">
            <DemoImage />
          </div>
          <button className="absolute top-0 -left-5 lg:-left-6 m-6 h-5 lg:m-8 lg:h-6 z-[3] aspect-square rounded-full bg-[#3B8C86]"></button>
        </div>
      </div>
    </div>
  );
}
