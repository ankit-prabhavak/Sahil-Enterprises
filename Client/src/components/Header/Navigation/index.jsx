import React, { useState } from "react";
import Button from "@mui/material/Button";
import { RiMenu2Fill, RiCloseLine } from "react-icons/ri";
import { LiaAngleDownSolid, LiaAngleRightSolid } from "react-icons/lia";
import { IoRocketOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  {
    label: "Snacks",
    to: "/snacks",
    children: [
      {
        label: "Chips",
        to: "/snacks/chips",
        children: [
          { label: "Lays", to: "/snacks/chips/lays" },
          { label: "Bingo", to: "/snacks/chips/Bingo" },
          { label: "Uncle Chips", to: "/snacks/chips/uncle-chips" },
          { label: "Balaji", to: "/snacks/chips/balaji" },
        ],
      },
      { label: "Kurkure", to: "/snacks/kurkure" },
      { label: "Haldirams", to: "/snacks/haldirams" },
      { label: "Bikaji", to: "/snacks/bikaji" },
    ],
  },
  {
    label: "Grocery",
    to: "/grocery",
    children: [
      {
        label: "Goldiee Masale",
        to: "/grocery/goldiee",
        children: [
          { label: "Turmeric Powder", to: "/grocery/goldiee/turmeric" },
          { label: "Chilli Powder", to: "/grocery/goldiee/Red Chilli" },
          { label: "Chicken Masala", to: "/grocery/goldiee/chicken" },
          { label: "Meat Masala", to: "/grocery/goldiee/meat" },
        ],
      },
      { label: "Nestle Maggi", to: "/grocery/noddles" },
      { label: "Toothpastes", to: "/grocery/paste" },
      { label: "Patanjali", to: "/grocery/patanjali" },
    ],
  },
  {
    label: "Stationary",
    to: "/stationery",
    children: [
      {
        label: "Classmate",
        to: "/stationary/classmate",
        children: [
          { label: "Notebooks", to: "/stationary/classmate/notebooks" },
          { label: "Colors Pen", to: "/stationary/classmate/colors" },
          { label: "Pens Picks", to: "/stationary/classmate/pens" },
          { label: "Geometry Boxes", to: "/stationary/classmate/geometry-box" },
        ],
      },
      { label: "Pencils & Others", to: "/stationary/pencils" },
      { label: "Rough Notebooks", to: "/stationary/rough" },
    ],
  },
  {
    label: "Chocolates",
    to: "/chocolates",
    children: [
      {
        label: "Cadbury",
        to: "/chocolates/cadbury",
        children: [
          { label: "Dairy Milk", to: "/chocolates/cadbury/dairy-milk" },
          { label: "Celebrations", to: "/chocolates/cadbury/celebrations" },
          { label: "5-Star", to: "/chocolates/cadbury/5-star" },
          { label: "Crispello", to: "/chocolates/cadbury/crispello" },
          { label: "Chocoblast", to: "/chocolates/cadbury/choco" },
        ],
      },
      {
        label: "Nestle",
        to: "/chocolates/nestle",
        children: [
          { label: "Munch", to: "/chocolates/nestle/munch" },
          { label: "Kit Kat", to: "chocolates/nestle/kitkat" },
          { label: "Milky Bar", to: "/chocolates/nestle/milkybar" },
          { label: "Coffee Candy", to: "/chocolates/nestle/coffee" },
        ],
      },
      {
        label: "Alpenlibe",
        to: "/chocolates/ds",
        children: [
          { label: "Milk Candy", to: "/chocolates/alpenlibe/milk-blast" },
          { label: "Center Fruit", to: "/chocolates/alpenlibe/center-fruit" },
          { label: "Center Fresh", to: "/chocolates/alpenlibe/center-fresh" },
          { label: "Eclairs", to: "/chocolates/alpenlibe/eclairs" },
        ],
      },
    ],
  },
  {
    label: "Personal Care",
    to: "/personal-care",
    children: [
      {
        label: "Facewash",
        to: "/personal-care/facewash",
        children: [
          { label: "Fair & Lovely", to: "/personal-care/facewash/fair-lovely" },
          { label: "Garnier Men", to: "/personal-care/facewash/garnier" },
        ],
      },
      {
        label: "Hair Oils",
        to: "/personal-care/hair-oil",
        children: [
          { label: "Bajaj Almonds", to: "/personal-care/hair-oil/bajaj" },
          { label: "Dabur Amla", to: "/personal-care/hair-oil/dabur" },
        ],
      },
      { label: "Body Soaps", to: "/personal-care/Soap" },
    ],
  },
  {
    label: "Cleaning & Detergent",
    to: "/household",
    children: [
      {
        label: "Detergent",
        to: "/household/detergent",
        children: [
          { label: "Wheel", to: "/household/detergent/wheel" },
          { label: "Surf Excel", to: "/household/detergent/surf-excel" },
          { label: "Ghadi", to: "/household/detergent/ghadi" },
          { label: "Tide", to: "/household/detergent/tide" },
        ],
      },
      {
        label: "Toilet & Bathroom",
        to: "/household/toilet",
        children: [
          { label: "Harpic Blue", to: "/household/toilet/harpic-blue" },
          { label: "Harpic Red", to: "/household/toilet/harpic-red" },
        ],
      },
    ],
  },
  {
    label: "Biscuits & Cookies",
    to: "/biscuits",
    children: [
      {
        label: "Britania",
        to: "/biscuits/britania",
        children: [
          { label: "Milk Bikis", to: "/biscuits/britania/milk-bikis" },
          { label: "Marie Gold", to: "/biscuits/britania/marie" },
          { label: "Bour Bon", to: "/biscuits/britania/bour-bon" },
          { label: "Jim Jam", to: "/biscuits/britania/jim-jam" },
        ],
      },
      { label: "Patanjali", to: "/biscuits/patanjali" },
      { label: "Anmol", to: "/biscuits/anmol" },
      { label: "Sobisco", to: "/biscuits/sobisco" },
    ],
  },
];

