import { ProductsPage } from "models/home/Products";

export const productsPage: ProductsPage[] = [
  {
    label: "New Arrivals",
    products: [
      {
        name: "NIKE SB",
        img: {
          src: "/home/product_image_1.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Everyday Plus",
        price: "21.95",
        category: "Socks",
      },
      {
        name: "FROG",
        img: {
          src: "/home/product_image_2.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Quite Frog Logo",
        price: "64.95",
        category: "T-Shirt",
      },
      {
        name: "METTALICA",
        img: {
          src: "/home/product_image_3.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Metalica Load/Reload Star Robe",
        price: "89.95",
        category: "Bathrobes",
      },
    ],
  },
  {
    label: "Sales",
    products: [
      {
        name: "Snacks",
        img: {
          src: "/home/product_image_5.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Using For Flexible Snack",
        price: "53.95",
        category: "Shoe",
        onSale: true,
        salePrice: "33.95",
      },
      {
        name: "FROG",
        img: {
          src: "/home/product_image_6.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Quebec In Pain",
        price: "17.95",
        category: "T-Shirt",
        onSale: true,
        salePrice: "10.95",
      },
    ],
  },
  {
    label: "RDDYS",
    products: [
      {
        name: "FROG",
        img: {
          src: "/home/product_image_7.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Todays Instance",
        price: "31.95",
        category: "T-Shirt",
      },
      {
        name: "FROG",
        img: {
          src: "/home/product_image_8.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Jumping Star",
        price: "31.95",
        category: "Socks",
      },
      {
        name: "BOARD",
        img: {
          src: "/home/product_image_9.jpg",
          alt: "Image",
          fill: true,
        },
        desc: "Run For Money",
        price: "53.95",
        category: "Surf-Board",
      },
    ],
  },
];
