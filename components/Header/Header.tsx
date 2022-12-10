import { listedOptions, navigationItems } from "constant/home/header";
import { useHeaderActiveListModal } from "context";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

function Header() {
  const [headerActiveListModal, setHeaderActiveListModal] =
    useHeaderActiveListModal();
  return (
    <header className="bg-white">
      <div className="container py-3 relative">
        <main className="flex items-center justify-between">
          <AsideLeft />
          <AsideRight />
        </main>

        {headerActiveListModal !== null &&
          listedOptions[headerActiveListModal as any].component}
      </div>
    </header>
  );
}

export default Header;

function AsideLeft() {
  return (
    <aside className="flex items-center gap-x-16">
      <Link href="#">
        <Image src="/logo.svg" alt="logo" height={40} width={90} />
      </Link>
      <Navigations />
    </aside>
  );
}

function Navigations() {
  return (
    <ul className="flex gap-x-6 items-center font-alegreya">
      {navigationItems.map(({ label }, i) => (
        <li key={i} className="text-lg text-primary-black">
          <button className="">{label}</button>
        </li>
      ))}
    </ul>
  );
}

function AsideRight() {
  const [headerActiveListModal, setHeaderActiveListModal] =
    useHeaderActiveListModal();
  return (
    <aside>
      <ul className="flex items-center gap-x-2.5">
        {listedOptions.map(({ icon }, i) => (
          <li
            onClick={() =>
              setHeaderActiveListModal((prev) => (prev === i ? null : i))
            }
            key={i}
            className="text-xl"
          >
            <button className="p-2 rounded bg-slate-300/30 text-primary-black">
              {icon}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
