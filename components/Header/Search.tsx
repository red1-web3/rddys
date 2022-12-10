import React from "react";
import { BiSearch } from "react-icons/bi";
import SideModal from "./SideModal";

function Search() {
  return (
    <SideModal>
      <h2 className="pb-3 uppercase border-b border-primary-black w-full font-black text-primary-black text-[22px] leading-[22px]">
        Search
      </h2>

      <div className="relative">
        <input
          type="text"
          className="outline-none py-2 p-3 pl-8 rounded w-full"
        />

        <span className="absolute top-1/2 -translate-y-1/2 text-xl left-2">
          <BiSearch />
        </span>
      </div>
    </SideModal>
  );
}

export default Search;
