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

        <RightSideModal>
          {listedOptions[headerActiveListModal as any].component}
        </RightSideModal>
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
            onClick={() => setHeaderActiveListModal(i)}
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

function RightSideModal({
  children,
  isOpen,
}: {
  children?: ReactNode;
  isOpen?: boolean;
}) {
  return (
    <div className="absolute top-full right-5 px-7 py-5 rounded-b-lg bg-primary">
      <div className="flex flex-col gap-4 justify-center w-[400px]">
        {children ? children : ""}
      </div>
    </div>
  );
}
