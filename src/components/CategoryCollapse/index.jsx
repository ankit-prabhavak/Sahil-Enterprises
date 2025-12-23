import React from 'react'
import { FaRegPlusSquare } from "react-icons/fa";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FiMinusSquare } from "react-icons/fi";


const CategoryCollapse = () => {

      const [submenuIndex, setSubmenuIndex] = useState(null);
      const [innerSubmenuIndex, setInnerSubmenuIndex] = useState(null);
        
      const openSubmenu = (index) => {
        // Logic to open submenu
        if (submenuIndex === index) {
          setSubmenuIndex(null);
          return;
        }
        setSubmenuIndex(index);
      };
      const openInnerSubmenu = (index) => {
        if (innerSubmenuIndex === index) {
          setInnerSubmenuIndex(null);
          return;
        }
        setInnerSubmenuIndex(index);
      };
  return (
      <div className="scroll">
        <ul className="w-full">
          <li className="list-none flex items-center relative flex-col">
            <Link to="/snacks" className="w-full">
              <Button
                className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                disableRipple
              >
                Snacks & Namkeen
              </Button>
            </Link>

            {submenuIndex !== 0 ? (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {submenuIndex === 0 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/snacks/chips-wafers" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Chips & Wafers
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 0 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 0 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/lays"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Lays
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/bingo"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Bingo
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/balaji"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Balaji
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/uncle-chips"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Uncle Chips
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="list-none relative flex-col">
                  <Link to="/snacks/kurkure&extruded-snacks" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Kurkure & Extruded Snacks
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 1 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 1 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/kurkure"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Kurkure
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/rings"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Rings
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/chatori"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Chatori
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/murmure"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Murmure
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="list-none relative flex-col">
                  <Link to="/snacks/chips&wafers" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Haldirams & Bikaji
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 2 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 2 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/bhujia"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Bhujia
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/punjabi-mix"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Punjabi Tadka
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/moong-dal"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Moong Dal
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/kuchh-kuchh"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Kuch Kuch
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/snacks" className="w-full">
              <Button
                className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                disableRipple
              >
                Biscuits & Cookies
              </Button>
            </Link>

            {submenuIndex !== 1 ? (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {submenuIndex === 1 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/snacks/chips-wafers" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Anmol Pvt. Ltd.
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 0 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 0 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/lays"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Butter Bake
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/bingo"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Lemon Maza
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/balaji"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        American Coco
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/uncle-chips"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Orange Cream
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="list-none relative flex-col">
                  <Link to="/snacks/kurkure&extruded-snacks" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Britania Cookies
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 1 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 1 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/kurkure"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Milk Bikis
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/rings"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Tiger
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/chatori"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Orange Cream
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/murmure"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Marie Gold
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="list-none relative flex-col">
                  <Link to="/snacks/chips&wafers" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Parle Biscuits
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 2 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 2 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/bhujia"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Parle-G
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/punjabi-mix"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Happy Happy
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/moong-dal"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Dream Cream
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/kuchh-kuchh"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Butter Delight
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>

          <li className="list-none flex items-center relative flex-col">
            <Link to="/snacks" className="w-full">
              <Button
                className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                disableRipple
              >
                Chocolates & Candies
              </Button>
            </Link>

            {submenuIndex !== 2 ? (
              <FaRegPlusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            ) : (
              <FiMinusSquare
                className="absolute top-[10px] right-[15px] cursor-pointer"
                onClick={() => openSubmenu(2)}
              />
            )}

            {submenuIndex === 2 && (
              <ul className="submenu w-full pl-3">
                <li className="list-none relative flex-col">
                  <Link to="/snacks/chips-wafers" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Cadbury
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 0 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 0 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/lays"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Dairy Milk
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/bingo"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        5-Star
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/balaji"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Crispello
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/uncle-chips"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Celebrations
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="list-none relative flex-col">
                  <Link to="/snacks/kurkure&extruded-snacks" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Priyagold
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 1 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 1 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/kurkure"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Snakker
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/rings"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Choco Bar
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/chatori"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Eclairs
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/kurkure&extruded-snacks/murmure"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Mongo Bite
                      </Link>
                    </li>
                  </ul>
                )}

                <li className="list-none relative flex-col">
                  <Link to="/snacks/chips&wafers" className="w-full">
                    <Button
                      className="w-full !text-left !justify-start px-3 !normal-case !text-[14px] !font-[500] !text-black"
                      disableRipple
                    >
                      Alpenliebe
                    </Button>
                  </Link>
                  {innerSubmenuIndex !== 2 ? (
                    <FaRegPlusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  ) : (
                    <FiMinusSquare
                      className="absolute top-[10px] right-[15px] cursor-pointer"
                      onClick={() => openInnerSubmenu(2)}
                    />
                  )}
                </li>

                {innerSubmenuIndex === 2 && (
                  <ul className="inner-submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/bhujia"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Center Fresh
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/punjabi-mix"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Center Fruit
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/moong-dal"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Choco Blast
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/snacks/chips&wafers/kuchh-kuchh"
                        className="link w-full !text-left !justify-start !px-3 transition !normal-case !text-[14px] !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]"
                        disableRipple
                      >
                        Orange Bite
                      </Link>
                    </li>
                  </ul>
                )}
              </ul>
            )}
          </li>
          
        </ul>
      </div>
  )
}

export default CategoryCollapse;
