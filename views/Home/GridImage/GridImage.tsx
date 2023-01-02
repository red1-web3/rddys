import classNames from "classnames";
import { gridImageData } from "constant/home/gridImage";
import Image from "next/image";
import React from "react";

function GridImage() {
  return (
    <section className="w-full h-[200vh] _gridImageWrap">
      {gridImageData.map((data, i) => (
        <div key={i} className={classNames(data.class, "relative bg-white")}>
          <Image {...data.img} className="object-cover" />
        </div>
      ))}
    </section>
  );
}

export default GridImage;
