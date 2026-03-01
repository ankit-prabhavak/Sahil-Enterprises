import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import Button from "@mui/material/Button";
import { FaRegUser } from "react-icons/fa";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosLogOut } from "react-icons/io";
import { RiHandbagLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchDataFromAPI } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const context = useContext(MyContext);
  const history = useNavigate();


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await fetchDataFromAPI("/api/user/logout");
    context.setIsLoggedIn(false);
    context.setUserData(null); // add this
    history("/login");
  };

  return (
    <header className="bg-white">
      <div className="top-strip py-2 border-t border-gray-200 border-b">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-medium">
                Hurry! Wholesale Discounts Up to 50% — Offer Ends Soon.
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-4">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[12px] link font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[12px] link font-medium transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-b border-gray-200">
        <div className="container flex items-center justify-between">
          <div className="col1 w-[25%]">
            <Link>
              <img
                className="logo pl-25"
                src="/upscalemedia-transformed.png"
                alt="logo"
              />
            </Link>
          </div>

          <div className="col2 w-[40%]">
            <Search />
          </div>

          <div className="col3 w-[35%] flex items-center pl-5 pr-15">
            <ul className="flex items-center justify-end gap-4 w-full">
              {context.isLoggedIn === false ? (
                <li className="list-none">
                  <Link
                    to="/login"
                    className="link transition text-[15px] font-medium"
                  >
                    Login
                  </Link>
                  &nbsp; | &nbsp;
                  <Link
                    to="/register"
                    className="link transition text-[15px] font-medium"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <>
                  <Button
                    className="text-black! myAccountwrap flex items-center gap-3 cursor-pointer"
                    onClick={handleClick}
                  >
                    <Button className="w-10! h-10! min-w-10! rounded-full! bg-[#f1f1f1]!">
                      <FaRegUser className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                    </Button>

                    <div className="info flex flex-col">
                      <h4 className="leading-3 text-[14px] text-[rgba(0,0,0,0.6)] font-medium mb-0 capitalize text-left justify-start">
                        {context?.userData.name}
                      </h4>
                      <span className="text-[12px] text-[rgba(0,0,0,0.6)] font-normal lowercase text-left justify-start">
                        {context?.userData.email}
                      </span>
                    </div>
                  </Button>

                  <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    slotProps={{
                      paper: {
                        elevation: 0,
                        sx: {
                          overflow: "visible",
                          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                          mt: 1.5,
                          "& .MuiAvatar-root": {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                          },
                          "&::before": {
                            content: '""',
                            display: "block",
                            position: "absolute",
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: "background.paper",
                            transform: "translateY(-50%) rotate(45deg)",
                            zIndex: 0,
                          },
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <Link to="/my-account" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 py-2!"
                      >
                        <FaRegUser className="text-[18px]" />
                        <span className="text-[14px]">My account</span>
                      </MenuItem>
                    </Link>
                    <Link to="/my-orders" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 py-2!"
                      >
                        <RiHandbagLine className="text-[18px]" />
                        <span className="text-[14px]">My Orders</span>
                      </MenuItem>
                    </Link>
                    <Link to="/wishlist" className="w-full block">
                      <MenuItem
                        onClick={handleClose}
                        className="flex gap-2 py-2!"
                      >
                        <IoMdHeartEmpty className="text-[18px]" />
                        <span className="text-[14px]">Wishlist</span>
                      </MenuItem>
                    </Link>

                    <MenuItem
                      onClick={handleLogout}
                      className="flex gap-2 py-2!"
                    >
                      <IoIosLogOut className="text-[18px]" />
                      <span className="text-[14px]">Logout</span>
                    </MenuItem>
                  </Menu>
                </>
              )}

              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={5} color="secondary">
                      <IoGitCompareOutline size={25} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Wishlist">
                  <IconButton
                    aria-label="cart"
                    onClick={() => context.setOpenCartPanel(true)}
                  >
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart size={25} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>

              <li>
                <Tooltip title="Favorites">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={3} color="secondary">
                      <FaRegHeart size={25} />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
