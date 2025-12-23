import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import "../SideBar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import Rating from "@mui/material/Rating";

const SideBar = () => {
  const [isOpenedFilter, setIsOpenFilter] = useState(true);
  const [isAvailOpen, setIsAvailOpen] = useState(true);
  const [isPackOpen, setIsPackOpen] = useState(true);

  return (
    <aside className="sideBar py-5 pr-10">
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-semibold flex items-center pr-5">
          Discover Categories
          <Button
            className="w-[30px]! h-[30px]! min-w-[30px]! rounded-full! ml-auto! text-black!"
            onClick={() => setIsOpenFilter(!isOpenedFilter)}
          >
            {isOpenedFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenedFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Chocolates & Candies"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Snacks & Namkeens"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Tea Coffee & Cold Drinks"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Cleaning & Laundry"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Face & Oral Care"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Stationary & Electrical"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Biscuits & Cookies"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Baby Care & Female Hygiene"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Health & Wellness"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Foodgrains, Oil & Masala"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Hair & Body Care"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Instant Packaged Foods"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Paper Goods & Disposables"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Sauces, Spreads & Essentials"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-semibold flex items-center pr-5">
          Availability
          <Button
            className="w-[30px]! h-[30px]! min-w-[30px]! rounded-full! ml-auto! text-black!"
            onClick={() => setIsAvailOpen(!isAvailOpen)}
          >
            {isAvailOpen ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isAvailOpen}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Ready Stock (68)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Arriving Soon (14)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Out of Stock (7)"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-3">
        <h3 className="w-full mb-3 text-[16px] font-semibold flex items-center pr-5">
          Pack / Unit Type
          <Button
            className="w-[30px]! h-[30px]! min-w-[30px]! rounded-full! ml-auto! text-black!"
            onClick={() => setIsPackOpen(!isPackOpen)}
          >
            {isPackOpen ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isPackOpen}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Full Box / Carton"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Outer (Half Box)"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Single Piece / Loose"
              className="w-full"
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-4 pr-10">
        <h3 className="w-full mb-3 text-[16px] font-semibold flex items-center pr-5">
          Filter By Price
        </h3>

        <RangeSlider />
        <div className="flex pt-4 pb-2 priceRange">
          <span className="text-[13px]">
            From: <strong className="text-dark">Rs: {100}</strong>
          </span>
          <span className="ml-auto text-[13px]">
            To: <strong className="text-dark">Rs: {10000}</strong>
          </span>
        </div>
      </div>
      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-semibold flex items-center pr-5">
          Filter By Ratings
        </h3>

        <div className="w-full">
          <Rating name="small-size" defaultValue={5} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="small-size" defaultValue={4} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="small-size" defaultValue={3} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="small-size" defaultValue={2} size="small" readOnly />
        </div>
        <div className="w-full">
          <Rating name="small-size" defaultValue={1} size="small" readOnly />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
