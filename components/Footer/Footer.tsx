import { customerService, languages, shop } from "constant/home/footer";
import Link from "next/link";
import React, { useState } from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";
import CustomSelect from "components/Select/Select";
import { country as countries } from "constant/home/footer";

function Footer() {
  const [country, setCountry] = useState<string>("");
  const [language, setLanguage] = useState<string>("");
  return (
    <footer>
      <div className="container grid grid-cols-[5fr,12fr,5fr] gap-x-24">
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

          <ul className="space-y-1">
            <li>
              <h4 className="font-black uppercase">Culture</h4>
            </li>

            <li>
              <Link href="#">About Us</Link>
            </li>
          </ul>

          <ul className="space-y-1">
            <li>
              <h4 className="font-black uppercase">Network</h4>
            </li>

            <li>
              <Link href="#">
                <div className="flex items-center gap-x-1">
                  <span>
                    <GrFacebookOption />
                  </span>
                  <span>Facebook</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="#">
                <div className="flex items-center gap-x-1">
                  <span>
                    <IoLogoInstagram />
                  </span>
                  <span>Instagram</span>
                </div>
              </Link>
            </li>
          </ul>

          <ul className="space-y-1">
            <li>
              <h4 className="font-black">CUSTOMER SERVICE</h4>
            </li>

            {customerService.map(({ label, url }, i) => (
              <li key={i}>
                <Link href={url}>{label}</Link>
              </li>
            ))}
          </ul>
        </main>

        <aside className="grid grid-cols-[60%,40%] gap-x-6">
          <CustomSelect
            options={countries}
            selectedValue={country}
            setSelectedValue={setCountry}
          />
          <CustomSelect
            options={languages}
            selectedValue={language}
            setSelectedValue={setLanguage}
          />
        </aside>
      </div>
    </footer>
  );
}

export default Footer;
