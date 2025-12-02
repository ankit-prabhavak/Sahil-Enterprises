import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { GoTriangleDown } from "react-icons/go";
import Rating from "@mui/material/Rating";

const CartItem = (props) => {
  const [sizeAnchorEl, setSizeAnchorEl] = React.useState(null);
  const [selectedSize, setSelectedSize] = React.useState(
    props.size || "Pack of 6"
  );

  const [qtyAnchorEl, setQtyAnchorEl] = React.useState(null);
  const [selectedQty, setSelectedQty] = React.useState(props.qty || 1);

  const openSize = Boolean(sizeAnchorEl);
  const handleClickSize = (event) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value) => {
    setSizeAnchorEl(null);

    if (value !== null) {
      setSelectedSize(value);
    }
  };

  const openQty = Boolean(qtyAnchorEl);
  const handleClickQty = (event) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value) => {
    setQtyAnchorEl(null);

    if (value !== null) {
      setSelectedQty(value);
    }
  };

  const price = props.price || "250.00";
  const oldPrice = props.oldPrice || "500.00";

  return (
    <div>
      <div className="cartItem w-full p-3 flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
        <div className="img w-[20%] rounded-md overflow-hidden">
          <Link to="/product/1" className="group">
            <img
              src="https://m.media-amazon.com/images/I/61j4tjFr47L._SL1000_.jpg"
              alt="Product"
              className="w-full group-hover:scale-105 transition-all"
            />
          </Link>
        </div>

        <div className="info w-[80%] relative">
          <IoCloseSharp className="cursor-pointer absolute top-0 right-0 text-[22px] link transition-all" />
          <span className="text-[13px] text-[#666] font-medium">Dettol</span>
          <h3 className="text-[15px] w-[40%]">
            <Link className="link">
              Dettol Original Bathing Soap Bar with 12hr Germ protection (900gm)
              | Kills 99.99% Germs, 150g (Pack of 6)
            </Link>
          </h3>

          <Rating name="small-size" defaultValue={4} size="small" readOnly />

          <div className="flex items-center gap-4 mt-2">
            <div className="relative">
              <span
                className="flex items-center gap-1 justify-center bg-[#f1f1f1] text-[12px] font-semibold rounded-md cursor-pointer py-1 px-2"
                onClick={handleClickSize}
              >
                Buy As: {selectedSize} <GoTriangleDown />
              </span>

              <Menu
                id="size-menu"
                anchorEl={sizeAnchorEl}
                open={openSize}
                onClose={() => handleCloseSize(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseSize("Pack of 6")}>
                  Pack of 6
                </MenuItem>
                <MenuItem onClick={() => handleCloseSize("Box(12 Packs)")}>
                  Box(12 Packs)
                </MenuItem>
              </Menu>
            </div>

            <div className="relative">
              <span
                className="flex items-center gap-1 justify-center bg-[#f1f1f1] text-[12px] font-semibold rounded-md cursor-pointer py-1 px-2"
                onClick={handleClickQty}
              >
                Qty: {selectedQty} <GoTriangleDown />
              </span>
              <Menu
                id="qty-menu"
                anchorEl={qtyAnchorEl}
                open={openQty}
                onClose={() => handleCloseQty(null)}
                slotProps={{
                  list: {
                    "aria-labelledby": "basic-button",
                  },
                }}
              >
                <MenuItem onClick={() => handleCloseQty(1)}>1</MenuItem>
                <MenuItem onClick={() => handleCloseQty(2)}>2</MenuItem>
                <MenuItem onClick={() => handleCloseQty(3)}>3</MenuItem>
                <MenuItem onClick={() => handleCloseQty(4)}>4</MenuItem>
                <MenuItem onClick={() => handleCloseQty(5)}>5</MenuItem>
              </Menu>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <span className=" text-[rgba(0,0,0,0.87)] font-semibold text-[15px]">
              ₹{price}
            </span>

            {oldPrice && (
              <span className="line-through text-[#666] text-[15px] font-medium">
                ₹{oldPrice}
              </span>
            )}

            <span className="text-[#ff5252] font-semibold text-[15px]">
              55% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
