import React from "react";
import SideBar from "../../components/SideBar";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { IoGridSharp } from "react-icons/io5";
import { FaList } from "react-icons/fa6";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ProductItem from "../../components/ProductItem";
import ProductItemListView from "../../components/ProductItemListView";
import { useState } from "react";
import Pagination from "@mui/material/Pagination";


const ProductListing = () => {
  const [itemView, setItemView] = useState("grid");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <section className="py-5 pb-0">
      <div className="container">
        <Breadcrumbs aria-label="breadcrumb">
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition text-[14px]!"
          >
            Home
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/"
            className="link transition text-[14px]!"
          >
            Snacks
          </Link>
        </Breadcrumbs>
      </div>

      <div className="bg-white p-2 mt-4">
        <div className="container flex gap-3">
          <div className="sideBarWrapper w-[20%] h-full bg-white">
            <SideBar />
          </div>

          <div className="rightContent w-[80%] py-2">
            <div className="p-2 w-full mb-0 rounded-md flex items-center justify-between">
              <div className="col1 flex items-center itemViewActions">
                <Button
                  className={`w-10! h-10! min-w-10! rounded-full! text-black! ${itemView === 'grid' && 'active'}`}
                  onClick={() => setItemView("grid")}
                >
                  <IoGridSharp className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <Button
                  className={`w-10! h-10! min-w-10! rounded-full! text-black! ${itemView === 'list' && 'active'}`}
                  onClick={() => setItemView("list")}
                >
                  <FaList className="text-[rgba(0,0,0,0.7)]" />
                </Button>
                <span className="text-[14px] font-medium pl-3 text-[rgba(0,0,0,0.7)]">
                  There 27 Products.
                </span>
              </div>
              <div className="col2 ml-auto flex items-center justify-end gap-3 pr-1">
                <span className="text-[14px] font-medium pl-3 text-[rgba(0,0,0,0.7)]">
                  Sort By:
                </span>
                <Button
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                  className="bg-[rgba(0,0,0,0.1)]! text-[12px]! border! border-[rgba(0,0,0,0.27)]! text-black! capitalize! font-semibold!"
                >
                  Sales, Highest to Lowest
                </Button>
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  slotProps={{
                    list: {
                      "aria-labelledby": "basic-button",
                    },
                  }}
                >
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]!  text-black! capitalize!"
                  >
                    Sales, Highest to Lowest
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]!  text-black! capitalize!"
                  >
                    Relevance
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]!  text-black! capitalize!"
                  >
                    Name, A to Z
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]!  text-black! capitalize!"
                  >
                    Name, Z to A
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]!  text-black! capitalize!"
                  >
                    Price, High to Low
                  </MenuItem>
                  <MenuItem
                    onClick={handleClose}
                    className="text-[13px]!  text-black! capitalize!"
                  >
                    Price, Low to High
                  </MenuItem>
                </Menu>
              </div>
            </div>

            {itemView === "grid" ? (
              <div className="grid grid-cols-5 md:grid-cols-5 gap-2.5">
                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />
                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItem
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />
              </div>
            ) : (
              <div className="pl-2 grid grid-cols-1 md:grid-cols-1 gap-2.5">
                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />
                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />

                <ProductItemListView
                  brand="Dettol"
                  title="Dettol Original Bathing Soap Bar"
                  img="https://m.media-amazon.com/images/I/61j4tjFr47L._SX679_PIbundle-6,TopRight,0,0_AA679SH20_.jpg"
                  img2="https://m.media-amazon.com/images/I/51-1o+BA8JL._SX679_.jpg"
                  description="Trusted skin protection formula that removes 99.99% of germs while keeping skin fresh, clean, and healthy every day."
                  price={301}
                  oldPrice={425}
                  discount={-27}
                />
              </div>
            )}

            <div className="flex items-center justify-center mt-10">
              <Pagination count={10} showFirstButton showLastButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
