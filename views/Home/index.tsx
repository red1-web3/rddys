import OnLoadAnimation from "components/Animations/OnLoadAnimation";
import React from "react";
import FeaturedBrand from "./FeaturedBrand";
import FeaturedProduct from "./FeaturedProduct";
import GridImage from "./GridImage";
import Hero from "./Hero";
import InstagramFeed from "./InstagramFeed";
import Products from "./Products";

function HomePage() {
  return (
    <>
      <OnLoadAnimation />
      <Hero />
      <Products />
      <FeaturedProduct />
      <FeaturedBrand />
      <InstagramFeed />
    </>
  );
}

export default HomePage;
