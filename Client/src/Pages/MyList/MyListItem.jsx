import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { BsCart3 } from "react-icons/bs";

const MyListItem = (props) => {
  const price = props.price || "250.00";
  const oldPrice = props.oldPrice || "500.00";

  return (
    <div className="cartItem w-full p-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-full sm:w-[20%] rounded-md overflow-hidden">
        <Link to="/product/1" className="group block">
          <img
            src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
            alt="Product"
            className="w-full h-auto object-cover group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-full sm:w-[80%] relative">
        <IoCloseSharp className="cursor-pointer absolute top-0 right-0 text-[22px] link transition-all" />

        <span className="text-[13px] text-[#666] font-medium block pr-7">
          Dettol
        </span>

        <h3 className="text-[14px] sm:text-[15px] w-full sm:w-[80%] pr-7 leading-snug">
          <Link className="link">
            Dettol Original Bathing Soap Bar with 12hr Germ protection (900gm)
            | Kills 99.99% Germs, 150g (Pack of 6)
          </Link>
        </h3>

        <Rating name="small-size" defaultValue={4} size="small" readOnly />

        <div className="flex flex-wrap items-center gap-2 sm:gap-4 mt-2">
          <span className="text-[rgba(0,0,0,0.87)] font-semibold text-[14px] sm:text-[15px]">
            ₹{price}
          </span>

          {oldPrice && (
            <span className="line-through text-[#666] text-[14px] sm:text-[15px] font-medium">
              ₹{oldPrice}
            </span>
          )}

          <span className="text-[#ff5252] font-semibold text-[14px] sm:text-[15px]">
            55% OFF
          </span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex gap-2 w-full sm:w-auto">
            <BsCart3 className="text-[18px]" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MyListItem;