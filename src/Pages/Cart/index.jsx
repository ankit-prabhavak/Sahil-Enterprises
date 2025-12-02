import React from "react";
import Button from "@mui/material/Button";
import { BsFillBagCheckFill } from "react-icons/bs";
import CartItem from "./CartItem";

const CartPage = () => {
  return (
    <section className="section py-10 pb-10 bg-[#f9f9f9]">
      <div className="container w-[80%] max-w-[80%] flex gap-5">
        <div className="leftPart w-[80%]">
          <div className="shadow-md rounded-md  bg-white">
            <div className="py-2 px-3 border-b border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[rgba(0,0,0,0.87)] font-semibold">
                Your Cart
              </h2>
              <p className="mt-0">
                There are <span className="font-bold text-[#ff5252]">3 </span>
                products in your cart
              </p>
            </div>

            <CartItem size={"Pack of 6"} qty={1} />
            <CartItem size={"Pack of 6"} qty={1} />
            <CartItem size={"Pack of 6"} qty={1} />
          </div>
        </div>

        <div className="rightPart w-[30%]">
          <div className="shadow-md rounded-md bg-white p-5">
            <h3 className="pb-3 text-[rgba(0,0,0,0.87)] font-semibold">
              Cart Total
            </h3>
            <hr className="text-[rgba(0,0,0,0.1)] mt-2 mb-1" />

            <p className="flex items-center justify-between mt-2 mb-2 leading-6">
              <span className="text-[14px] text-[#666] font-medium">
                Subtotal
              </span>
              <span className="text-[14px] text-[#ff5252] font-semibold">
                $1,300.00
              </span>
            </p>
            <p className="flex items-center justify-between mt-2 mb-2 leading-6">
              <span className="text-[14px] text-[#666] font-medium">
                Shipping
              </span>
              <span className="text-[14px] text-[rgba(0,0,0,0.87)] font-semibold">
                Free
              </span>
            </p>

            <p className="flex items-center justify-between mt-2 mb-2 leading-6">
              <span className="text-[14px] text-[#666] font-medium">
                Estimate for
              </span>
              <span className="text-[14px] text-[rgba(0,0,0,0.87)] font-semibold">
                India{" "}
              </span>
            </p>

            <p className="flex items-center justify-between mt-2 mb-2 leading-6">
              <span className="text-[14px] text-[#666] font-medium">Total</span>
              <span className="text-[14px] text-[#ff5252] font-semibold">
                $1,300.00
              </span>
            </p>

            <br />

            <Button className="btn-org btn-lg w-full flex gap-2">
              <BsFillBagCheckFill className="text-[20px]" />
              CheckOut
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPage;
