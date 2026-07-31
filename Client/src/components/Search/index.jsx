import React from "react";
import "../Search/style.css";
import Button from "@mui/material/Button";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="searchBox w-full h-[44px] sm:h-[50px] bg-[#e5e5e5] rounded-[5px] relative p-2">
      <input
        type="text"
        placeholder="Search for products..."
        className="w-full h-[28px] sm:h-[35px] focus:outline-none bg-inherit px-2 text-[14px] sm:text-[15px] pr-12"
      />

      <Button className="!absolute top-[6px] sm:top-[8px] right-[5px] z-50 !w-[32px] sm:!w-[37px] !min-w-[32px] sm:!min-w-[37px] !h-[32px] sm:!h-[37px] !rounded-full !text-black">
        <IoSearch className="text-[#444444] text-[18px] sm:text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;