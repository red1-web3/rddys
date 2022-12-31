import classNames from "classnames";
import { productsPage } from "constant/home/products";
import { useActiveProductSlide } from "context";
import { Product } from "models/home/Products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function ProductsPage() {
  return (
    <section>
      <div className="container">
        <div className="w-full">
          <ul className="flex items-center justify-between">
            <li>
              <Labels />
            </li>
            <li>
              <button className="px-3 text-sm font-medium py-1 rounded-md bg-black text-white">
                See all
              </button>
            </li>
          </ul>
          <Products />
        </div>
      </div>
    </section>
  );
}

export default ProductsPage;

function Labels() {
  const [activeSlide, setActiveSlide] = useActiveProductSlide();

  return (
    <ul className="mt-5 py-6 flex items-center gap-x-16 select-none">
      {productsPage.map(({ label }, i) => (
        <li key={i}>
          <button
            onClick={() => setActiveSlide(i)}
            className={classNames(
              "uppercase text-3xl opacity-50 text-primary-black font-black duration-[250ms] ease-in-out",
              i === activeSlide && "opacity-100 scale-125"
            )}
          >
            {label}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Products() {
  const [activeSlide, setActiveSlide] = useActiveProductSlide();

  return (
    <div>
      <ul className="grid grid-cols-3 gap-x-20">
        {productsPage[activeSlide].products.map((data, i) => (
          <Product data={data} key={i} />
        ))}
      </ul>
    </div>
  );
}

function Product({
  data: { img, name, desc, price, category, onSale, salePrice },
}: {
  data: Product;
}) {
  return (
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

                {onSale && <span className="text-secondary">{salePrice}</span>}
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
  );
}
