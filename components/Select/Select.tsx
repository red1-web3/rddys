import { SetStateAction } from "jotai";
import { SelectOption } from "models/home/Footer";
import React, { useState, useRef } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { useClickAway } from "react-use";

function CustomSelect({
  options,
  selectedValue,
  setSelectedValue,
}: {
  options: SelectOption[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
}) {
  //   Refs
  const selectContainer = useRef<any>(null);
  // States
  const [open, setOpen] = useState<boolean>(false);
  useClickAway(selectContainer, () => {
    setOpen(false);
  });

  return (
    <div
      ref={selectContainer}
      className="cursor-pointer bg-gray-500/10 rounded-md h-fit relative select-none"
    >
      <div
        className="flex items-center justify-between py-3 px-4"
        onClick={() => setOpen((open) => !open)}
      >
        <span>{selectedValue ? selectedValue : options[0].label}</span>
        <span>
          <BsChevronBarDown />
        </span>
      </div>

      {open && (
        <ul className="absolute shadow-md bg-[#F5F5F5] rounded-t-md overflow-hidden bottom-[calc(100%)] left-0 w-full flex flex-col">
          {options.map(({ label }, i) => (
            <li
              onClick={() => {
                setOpen(false);
                setSelectedValue(label);
              }}
              key={i}
              className="py-1.5 px-4 hover:bg-gray-200/50"
            >
              {label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CustomSelect;