import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { styled } from "@mui/material/styles";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart, FaRegUser } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { Tooltip, Menu, MenuItem, Button } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";
import { IoIosLogOut } from "react-icons/io";
import { RiHandbagLine } from "react-icons/ri";
import { IoMdHeartEmpty } from "react-icons/io";
import { fetchDataFromAPI } from "../../utils/api";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const ActionIcons = ({ onCartClick, className = "" }) => (
  <div className={`flex items-center gap-2 sm:gap-2.5 lg:gap-3 ${className}`}>
    <Tooltip title="Compare">
      <IconButton aria-label="compare" size="small">
        <StyledBadge badgeContent={5} color="secondary">
          <IoGitCompareOutline className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />
        </StyledBadge>
      </IconButton>
    </Tooltip>

    <Tooltip title="Cart">
      <IconButton aria-label="cart" size="small" onClick={onCartClick}>
        <StyledBadge badgeContent={4} color="secondary">
          <MdOutlineShoppingCart className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />
        </StyledBadge>
      </IconButton>
    </Tooltip>

    <Tooltip title="Favorites">
      <IconButton aria-label="favorites" size="small">
        <StyledBadge badgeContent={3} color="secondary">
          <FaRegHeart className="w-5 h-5 lg:w-[22px] lg:h-[22px]" />
        </StyledBadge>
      </IconButton>
    </Tooltip>
  </div>
);

const AuthLinks = ({ className = "" }) => (
  <div className={`flex items-center gap-1.5 text-xs lg:text-sm font-medium whitespace-nowrap ${className}`}>
    <Link to="/login" className="link transition">Login</Link>
    <span className="text-gray-400">|</span>
    <Link to="/register" className="link transition">Register</Link>
  </div>
);

const Header = () => {
  const context = useContext(MyContext);
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuOpen = Boolean(anchorEl);

  const handleMenuOpen = (e) => setAnchorEl(e.currentTarget);
  const handleMenuClose = () => setAnchorEl(null);

  const handleLogout = async () => {
    await fetchDataFromAPI("/api/user/logout");
    context.setIsLoggedIn(false);
    context.setUserData(null);
    context.setAddresses([]);
    handleMenuClose();
    navigate("/login");
  };

  return (
    <header className="bg-white">
      <div className="hidden md:block border-t border-b border-gray-200 py-2">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3">
            <p className="text-xs font-medium truncate">
              Hurry! Wholesale Discounts Up to 50% — Offer Ends Soon.
            </p>
            <ul className="flex items-center gap-4 shrink-0">
              <li>
                <Link to="/help-center" className="text-xs font-medium link transition">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/order-tracking" className="text-xs font-medium link transition">
                  Order Tracking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-b border-gray-200 py-3 md:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="header-wrap flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
            {/* ---------- MOBILE HEADER (stacked layout, kept) ---------- */}
            <div className="mobile-header md:hidden flex items-stretch w-full gap-3">
              <div className="flex items-center flex-1 min-h-[72px]">
                <Link to="/" className="shrink-0">
                  <img
                    src="/upscalemedia-transformed.png"
                    alt="logo"
                    className="h-auto w-24 sm:w-28"
                  />
                </Link>
              </div>

              <div className="flex flex-1 min-h-[72px] flex-col items-end justify-center min-w-0">
                {context.isLoggedIn === false ? (
                  <AuthLinks className="justify-end mb-2 text-[12px] sm:text-sm" />
                ) : (
                  <button
                    type="button"
                    onClick={handleMenuOpen}
                    aria-haspopup="true"
                    aria-expanded={menuOpen}
                    className="mb-2 flex items-center gap-1 max-w-full min-w-0"
                  >
                    <div className="text-right min-w-0">
                      <div className="text-[12px] sm:text-sm font-medium text-black/70 capitalize leading-tight truncate max-w-[150px] sm:max-w-[190px]">
                        {context?.userData?.name}
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-black/50 lowercase leading-tight truncate max-w-[150px] sm:max-w-[190px]">
                        {context?.userData?.email}
                      </div>
                    </div>
                    <IoChevronDown
                      className={`text-black/50 text-xs shrink-0 transition-transform duration-200 ${
                        menuOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                )}

                <ActionIcons
                  className="flex-nowrap justify-end"
                  onCartClick={() => context.setOpenCartPanel(true)}
                />
              </div>
            </div>

            {/* ---------- DESKTOP HEADER ---------- */}
            <div className="hidden md:flex items-center justify-between gap-2 shrink-0 w-full md:w-auto">
              <Link to="/" className="shrink-0">
                <img
                  src="/upscalemedia-transformed.png"
                  alt="logo"
                  className="h-auto w-28 sm:w-32 lg:w-36 xl:w-40"
                />
              </Link>
            </div>

            <div className="w-full md:flex-1 md:max-w-md lg:max-w-lg xl:max-w-xl">
              <Search />
            </div>

            <div className="hidden md:flex items-center justify-end gap-3 lg:gap-4 shrink-0 md:ml-auto">
              {context.isLoggedIn === false ? (
                <AuthLinks />
              ) : (
                <Button
                  className="text-black! flex items-center gap-2 min-w-0! p-0!"
                  onClick={handleMenuOpen}
                  aria-haspopup="true"
                  aria-expanded={menuOpen}
                >
                  <Button className="w-9! h-9! min-w-9! rounded-full! bg-[#f1f1f1]! p-0!">
                    <FaRegUser className="text-base text-black/70" />
                  </Button>
                  <div className="hidden xl:flex flex-col items-start leading-tight">
                    <h4 className="text-[13px] font-medium capitalize text-black/60 mb-0">
                      {context?.userData?.name}
                    </h4>
                    <span className="text-[11px] font-normal lowercase text-black/60">
                      {context?.userData?.email}
                    </span>
                  </div>
                </Button>
              )}

              <ActionIcons onCartClick={() => context.setOpenCartPanel(true)} />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- SINGLE SHARED ACCOUNT MENU ---------- */}
      {/* One Menu instance only, referenced by both the mobile and desktop
          trigger buttons via the same anchorEl. MUI Menu renders through a
          portal into document.body, so keeping two copies (as in the
          original file, one per breakpoint) mounted both at once on click —
          that's what caused the layout to jump/slide. disableScrollLock
          stops MUI from adding scrollbar-compensation padding to <body>
          when the menu opens, which is what was pushing the page content
          to the right. */}
      {context.isLoggedIn && (
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={menuOpen}
          onClose={handleMenuClose}
          onClick={handleMenuClose}
          disableScrollLock
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
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
          <Link to="/my-account" className="block w-full">
            <MenuItem onClick={handleMenuClose} className="flex gap-2 py-2!">
              <FaRegUser className="text-lg" />
              <span className="text-sm">My account</span>
            </MenuItem>
          </Link>
          <Link to="/my-orders" className="block w-full">
            <MenuItem onClick={handleMenuClose} className="flex gap-2 py-2!">
              <RiHandbagLine className="text-lg" />
              <span className="text-sm">My Orders</span>
            </MenuItem>
          </Link>
          <Link to="/wishlist" className="block w-full">
            <MenuItem onClick={handleMenuClose} className="flex gap-2 py-2!">
              <IoMdHeartEmpty className="text-lg" />
              <span className="text-sm">Wishlist</span>
            </MenuItem>
          </Link>
          <MenuItem onClick={handleLogout} className="flex gap-2 py-2!">
            <IoIosLogOut className="text-lg" />
            <span className="text-sm">Logout</span>
          </MenuItem>
        </Menu>
      )}

      <Navigation />
    </header>
  );
};

export default Header;