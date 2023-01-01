import React from "react";

function FeaturedBrand() {
  return (
    <section className="my-20">
      <div className="container">
        <h2 className="text-4xl font-black text-primary-black uppercase mb-16">
          Featured Brands
        </h2>
        <div className="grid grid-cols-[485px,auto] gap-x-7"></div>
      </div>
    </section>
  );
}

export default FeaturedBrand;
