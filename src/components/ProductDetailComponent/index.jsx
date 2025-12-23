import React from "react";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import QtyBox from "../../components/QtyBox";
import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";
import { IoGitCompareOutline } from "react-icons/io5";

const ProductDetailComponent = () => {
  const [purchaseType, setPurchaseType] = React.useState("pack");
  return (
    <>
      <h1 className="text-[24px] font-medium mb-2">
        Dettol Original Bathing Soap Bar with 12hr Germ protection (900gm) |
        Kills 99.99% Germs, 150g (Pack of 6)
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-gray-500 text-[13px]">
          Brand:{" "}
          <span className="font-medium text-black opacity-75">Dettol</span>
        </span>

        <Rating size="small" value={4} readOnly />
        <span className="text-[13px] text-[#666] cursor-pointer">
          Review (5)
        </span>
      </div>

      <div className="flex items-center gap-4 mt-4">
        {425 && (
          <span className="line-through text-gray-500 text-[18px] font-medium">
            ₹{425}
          </span>
        )}
        <span className="text-[#ff5252] font-semibold text-[18px]">₹{326}</span>
        <span className="text-[14px] text-[#666]">
          In Stock:{" "}
          <span className="text-[14px] text-green-600 font-semibold">
            147 Items
          </span>
        </span>
      </div>

      <p className="text-[14px] text-[#666] font-medium leading-[25px] mt-3 pr-14 mb-5">
        Dettol Original Soap offers trusted protection against a wide range of
        germs while keeping your skin clean and healthy. With its classic Dettol
        fragrance, it helps maintain good personal hygiene, prevents infections,
        and supports your skin’s natural barrier. Dettol’s range of products is
        designed to protect, cleanse, and keep you feeling fresh every day.
      </p>

      <div className="flex items-center gap-3">
        <span className="text-[16px] text-[#666]">Buy As:</span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              purchaseType === "pack" ? "bg-[#ff5252]! text-white!" : ""
            }`}
            onClick={() => setPurchaseType("pack")}
          >
            Pack of 6
          </Button>
          <Button
            className={`${
              purchaseType === "box" ? "bg-[#ff5252]! text-white!" : ""
            }`}
            onClick={() => setPurchaseType("box")}
          >
            Box (12 Packs)
          </Button>
        </div>
      </div>
      <p className="text-black font-medium text-[14px] mt-4 mb-3">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>
      <div className="flex items-center gap-4">
        <div className="qtyBoxWrapper w-16">
          <QtyBox />
        </div>

        <Button className="btn-org flex gap-2">
          <BsCart3 className="text-[18px]" />
          Add to Cart
        </Button>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-medium text-[#666]">
          <FaRegHeart className="text-[18px]" />
          Add to Wishlist
        </span>
        <span className="flex items-center gap-2 text-[15px] link cursor-pointer font-medium text-[#666]">
          <IoGitCompareOutline className="text-[18px]" />
          Add to Compare
        </span>
      </div>
    </>
  );
};

export default ProductDetailComponent;
