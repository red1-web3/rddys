import { customerService } from "constant/home/footer";
import Link from "next/link";
import React from "react";

function CustomerService() {
  return (
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
  );
}

export default CustomerService;
