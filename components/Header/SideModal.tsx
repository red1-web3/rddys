import React, { ReactNode } from "react";
export default function SideModal({ children }: { children?: ReactNode }) {
  return (
    <div
      id="sideModal"
      className="absolute top-full right-5 px-7 py-5 rounded-b-lg bg-primary focus:bg-red-600"
      tabIndex={1}
    >
      <div className="flex flex-col gap-4 justify-center w-[400px]">
        {children}
      </div>
    </div>
  );
}
