import React, { useContext } from "react";
import "./style.css"; // <-- correct path
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import { FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import { MdZoomOutMap } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItem = ({
  brand,
  title,
  img,
  img2,
  description,
  price,
  oldPrice,
  discount,
}) => {

  const context = useContext(MyContext);
  return (
    <div className="productItem shadow-lg rounded-md overflow-hidden border-[rgba(0,0,0,0.1)] border">
      <div className="group imgWrapper w-full h-[230px] overflow-hidden rounded-md relative">
        <Link to="/">
          <div className="img h-[225px] w-full overflow-hidden relative">
            <img
              src={img}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {img2 && (
              <img
                src={img2}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-105"
              />
            )}
          </div>
        </Link>

        {discount && (
          <span className="discount absolute top-2.5 left-2.5 z-50 bg-[#ff5252] text-white rounded-lg p-1 text-[12px] font-medium">
            {discount}%
          </span>
        )}

        <div className="actions absolute top-[-200px] right-[5px] z-50 flex flex-col gap-2 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:top-[15px]">
          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white" onClick={()=>context.setOpenProductDetail(true)}>
            <MdZoomOutMap />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white">
            <IoGitCompareOutline />
          </Button>

          <Button className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!bg-[#ff5252] hover:!text-white">
            <FaRegHeart />
          </Button>
        </div>
      </div>

      <div className="info p-3 py-4">
        <h6 className="text-[13px]">
          <Link to="/">{brand}</Link>
        </h6>

        <h3 className="text-[14px] font-medium mb-1 text-[rgba(0,0,0,0.9)]">
          <Link to="/">{title}</Link>
        </h3>

        <p className="text-[13px] text-gray-500 mb-2 line-clamp-2">
          {description}
        </p>

        <Rating size="small" value={4} readOnly />

        <div className="flex items-center gap-4">
          {oldPrice && (
            <span className="line-through text-gray-500 text-[15px] font-medium">
              ₹{oldPrice}
            </span>
          )}
          <span className="text-[#ff5252] font-semibold text-[15px]">₹{price}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
