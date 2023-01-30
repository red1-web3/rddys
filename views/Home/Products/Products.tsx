import classNames from "classnames";
import { productsPage } from "constant/home/products";
import { useActiveProductSlide } from "context";
import { Product } from "models/home/Products";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductsPage() {
  return (
    <section>
      <div className="container">
        <div className="w-full">
          <ul className="flex items-center justify-between">
            <li>
              <Labels />
            </li>
            <li className="hidden lg:block">
              <button className="px-3 text-sm font-medium py-1 rounded-md bg-black text-white">
                See all
              </button>
            </li>
          </ul>
          <ProductsDekstop />
          <ProductsMobile />
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;

function Labels() {
  const [activeSlide, setActiveSlide] = useActiveProductSlide();

  return (
    <ul className="mt-5 py-5 lg:py-6 flex items-center gap-x-4 lg:gap-x-8 select-none">
      {productsPage.map(({ label }, i) => (
        <li key={i}>
          <button
            onClick={() => setActiveSlide(i)}
            className={classNames(
              "uppercase text-2xl lg:text-4xl _productLabelTransition scale-75 opacity-50 text-primary-black font-black",
              i === activeSlide && "!opacity-100 scale-100"
            )}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ProductsDekstop() {
  const [activeSlide, setActiveSlide] = useActiveProductSlide();
  function Product({
    delay,
    data: { img, name, desc, price, category, onSale, salePrice },
  }: {
    data: Product;
    delay: number;
  }) {
    return (
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 5, opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
          delay: delay,
        }}
      >
        <li className="relative">
          <Link href={"#"}>
            <div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image className="object-cover" {...img} />
              </div>

              <div className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-black/70 font-medium">
                    {category}
                  </span>
                  <strong
                    className={classNames(
                      "text-xl font-extrabold text-primary-black",
                      "flex items-center gap-x-3"
                    )}
                  >
                    <span className={classNames(onSale && "line-through")}>
                      ${price}
                    </span>

                    {onSale && (
                      <span className="text-secondary">{salePrice}</span>
                    )}
                  </strong>
                </div>
                <h4 className="text-3xl uppercase font-extrabold text-primary-black">
                  {name}
                </h4>
                <p className="text-2xl text-primary-black/70">{desc}</p>
              </div>

              {onSale && (
                <div className="absolute top-0 left-0 pl-4 pt-4">
                  <button className="px-2 py-0.5 uppercase font-bold text-xs bg-secondary text-white">
                    On sale
                  </button>
                </div>
              )}
            </div>
          </Link>
        </li>
      </motion.div>
    );
  }

  return (
    <div className="hidden lg:block">
      <ul className="grid grid-cols-3 gap-x-20">
        {productsPage[activeSlide].products.map((data, i) => (
          <Product data={data} delay={i * 0.1} key={i} />
        ))}
      </ul>
    </div>
  );
}

function ProductsMobile() {
  const [activeSlide, setActiveSlide] = useActiveProductSlide();
  function Product({
    delay,
    data: { img, name, desc, price, category, onSale, salePrice },
  }: {
    data: Product;
    delay: number;
  }) {
    return (
      <motion.div
        initial={{ y: 5, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 5, opacity: 0 }}
        transition={{
          ease: "easeInOut",
          duration: 0.5,
        }}
      >
        <li className="relative">
          <Link href={"#"}>
            <div>
              <div className="relative h-[350px] rounded-lg overflow-hidden">
                <Image className="object-cover" {...img} />
              </div>

              <div className="py-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-black/70 font-medium">
                    {category}
                  </span>
                  <strong
                    className={classNames(
                      "text-xl font-extrabold text-primary-black",
                      "flex items-center gap-x-3"
                    )}
                  >
                    <span className={classNames(onSale && "line-through")}>
                      ${price}
                    </span>

                    {onSale && (
                      <span className="text-secondary">{salePrice}</span>
                    )}
                  </strong>
                </div>
                <h4 className="text-2xl uppercase font-extrabold text-primary-black">
                  {name}
                </h4>
                <p className="text-xl text-primary-black/70">{desc}</p>
              </div>

              {onSale && (
                <div className="absolute top-0 left-0 pl-4 pt-4">
                  <button className="px-2 py-0.5 uppercase font-bold text-xs bg-secondary text-white">
                    On sale
                  </button>
                </div>
              )}
            </div>
          </Link>
        </li>
      </motion.div>
    );
  }
  return (
    <div className="lg:hidden">
      <Swiper
        className="w-full h-[70vh] md:h-[40vh] mySwiper"
        slidesPerView={1.2}
        spaceBetween={30}
      >
        {productsPage[activeSlide].products.map((data, i) => (
          <SwiperSlide key={i}>
            <Product data={data} delay={i} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