const DesktopSubmenu = ({ items }) => (
  <div className="submenu absolute top-[100%] left-0 min-w-[180px] bg-white shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-30">
    <ul>
      {items.map((item) => (
        <li key={item.label} className="list-none w-full relative group/sub">
          <Link to={item.to} className="w-full block">
            <Button
              className="!normal-case !text-[13px] xl:!text-[14px] !font-[500] !text-black hover:!text-[#ff5252] w-full !text-left !justify-start !rounded-none !px-3 !py-2"
              disableRipple
            >
              {item.label}
            </Button>
          </Link>
          {item.children && (
            <div className="submenu absolute top-0 left-full min-w-[180px] bg-white shadow-md opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
              <ul>
                {item.children.map((sub) => (
                  <li key={sub.label} className="list-none w-full">
                    <Link to={sub.to} className="w-full block">
                      <Button className="!text-black/80 w-full !text-left !justify-start !rounded-none !normal-case !text-[13px] xl:!text-[14px] !px-3 !py-2">
                        {sub.label}
                      </Button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
);

const DesktopNav = () => (
  <ul className="hidden md:flex items-center flex-nowrap gap-0 xl:gap-1 nav min-w-0">
    {NAV_ITEMS.map((item) => (
      <li key={item.label} className="list-none relative group shrink-0">
        <Link to={item.to} className="link transition text-[14px] font-[500]">
          <Button
            className="!normal-case !text-[12px] lg:!text-[13px] xl:!text-[14px] !font-[500] !text-black hover:!text-[#ff5252] !py-3 !px-2 lg:!px-3 xl:!px-4 whitespace-nowrap"
            disableRipple
          >
            {item.label}
          </Button>
        </Link>
        {item.children && <DesktopSubmenu items={item.children} />}
      </li>
    ))}
  </ul>
);

const MobileAccordionItem = ({ item, depth = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = Boolean(item.children);

  return (
    <li className="list-none w-full border-b border-gray-100 last:border-b-0">
      <div className="flex items-center w-full">
        <Link
          to={item.to}
          className="flex-1 min-w-0"
          onClick={(e) => hasChildren && e.preventDefault()}
        >
          <Button
            className={`!normal-case !text-[14px] !font-[500] !text-black w-full !text-left !justify-start !rounded-none ${
              depth > 0 ? "!pl-6" : "!pl-4"
            }`}
            disableRipple
          >
            <span className="truncate">{item.label}</span>
          </Button>
        </Link>
        {hasChildren && (
          <button
            type="button"
            aria-label={`${open ? "Collapse" : "Expand"} ${item.label}`}
            onClick={() => setOpen((o) => !o)}
            className="px-4 py-3 shrink-0 text-black/70"
          >
            <LiaAngleRightSolid
              className={`text-[13px] transition-transform duration-200 ${open ? "rotate-90" : ""}`}
            />
          </button>
        )}
      </div>

      {hasChildren && open && (
        <ul className="bg-gray-50">
          {item.children.map((child) => (
            <MobileAccordionItem key={child.label} item={child} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const MobileDrawer = ({ isOpen, onClose, onOpenCategoryPanel }) => (
  <>
    <div
      className={`fixed inset-0 bg-black/40 z-40 transition-opacity md:hidden ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
      aria-hidden="true"
    />
    <div
      className={`fixed top-0 left-0 h-full w-[85%] max-w-[340px] bg-white z-50 shadow-xl transition-transform duration-300 md:hidden overflow-y-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <span className="font-bold text-[15px]">Menu</span>
        <button type="button" aria-label="Close menu" onClick={onClose} className="p-1">
          <RiCloseLine className="text-[22px]" />
        </button>
      </div>

      <div className="px-4 py-3 border-b border-gray-100">
        <Button
          className="!text-black gap-2 w-full font-bold !justify-start !normal-case"
          onClick={() => {
            onOpenCategoryPanel();
            onClose();
          }}
        >
          <RiMenu2Fill className="text-[13px]" />
          Shop By Categories
          <LiaAngleDownSolid className="text-[14px] ml-auto" />
        </Button>
      </div>

      <ul>
        {NAV_ITEMS.map((item) => (
          <MobileAccordionItem key={item.label} item={item} />
        ))}
      </ul>

      <div className="px-4 py-4">
        <Button className="!text-black gap-2 w-full font-bold !justify-start !normal-case">
          <IoRocketOutline className="text-[18px]" />
          In-Store Pickup Offer
        </Button>
      </div>
    </div>
  </>
);

const Navigation = () => {
  const [isOpenPanel, setIsOpenPanel] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const openCategoryPanel = () => {
    setIsOpenPanel(true);
  };

  return (
    <>
      <nav className="py-1 md:py-0">
        <div className="container flex items-center justify-between md:justify-end gap-2 md:gap-3 lg:gap-4 px-3 md:px-0 min-w-0">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden p-2 -ml-2"
          >
            <RiMenu2Fill className="text-[20px]" />
          </button>

          <div className="hidden md:block md:w-[20%] lg:w-[18%] xl:w-[16%] shrink-0 min-w-[180px]">
            <Button
              className="!text-black gap-2 w-full font-bold !normal-case !justify-start !px-2"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[13px]" />
              <span className="truncate">Shop By Categories</span>
              <LiaAngleDownSolid className="text-[14px] ml-auto font-bold" />
            </Button>
          </div>

          <div className="hidden md:block md:flex-1 min-w-0">
            <DesktopNav />
          </div>

          <div className="hidden md:block md:w-[16%] lg:w-[18%] xl:w-[15%] shrink-0">
            <Button className="!text-black gap-2 w-full font-bold !normal-case !justify-start !px-2">
              <IoRocketOutline className="text-[18px]" />
              <span className="hidden xl:inline">In-Store Pickup Offer</span>
              <span className="xl:hidden truncate">Pickup Offer</span>
            </Button>
          </div>

          <button
            type="button"
            aria-label="In-store pickup offer"
            className="md:hidden p-2 -mr-2 text-black"
          >
            <IoRocketOutline className="text-[20px]" />
          </button>
        </div>
      </nav>

      <MobileDrawer
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenCategoryPanel={openCategoryPanel}
      />

      <CategoryPanel isOpenPanel={isOpenPanel} setIsOpenPanel={setIsOpenPanel} />
    </>
  );
};

export default Navigation;