import React, { ReactNode } from "react";
export default function SideModal({ children }: { children?: ReactNode }) {
  return (
    <div
      id="sideModal"
      className="absolute w-[93%] lg:w-auto top-full left-1/2 -translate-x-1/2 lg:right-5 px-7 py-5 rounded-b-lg bg-primary z-[500] shadow-lg"
    >
      <div className="flex flex-col gap-4 justify-center w-full lg:w-[400px]">
        {children}
      </div>
    </div>
  );
}
