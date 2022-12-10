import React from "react";
import SideModal from "./SideModal";

function Cart() {
  return (
    <SideModal>
      <h2 className="flex items-center justify-between mt-2 py-3 border-b border-t border-primary-black w-full font-black text-primary-black text-[22px] leading-[22px]">
        <span>SUBTOTAL</span>
        <span>$0.00</span>
      </h2>

      <div>
        <button className="px-6 rounded-xl bg-primary-black font-black text-white uppercase text-[22px] leading-[22px] py-4">
          Review my cart
        </button>
      </div>
    </SideModal>
  );
}

export default Cart;
