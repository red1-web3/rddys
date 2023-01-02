import { ImageProps } from "next/image";

export interface SectionProps {
  label: string;
  cardData?: CardData;
}
interface CardData {
  logoImage: ImageProps;
  desc: string;
  DemoImage: ImageProps;
}
