import OnLoadAnimation from "components/Animations/OnLoadAnimation";
import React from "react";
import FeaturedBrand from "./FeaturedBrand";
import FeaturedProduct from "./FeaturedProduct";
import Hero from "./Hero";
import InstagramFeed from "./InstagramFeed";
import Products from "./Products";

function HomePage() {
  return (
    <>
      <OnLoadAnimation />
      <Main>
        <Hero />
        <Products />
        <FeaturedProduct />
        <FeaturedBrand />
        <InstagramFeed />
      </Main>
    </>
  );
}

export default HomePage;

function Main({ children }: { children: React.ReactNode }) {
  return (
    <main className="_homeMainBody blur-xl max-w-[100vw] overflow-x-hidden">
      {children}
    </main>
  );
}
