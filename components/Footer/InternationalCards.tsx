import classNames from "classnames";
import Image from "next/image";
import React from "react";

function InternationalCards({ theme }: { theme: "dark" | "light" }) {
  return (
    <div className="flex items-center gap-x-4">
      <div
        className={classNames(
          "px-2.5 py-1.5 rounded-sm",
          theme === "dark" ? "bg-gray-500/10" : "bg-[#F5F5F5]/80"
        )}
      >
        <Image
          src="/home/mastercard.svg"
          alt="master card"
          height={30}
          width={40}
        />
      </div>
      <div
        className={classNames(
          "px-2.5 py-1.5 rounded-sm",
          theme === "dark" ? "bg-gray-500/10" : "bg-[#F5F5F5]/80"
        )}
      >
        <Image src="/home/visa.svg" alt="visa card" height={30} width={40} />
      </div>
      <div
        className={classNames(
          "px-2.5 py-1.5 rounded-sm",
          theme === "dark" ? "bg-gray-500/10" : "bg-[#F5F5F5]/80"
        )}
      >
        <Image
          src="/home/payoneer.svg"
          alt="madter card"
          height={30}
          width={40}
        />
      </div>
    </div>
  );
}

export default InternationalCards;
