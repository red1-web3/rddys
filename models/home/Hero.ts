import { ClothesCategory, ClothesType } from "models/global";
import { ImageProps } from "next/image";

export interface Slider2 {
  image: ImageProps;
}

export type SliderImageAndText = {
  image: ImageProps;
  price: string | number;
  title: string;
  desc?: string;
} & ClothesType &
  ClothesCategory;
