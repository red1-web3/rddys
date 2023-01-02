import { sectionData } from "constant/home/featuredBrands";
import React from "react";

function FeaturedBrand() {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="text-4xl font-black text-primary-black uppercase mb-8">
          Featured Brands
        </h2>
        <div className="grid grid-cols-[485px,auto] gap-x-7">
          <Grid1 />
        </div>
      </div>
    </section>
  );
}

export default FeaturedBrand;

function Grid1() {
  return (
    <div>
      <ul>
        {sectionData.map(({ label }, i) => (
          <li key={i} className="group">
            <button className="relative pt-1.5 pb-1 block w-full text-left text-4xl scale-[.8] font-black origin-left text-primary-black uppercase opacity-60 hover:opacity-100 hover:scale-100 _featuredBrandLabelTransition">
              {label}
            </button>
            <span className="border-b block border-primary-black/60 relative _featuredBrandBorderTransition"></span>
          </li>
        ))}
      </ul>
    </div>
  );
}
