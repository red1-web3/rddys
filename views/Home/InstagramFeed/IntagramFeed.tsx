import classNames from "classnames";
import { feeds } from "constant/home/intsgramFeed";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { RxInstagramLogo } from "react-icons/rx";

function IntagramFeed() {
  return (
    <section>
      <div className="container">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl font-black text-primary-black uppercase mb-8">
            Instagram Feed
          </h2>
          <Link href={"#"}>
            <button className="bg-primary-black px-3 py-1 rounded text-white">
              View account
            </button>
          </Link>
        </div>

        <ul className="_intagramFeedGridWrapper h-[750px]">
          {feeds.map(({ _class, image }, i) => (
            <li key={i} className={classNames(_class, "group relative")}>
              <Image {...image} className="rounded-xl" />

              <Link
                href="#"
                className="opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto"
              >
                <button className="absolute top-0 right-0 flex items-center gap-x-2 m-4 px-3 py-1 bg-[#E9E7DC] rounded-md">
                  <RxInstagramLogo />
                  <span>See publication</span>
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default IntagramFeed;
