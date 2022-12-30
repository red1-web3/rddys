import classNames from "classnames";
import { productsPage } from "constant/home/products";
import { useActiveProductSlide } from "context";
import { Product } from "models/home/Products";
import Image from "next/image";
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
    <ul className="mt-5 py-6 flex items-center gap-x-16">
      {productsPage.map(({ label }, i) => (
        <li key={i}>
          <button
            onClick={() => setActiveSlide(i)}
            className={classNames(
              "uppercase text-3xl opacity-50 text-primary-black font-extrabold duration-[250ms] ease-in-out",
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
  data: { img, name, desc, price, category },
}: {
  data: Product;
}) {
  return (
    <li>
      <div className="relative h-[500px] rounded-lg overflow-hidden bg-white">
        <Image {...img} className="object-cover" />
      </div>

      <div className="py-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-primary-black/70 font-medium">
            {category}
          </span>
          <strong className="text-xl font-bold text-primary-black">
            ${price}
          </strong>
        </div>
        <h4 className="text-3xl uppercase font-extrabold text-primary-black">
          {name}
        </h4>

        <p className="text-2xl text-primary-black/70">{desc}</p>
      </div>
    </li>
  );
}
