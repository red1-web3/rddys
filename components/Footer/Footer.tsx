import { shop } from "constant/home/footer";
import Link from "next/link";
import React, { useState } from "react";
import Network from "./Network";
import CustomerService from "./CustomerService";
import Culture from "./Culture";
import Country from "./Country";
import Language from "./Language";
import InternationalCards from "./InternationalCards";

function Footer() {
  return (
    <footer className="pb-8">
      <div className="container grid grid-cols-[5fr,12fr,5fr] gap-x-24">
        <Aside1 />
        <Main />
        <Aside2 />
      </div>
    </footer>
  );
}

export default Footer;

function Aside1() {
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

        <li className="!mt-6">
          <button className="bg-primary-black font-medium px-3 py-1.5 text-white rounded-md tracking-wide">
            Opening Hours
          </button>
        </li>
      </ul>
    </aside>
  );
}

function Main() {
  return (
    <main className="flex gap-x-24">
      <ul className="space-y-1 text-base">
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

      <Culture />
      <Network />
      <CustomerService />
    </main>
  );
}

function Aside2() {
  return (
    <aside className="flex flex-col justify-between">
      <div className="grid grid-cols-[3fr,2fr] gap-x-6">
        <Country />
        <Language />
      </div>

      <div className="space-y-4">
        <div className="flex justify-end w-full">
          <InternationalCards theme="dark" />
        </div>
        <p className="text-end">©1989-2023 RDDYS</p>
      </div>
    </aside>
  );
}
