import React from "react";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import Products from "./Products";

function HomePage() {
  return (
    <>
      <Hero />
      <Products />
      <FeaturedProduct />
    </>
  );
}

export default HomePage;
