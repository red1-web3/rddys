import { HiOutlineUser } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";
import Account from "components/Header/Account";
import Search from "components/Header/Search";
import Cart from "components/Header/Cart";

export const navigationItems = [
  {
    label: "Skateshop",
  },
  {
    label: "Clothing",
  },
  {
    label: "Footwear",
  },
  {
    label: "Music and Entertainment",
  },
  {
    label: "Accessories",
  },
  {
    label: "Brands",
  },
];

export const listedOptions = [
  {
    icon: <HiOutlineUser />,
    component: <Account />,
  },
  {
    icon: <BiSearch />,
    component: <Search />,
  },
  {
    icon: <AiOutlineShopping />,
    component: <Cart />,
  },
];
