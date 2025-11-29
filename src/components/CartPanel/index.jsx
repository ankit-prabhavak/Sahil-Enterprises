import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const CartPanel = () => {
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-2 border-b border-[rgba(0,0,0,0.1)] pb-2">
          <div className="img w-[30%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/58" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                alt="product"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[70%] pr-7 relative">
            <h4 className="text-[14px] font-medium mt-1">
              <Link to="/product/58" className="link transition-all">
                Dettol Original Bathing Soap Bar with 12hr Germ protection
                (900gm) | Kills 99.99% Germs, 150g (Pack of 6)
              </Link>
            </h4>
            <p className="text-[#666] text-[14px] font-medium mt-1 mb-1">
              Buy As : {"Pack of 6"}
            </p>
            <p className="flex items-center gap-5 mt-1 mb-2">
              <span className="text-[#666] text-[14px] font-medium">
                Qty : <span>2</span>
              </span>
              <span className="text-[#666] text-[14px] font-medium">
                Price :
                {
                  <span className="text-[#ff5252] text-[14px] font-bold">
                    {" \u20B9"} 326
                  </span>
                }
              </span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-2 right-1 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-2 border-b border-[rgba(0,0,0,0.1)] pb-2">
          <div className="img w-[30%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/58" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                alt="product"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[70%] pr-7 relative">
            <h4 className="text-[14px] font-medium mt-1">
              <Link to="/product/58" className="link transition-all">
                Dettol Original Bathing Soap Bar with 12hr Germ protection
                (900gm) | Kills 99.99% Germs, 150g (Pack of 6)
              </Link>
            </h4>
            <p className="text-[#666] text-[14px] font-medium mt-1 mb-1">
              Buy As : {"Pack of 6"}
            </p>
            <p className="flex items-center gap-5 mt-1 mb-2">
              <span className="text-[#666] text-[14px] font-medium">
                Qty : <span>2</span>
              </span>
              <span className="text-[#666] text-[14px] font-medium">
                Price :
                {
                  <span className="text-[#ff5252] text-[14px] font-bold">
                    {" \u20B9"} 326
                  </span>
                }
              </span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-2 right-1 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
        <div className="cartItem w-full flex items-center gap-2 border-b border-[rgba(0,0,0,0.1)] pb-2">
          <div className="img w-[30%] overflow-hidden h-[100px] rounded-md">
            <Link to="/product/58" className="block group">
              <img
                src="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                alt="product"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[70%] pr-7 relative">
            <h4 className="text-[14px] font-medium mt-1">
              <Link to="/product/58" className="link transition-all">
                Dettol Original Bathing Soap Bar with 12hr Germ protection
                (900gm) | Kills 99.99% Germs, 150g (Pack of 6)
              </Link>
            </h4>
            <p className="text-[#666] text-[14px] font-medium mt-1 mb-1">
              Buy As : {"Pack of 6"}
            </p>
            <p className="flex items-center gap-5 mt-1 mb-2">
              <span className="text-[#666] text-[14px] font-medium">
                Qty : <span>2</span>
              </span>
              <span className="text-[#666] text-[14px] font-medium">
                Price :
                {
                  <span className="text-[#ff5252] text-[14px] font-bold">
                    {" \u20B9"} 326
                  </span>
                }
              </span>
            </p>

            <MdOutlineDeleteOutline className="absolute top-2 right-1 cursor-pointer text-[20px] link transition-all" />
          </div>
        </div>
      </div>

      <br />

      <div className="bottomSec absolute bottom-2.5 left-2.5 w-full overflow-hidden pr-5">
        <div className="bottomInfo py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-semibold">1 Item</span>
            <span className="text-[#ff5252] font-bold">{" \u20B9"} 326</span>
          </div>

          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-semibold">Shipping</span>
            <span className="text-[#ff5252] font-bold">{" \u20B9"} 326</span>
          </div>
        </div>

        <div className="bottomInfo py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-semibold">Total (tax excl.)</span>
            <span className="text-[#ff5252] font-bold">{" \u20B9"} 346</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-semibold">Total (incl.)</span>
            <span className="text-[#ff5252] font-bold">{" \u20B9"} 396</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="text-[14px] font-semibold">Taxes:</span>
            <span className="text-[#ff5252] font-bold">{" \u20B9"} 96</span>
          </div>

          <br />

          <div className="flex items-center justify-between w-full gap-5">
            <Link to="/cart" className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full">View Cart</Button>
            </Link>
            <Link to="/checkout" className="w-[50%] d-block">
              <Button className="btn-org btn-lg w-full">Checkout</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
