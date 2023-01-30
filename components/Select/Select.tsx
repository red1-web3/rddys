import classNames from "classnames";
import { SetStateAction } from "jotai";
import { SelectOption } from "models/home/Footer";
import React, { useState, useRef } from "react";
import { BsChevronBarDown } from "react-icons/bs";
import { useClickAway } from "react-use";

function CustomSelect({
  options,
  selectedValue,
  setSelectedValue,
  theme,
}: {
  options: SelectOption[];
  selectedValue: string;
  setSelectedValue: React.Dispatch<SetStateAction<string>>;
  theme?: "dark" | "light";
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
      className={classNames(
        "cursor-pointer rounded-md h-fit relative select-none",
        theme === "dark" ? "bg-gray-500/10" : "bg-[#F5F5F5]"
      )}
    >
      <div
        className="flex items-center justify-between py-3 px-4 gap-x-4"
        onClick={() => setOpen((open) => !open)}
      >
        <span>{selectedValue ? selectedValue : options[0].label}</span>
        <span>
          <BsChevronBarDown />
        </span>
      </div>

      {open && (
        <ul className="absolute shadow-md bg-[#F5F5F5] rounded-t-md overflow-hidden bottom-[calc(100%)] left-0 w-full flex flex-col z-[999]">
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
