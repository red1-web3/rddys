import classNames from "classnames";
import { listedOptions, navigationItems } from "constant/home/header";
import { useActiveMenu, useHeaderActiveListModal } from "context";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useEffect } from "react";
import { useClickAway } from "react-use";
import { FiArrowRight } from "react-icons/fi";
import Culture from "components/Footer/Culture";
import Network from "components/Footer/Network";
import CustomerService from "components/Footer/CustomerService";
import InternationalCards from "components/Footer/InternationalCards";
import Country from "components/Footer/Country";
import Language from "components/Footer/Language";
import { motion } from "framer-motion";

function Header() {
  return (
    <>
      <header className="bg-white sticky top-0 left-0 z-[999]">
        <div className="container py-2 lg:py-3 relative">
          <main className="flex items-center justify-between">
            <AsideLeft />
            <AsideRight />
          </main>
        </div>
      </header>
      <MobileNavOverlay />
    </>
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

  function ActivePopUp() {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: [0.165, 0.84, 0.44, 1],
          duration: 0.8,
        }}
      >
        {listedOptions[headerActiveListModal as any].component}
      </motion.div>
    );
  }

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

      {headerActiveListModal !== null && <ActivePopUp />}
    </aside>
  );
}

function MobileNavigation() {
  const [activeMenu, setActiveMenu] = useActiveMenu();
  return (
    <div className="lg:hidden">
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

function MobileNavOverlay() {
  const [activeMenu, setActiveMenu] = useActiveMenu();

  return (
    <nav
      className={classNames(
        "fixed top-[59px] overflow-y-auto left-0 w-full z-[99] bg-white h-[calc(100vh-59px)] px-4 py-6 _mobileNavTransition",
        activeMenu
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      )}
    >
      <div className="space-y-6">
        <ul className="space-y-4">
          {navigationItems.map(({ label }, i) => (
            <li key={i} className="w-full">
              <button className="flex items-center justify-between w-full">
                <span className="font-black text-primary-black text-4xl uppercase text-start">
                  {label}
                </span>
                <span className="text-3xl font-black text-primary-black">
                  <FiArrowRight />
                </span>
              </button>
            </li>
          ))}
        </ul>

        <ul className="w-[70%] space-y-5">
          <li className="flex items-start justify-between">
            <ul>
              <li>
                <Culture />
              </li>
            </ul>
            <ul>
              <li>
                <Network />
              </li>
            </ul>
          </li>
          <li>
            <CustomerService />
          </li>
        </ul>
        <ul className="space-y-5">
          <li className="">
            <InternationalCards theme="light" />
          </li>
          <li className="flex items-center justify-end gap-x-5">
            <Country theme="light" />
            <Language theme="light" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
