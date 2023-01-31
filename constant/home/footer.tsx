import {
  CustomerService,
  OpeningHours,
  SelectOption,
  Shop,
} from "models/home/Footer";

export const shop: Shop[] = [
  {
    label: "Clothing",
    url: "#",
  },
  {
    label: "Footwear",
    url: "#",
  },
  {
    label: "Skateshop",
    url: "#",
  },
  {
    label: "Brands",
    url: "#",
  },
  {
    label: "Music",
    url: "#",
  },
  {
    label: "Bands",
    url: "#",
  },
  {
    label: "Gift Cards",
    url: "#",
  },
];

export const customerService: CustomerService[] = [
  {
    label: "Terms of Service",
    url: "#",
  },
  {
    label: "Shipping",
    url: "#",
  },
  {
    label: "Refund & Returns",
    url: "#",
  },
  {
    label: "Privacy",
    url: "#",
  },
];

export const country: SelectOption[] = [
  {
    label: "  Austria",
  },
  {
    label: "Belgium",
  },
  {
    label: "Czech",
  },
  {
    label: "Republic",
  },
  {
    label: "Denmark",
  },
  {
    label: "Estonia",
  },
  {
    label: "Finland",
  },
  {
    label: "France",
  },
  {
    label: "Germany",
  },
  {
    label: "Greece",
  },
  {
    label: "Netherlands",
  },
];

export const languages: SelectOption[] = [
  {
    label: "English",
  },
  {
    label: "Bangla",
  },
];

export const openingHours: OpeningHours[] = [
  {
    day: "monday",
    time: "10h00 - 17h30",
  },
  {
    day: "tuesday",
    time: "10h00 - 17h30",
  },
  {
    day: "wednesday",
    time: "10h00 - 17h30",
  },
  {
    day: "thursday",
    time: "10h00 - 19h00",
  },
  {
    day: "friday",
    time: "10h00 - 19h00",
  },
  {
    day: "saturday",
    time: "10h00 - 17h30",
  },
  {
    day: "sunday",
    time: "10h00 - 17h30",
  },
];
