import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

export default function NextButton() {
  return (
    <button
      className="bg-white p-2 text-2xl rounded duration-200 disabled:opacity-40 disabled:pointer-events-none active:bg-primary-black/40 mx-5"
      id="nextHeroSlide"
    >
      <HiOutlineChevronDoubleRight />
    </button>
  );
}
