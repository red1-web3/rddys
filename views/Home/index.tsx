import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import GridImage from "./GridImage";
import Hero from "./Hero";
import Products from "./Products";

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <FeaturedProduct />
      <GridImage />
    </>
  );
}

export default HomePage;
