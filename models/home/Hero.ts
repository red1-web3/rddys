import { ImageProps } from "next/image";

export interface Slider2 {
  image: ImageProps;
}

export interface Slider1 {
  image: ImageProps;
  price: string | number;
  title: string;
  type: "new" | "popular" | "most wanted";
}
