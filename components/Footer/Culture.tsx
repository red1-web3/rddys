import Link from "next/link";
import React from "react";

function Culture() {
  return (
    <ul className="space-y-1">
      <li>
        <h4 className="font-black uppercase">Culture</h4>
      </li>

      <li>
        <Link href="#">About Us</Link>
      </li>
    </ul>
  );
}

export default Culture;
