import { SectionProps } from "models/home/FeautredBrands";

export const sectionData: SectionProps[] = [
  {
    label: "Baker",
    cardData: {
      logoImage: {
        src: "/home/brand_logo_1.svg",
        alt: "logo",
        height: 150,
        width: 150,
      },
      desc: "Formed in 1999 by Andrew Reynolds, A.K.A “The Boss”.  Baker is known for their out of the norm videos, most notably; Baker Bootleg, Baker 2G and Baker 3, and their hi-jinxes. The current Baker team consists of Andrew Reynolds, Kader Sylla, Rowan Zorilla, Tristan Funkhouser, Kevin “Spanky” Long, Sammy Baca and more.",
      DemoImage: {
        src: "/home/brand_img_1.jpg",
        alt: "card image",
        height: 280,
        width: 415,
      },
    },
  },
  {
    label: "BROTHER MERLE",
    cardData: {
      logoImage: {
        src: "/home/brand_logo_2.svg",
        alt: "logo",
        height: 150,
        width: 150,
      },
      desc: "Brother Merle is an artist, skateboarder and commercial illustrator from Montreal, Canada. For the last two decades, he spent most of his time skateboarding and studying graphic design in Montreal and San Diego. After working for multiple companies, he decided to focus on creating his own world of illustrations.",
      DemoImage: {
        src: "/home/brand_img_2.jpg",
        alt: "card image",
        height: 280,
        width: 415,
      },
    },
  },
];
