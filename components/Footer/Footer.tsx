import { openingHours, shop } from "constant/home/footer";
import Link from "next/link";
import React, { useRef, useState } from "react";
import Network from "./Network";
import CustomerService from "./CustomerService";
import Culture from "./Culture";
import Country from "./Country";
import Language from "./Language";
import InternationalCards from "./InternationalCards";
import classNames from "classnames";
import { useClickAway } from "react-use";

function Footer() {
  return (
    <footer className="pb-6 pt-6 lg:pt-0 lg:pb-8">
      <div className="container grid grid-cols-1 gap-y-14 lg:gap-y-0 lg:grid-cols-[5fr,12fr,5fr] gap-x-24">
        <Aside1 />
        <Main />
        <Aside2 />
      </div>
    </footer>
  );
}

export default Footer;

function Aside1() {
  const [isOpenShop, setIsOpenShop] = useState<boolean>(true);
  const openShopRef = useRef<any>(!null);

  useClickAway(openShopRef, () => {
    setIsOpenShop(false);
  });

  return (
    <aside>
      <ul className="text-black text-base space-y-2">
        <li>
          <Link href="#">
            <span>
              Biswanath Thana Road, Bishwanath, Bangladesh ; Place Types.
              Shopping mall
            </span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>+88 017 321-20188</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>1-877-RDDYS</span>
          </Link>
        </li>
        <li>
          <Link href="#">
            <span>red1.web3@gmail.com</span>
          </Link>
        </li>

        <li ref={openShopRef} className={classNames("!mt-6 relative w-fit")}>
          <button
            onClick={() => setIsOpenShop((prev) => !prev)}
            className="bg-primary-black font-medium px-3 py-1.5 text-white rounded-md tracking-wide"
          >
            Opening Hours
          </button>

          <OpeningHours
            className={classNames(
              "_mobileNavTransition",
              isOpenShop
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          />
        </li>
      </ul>
    </aside>
  );
}

function Main() {
  return (
    <main className="flex gap-x-24">
      <ul className="space-y-1 text-base hidden lg:block">
        <li>
          <h4 className="font-black uppercase">Shop</h4>
        </li>

        {shop.map(({ label, url }, i) => (
          <li key={i}>
            <Link href={url}>
              <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <Culture />
      </div>
      <Network />
      <CustomerService />
    </main>
  );
}

function Aside2() {
  return (
    <aside className="flex flex-col justify-between gap-y-5 lg:gap-y-0">
      <div className="grid grid-cols-[40%,40%] lg:grid-cols-[3fr,2fr] gap-x-4 lg:gap-x-6">
        <Country theme="dark" />
        <Language theme="dark" />
      </div>

      <div className="space-y-2 lg:space-y-4">
        <div className="flex lg:justify-end w-full">
          <InternationalCards theme="dark" />
        </div>
        <p className="lg:text-end">©1989-2023 RDDYS</p>
      </div>
    </aside>
  );
}

function OpeningHours({ className, ...rest }: React.ComponentProps<"div">) {
  return (
    <div
      {...rest}
      className={classNames(
        className,
        "absolute bottom-0 left-0 lg:left-[calc(100%+20px)] z-[999] w-[300px]"
      )}
    >
      <ul className="w-full bg-white border border-primary-black rounded-md overflow-hidden">
        {openingHours.map(({ day, time }, i) => (
          <li
            key={i}
            className="grid grid-cols-2 border-b border-primary-black last:border-b-0"
          >
            <span
              className={classNames(
                "uppercase font-extrabold text-sm flex items-center justify-center text-primary-black/90 border-r py-1 tracking-tight border-primary-black"
              )}
            >
              {day}
            </span>
            <span
              className={classNames(
                "font-semibold text-base text-primary-black/90 flex iems-center py-1 justify-center border-primary-black"
              )}
            >
              {time}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
