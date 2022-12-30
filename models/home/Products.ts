import { ClothesCategory } from "models/global";
import { ImageProps } from "next/image";

export interface ProductsPage {
  label: string;
  products: Product[];
}
export type Product = {
  img: ImageProps;
  price: string | number;
  name: string;
  desc: string;
  onSale?: boolean;
} & ClothesCategory;
