import { ImageProps } from "next/image";

export interface SectionProps {
  label: string;
  id: string;
  cardData: CardData;
}
export interface CardData {
  logoImage: ImageProps;
  desc: string;
  demoImage: ImageProps;
}
