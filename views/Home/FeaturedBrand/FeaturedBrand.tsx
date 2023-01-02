import classNames from "classnames";
import { sectionData } from "constant/home/featuredBrands";
import { useActiveBrandTab } from "context";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

function FeaturedBrand() {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="text-4xl font-black text-primary-black uppercase mb-8">
          Featured Brands
        </h2>
        <div className="grid grid-cols-[485px,auto] gap-x-10">
          <Grid1 />
          <Grid2 />
        </div>
      </div>
    </section>
  );
}

export default FeaturedBrand;

function Grid1() {
  const [activeTab, setActiveTab] = useActiveBrandTab();

  return (
    <div>
      <ul>
        {sectionData.map(({ label }, i) => (
          <li key={i} className="group cursor-pointer">
            <button
              onClick={() => setActiveTab(i)}
              className={classNames(
                "relative pt-1.5 pb-1 block w-full text-left text-4xl scale-[.8] font-black origin-left text-primary-black uppercase opacity-60 group-hover:opacity-100 group-hover:scale-100 _featuredBrandLabelTransition",
                i === activeTab && "opacity-100 scale-100"
              )}
            >
              {label}
            </button>
            <span
              className={classNames(
                "border-b block border-primary-black/60 relative _featuredBrandBorderTransition",
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

  const isVisible = sectionData.findIndex(({}, i) => i === activeTab);

  return (
    <div className="w-full h-fit min-h-[350px] bg-[url(/home/brand_bg.jpg)] px-10 py-6 bg-cover relative bg-no-repeat rounded-xl overflow-hidden">
      <div className="relative z-[2] w-full h-full grid grid-cols-2 gap-x-8 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
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

        <div className="flex items-center relative">
          <Image {...activeData.demoImage} className="rounded-lg -rotate-6" />
          <button className="absolute top-0 -left-6 m-8 h-6 z-[3] aspect-square rounded-full bg-primary-black"></button>
        </div>
      </div>
    </div>
  );
}
