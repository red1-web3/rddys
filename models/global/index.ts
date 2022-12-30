export interface ClothesType {
  type: "new" | "popular" | "most wanted";
}
export interface ClothesCategory {
  category?:
    | "Shoe"
    | "Pant"
    | "Shirt"
    | "T-Shirt"
    | "Watch"
    | "Socks"
    | "Bathrobes";
}
