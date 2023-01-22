import Link from "next/link";
import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { IoLogoInstagram } from "react-icons/io";

function Network() {
  return (
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
  );
}

export default Network;
