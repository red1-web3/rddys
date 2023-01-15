import classNames from "classnames";
import { listedOptions, navigationItems } from "constant/home/header";
import { useHeaderActiveListModal } from "context";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { useClickAway } from "react-use";

function Header() {
  return (
    <header className="bg-white sticky top-0 left-0 z-[999]">
      <div className="container py-2 lg:py-3 relative">
        <main className="flex items-center justify-between">
          <AsideLeft />
          <AsideRight />
        </main>
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
    <ul className="gap-x-6 items-center font-alegreya hidden lg:flex">
      {navigationItems.map(({ label }, i) => (
        <li key={i} className="text-lg text-primary-black">
          <button>{label}</button>
        </li>
      ))}
    </ul>
  );
}

function AsideRight() {
  const [headerActiveListModal, setHeaderActiveListModal] =
    useHeaderActiveListModal();

  const listItemRef = useRef(null!);
  useClickAway(listItemRef, () => {
    setHeaderActiveListModal(null);
  });

  return (
    <aside ref={listItemRef}>
      <ul className="flex items-center gap-x-2.5">
        {listedOptions.map(({ icon }, i) => (
          <li
            onClick={() =>
              setHeaderActiveListModal((prev) => (prev === i ? null : i))
            }
            key={i}
            className="text-xl"
          >
            <button
              className={classNames(
                "p-2 rounded bg-slate-300/30 text-primary-black duration-300 ease-out",
                headerActiveListModal === i && "!bg-primary-black !text-white"
              )}
            >
              {icon}
            </button>
          </li>
        ))}

        <li>
          <MobileNavigation />
        </li>
      </ul>

      {headerActiveListModal !== null &&
        listedOptions[headerActiveListModal as any].component}
    </aside>
  );
}

function MobileNavigation() {
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  return (
    <div>
      <menu>
        <button
          className="relative p-2 rounded h-8 aspect-square"
          onClick={() => setActiveMenu((prev) => !prev)}
        >
          <span
            className={classNames(
              "absolute block top-2/3 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-black _mobileNavTransition",
              activeMenu && "rotate-45 !top-1/2 !-translate-y-1/2"
            )}
          ></span>
          <span
            className={classNames(
              "absolute block top-1/3 left-1/2 -translate-x-1/3 w-[50%] h-0.5 bg-black _mobileNavTransition",
              activeMenu &&
                "-rotate-45 !w-[70%] !top-1/2 !-translate-y-1/2 !-translate-x-1/2"
            )}
          ></span>
        </button>
      </menu>
    </div>
  );
}
