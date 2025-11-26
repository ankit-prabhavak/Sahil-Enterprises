import React from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import { LiaAnchorSolid, LiaAngleDownSolid } from "react-icons/lia";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import { useState } from "react";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);

  const openCategoryPanel = () => {
    // Logic to open category panel
    setIsOpenPanel(true);
  };

  return (
    <>
      <nav className="py">
        <div className="container flex items-center justify-end gap-8">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2  w-full font-bold"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[13px]" />
              Shop By Categories
              <LiaAngleDownSolid className="text-[14px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="col_2 w-[63%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Home
                  </Button>
                </Link>
              </li>

              <li className="list-none relative">
                <Link
                  to="/snacks"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Snacks
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/snacks/chips" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Chips
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/snacks/chips/lays" className="w-full">
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Lays
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/snacks/chips/Bingo" className="w-full">
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Bingo
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/snacks/chips/uncle-chips"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Uncle Chips
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/snacks/chips/balaji"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Balaji
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/snacks/kurkure" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Kurkure
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/snacks/haldirams" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Haldirams
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/snacks/bikaji" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Bikaji
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link
                  to="/grocery"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Grocery
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/grocery/goldiee" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Goldiee Masale
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/grocery/goldiee/turmeric"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Turmeric Powder
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/grocery/goldiee/Red Chilli"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Chilli Powder
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/grocery/goldiee/chicken"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Chicken Masala
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/grocery/goldiee/meat"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Meat Masala
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/grocery/noddles" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Nestle Maggi
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/grocery/paste" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Toothpastes
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/grocery/patanjali" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Patanjali
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link
                  to="/stationery"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Stationary
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/stationary/classmate" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Classmate
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/stationary/classmate/notebooks"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Notebooks
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/stationary/classmate/colors"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Colors Pen
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/stationary/classmate/pens"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Pens Picks
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/stationary/classmate/geometry-box"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Geometry Boxes
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/stationary/pencils" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Pencils & Others
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/stationary/rough" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Rough Notebooks
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link
                  to="/chocolates"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Chocolates
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/chocolates/cadbury" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Cadbury
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/cadbury/dairy-milk"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Dairy Milk
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/cadbury/celebrations"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Celebrations
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/cadbury/5-star"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  5-Star
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/cadbury/crispello"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Crispello
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/cadbury/choco"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Chocoblast
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/chocolates/nestle" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Nestle
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/nestle/munch"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Munch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="chocolates/nestle/kitkat"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Kit Kat
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/nestle/milkybar"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Milky Bar
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/nestle/coffee"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Coffee Candy
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/chocolates/ds" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Alpenlibe
                        </Button>

                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/alpenlibe/milk-blast"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Milk Candy
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/alpenlibe/center-fruit"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Center Fruit
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/alpenlibe/center-fresh"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Center Fresh
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/chocolates/alpenlibe/eclairs"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Eclairs
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link
                  to="/personal-care"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Personal Care
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/personal-care/facewash" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Facewash
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/personal-care/facewash/fair-lovely"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Fair & Lovely
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/personal-care/facewash/garnier"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Garnier Men
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/personal-care/hair-oil" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Hair Oils
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/personal-care/hair-oil/bajaj"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Bajaj Almonds
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/personal-care/hair-oil/dabur"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Dabur Amla
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/personal-care/Soap" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Body Soaps
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link
                  to="/household"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Cleaning & Detergent
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/household/detergent" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Detergent
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/household/detergent/wheel"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Wheel
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/household/detergent/surf-excel"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Surf Excel
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/household/detergent/ghadi"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Ghadi
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/household/detergent/tide"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Tide
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/household/toilet" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Toilet & Bathroom
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/household/toilet/harpic-blue"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Harpic Blue
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/household/toilet/harpic-red"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Harpic Red
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none relative">
                <Link
                  to="/biscuits"
                  className="link transition text-[14px] font-[500]"
                >
                  <Button
                    className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-4"
                    disableRipple
                  >
                    Biscuits & Cookies
                  </Button>
                </Link>
                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full">
                      <Link to="/biscuits/britania" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Britania
                        </Button>
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link
                                to="/biscuits/britania/milk-bikis"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Milk Bikis
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/biscuits/britania/marie"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Marie Gold
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/biscuits/britania/bour-bon"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Bour Bon
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link
                                to="/biscuits/britania/jim-jam"
                                className="w-full"
                              >
                                <Button className="!text-[rgba(0, 0, 0, 0.8)] w-full !text-left !justify-start !rounded-none">
                                  Jim Jam
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/biscuits/patanjali" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Patanjali
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/biscuits/anmol" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Anmol
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/biscuits/sobisco" className="w-full">
                        <Button
                          className="!normal-case !text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none"
                          disableRipple
                        >
                          Sobisco
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="col_3 w-[17%]">
            <Button className="!text-black gap-2  w-full font-bold">
              <IoRocketOutline className="text-[18px]" />
              In-Store Pickup Offer
            </Button>
          </div>
        </div>
      </nav>

      <CategoryPanel
        isOpenPanel={isOpenPanel}
        setIsOpenPanel={setIsOpenPanel}
      />
    </>
  );
};

export default Navigation;
